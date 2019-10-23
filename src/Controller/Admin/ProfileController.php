<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Form\Admin\PasswordProfileType;
use App\Form\Admin\UsernameProfileType;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBag;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoder;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class ProfileController extends AdminController
{
    /**
     * @Route("/admin/profile", name="admin_profile")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(Request $request)
    {
        $this->data['cardTitle'] = 'Редактирование профиля';

        $user = $this->getUser();
        $form = $this->createForm(UsernameProfileType::class, $user);
        $passwordForm = $this->createForm(PasswordProfileType::class);
        $form->handleRequest($request);
        $data = array_merge([
            'controller_name' => 'ProfileController',
            'form' => $form->createView(),
            'password_form'=> $passwordForm->createView()

        ], $this->data);
        return $this->render('admin/profile/index.html.twig', $data);
    }

    /**
     * @Route("/admin/profile/editUsername", name="admin_profile_username")
     * @param Request $request
     * @return Response
     */
    public function editUsername(Request $request): Response
    {
        $form = $this->createForm(UsernameProfileType::class);
        $form->handleRequest($request);

//        return $this->redirect($this->generateUrl('admin_profile'));
        if ($form->isSubmitted() && $form->isValid()) {

            $entityManager = $this->getDoctrine()->getManager();
            $user = $entityManager->getRepository(User::class)->find($this->getUser()->getId());
            $user->setUsername($form->getData()['username']);
            $user->setEmail($form->getData()['email']);
            $entityManager->persist($user);
            $entityManager->flush();
            $this->addFlash('success','Данные успешно изменены!');
            return $this->redirect($this->generateUrl('admin_profile'));
        }
        $this->addFlash('error','Что-то пошло не так!');
        return $this->redirect($this->generateUrl('admin_profile'));
    }

    /**
     * @Route("/admin/profile/editPassword", name="admin_profile_password")
     * @param Request $request
     * @param UserPasswordEncoderInterface $encoder
     * @param UserRepository $userRepository
     * @return Response
     */
    public function  editPassword(Request $request,UserPasswordEncoderInterface $encoder,UserRepository $userRepository)
    {
       // dd($request->request->all());
        $form = $this->createForm(PasswordProfileType::class);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid())
        {
           $passwordData = $form->getData();
           $currentPassword = $passwordData['password'];
           $plainPassword = $passwordData['plainPassword'];
           $user =  $userRepository->findOneBy(['username' => $this->getUser()->getUsername()]);
           if(!$encoder->isPasswordValid($user,$currentPassword))
           {
               $this->addFlash('error','Текущий пароль не совпадает!');
               return $this->redirectToRoute('admin_profile');
           }
           else if($user->getPassword()== $encoder->encodePassword($user,$plainPassword))
           {
               $this->addFlash('error','Новый пароль и старый пароль совпадают!');
               return $this->redirectToRoute('admin_profile');
           }
           else
           {
               $entityManager = $this->getDoctrine()->getManager();
               $password = $encoder->encodePassword($user, $plainPassword);
               $user->setPassword($password);
               $entityManager->persist($user);
               $entityManager->flush();
//               $userRepository->flush();
               $this->addFlash('success','Пароль успешно изменен!');
               return $this->redirectToRoute('admin_profile');
           }
        }
        return $this->redirectToRoute('admin_profile');
    }
}
