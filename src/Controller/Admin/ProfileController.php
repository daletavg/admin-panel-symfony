<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Form\Admin\UsernameProfileType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

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
        $form->handleRequest($request);
        $data = array_merge([
            'controller_name' => 'ProfileController',
            'form' => $form->createView()

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


        if ($form->isSubmitted() && $form->isValid()) {

            $entityManager = $this->getDoctrine()->getManager();
            $user = $entityManager->getRepository(User::class)->find($this->getUser()->getId());
            $this->getUser()->setUsername($form->getData()['username']);
            $this->getUser()->setEmail($form->getData()['email']);
            $user->setUsername($form->getData()['username']);
            $user->setEmail($form->getData()['email']);
            $entityManager->persist($user);
            $entityManager->flush();
            dump('ok');
        }
        dd( 1);

    }
}
