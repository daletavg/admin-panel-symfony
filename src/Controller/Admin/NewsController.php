<?php

namespace App\Controller\Admin;

use App\Entity\News;
use App\Form\Admin\News\NewsType;
use App\Form\Admin\News\EditNewsType;
use App\Repository\NewsRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


/**
 * Class NewsController
 * @package App\Controller\Admin
 * @Route("/admin/news")
 */
class NewsController extends AdminController
{
    /**
     * @Route("", name="admin_news")
     * @param NewsRepository $news
     */
    public function index(NewsRepository $news)
    {
        $this->data['cardTitle'] = 'Новости';

        $news->findAll();
        return $this->render('admin/news/index.html.twig', [
            'controller_name' => 'NewsController',
                'items'=> $news->findAll()
        ]+$this->data);
    }
    /**
     * @Route("/create", name="admin_news_create")
     */
    public function create()
    {
        $this->data['cardTitle'] = 'Создание новости';
        $form = $this->createForm(NewsType::class);


        return $this->render('admin/news/create.html.twig', [
                'controller_name' => 'NewsController',
                'form'=>$form->createView()
            ]+$this->data);
    }
    /**
     * @Route("/store", name="admin_news_store", methods={"POST"})
     * @param Request $request
     */
    public function store(Request $request)
    {

        $news = new News();
        $form = $this->createForm(NewsType::class,$news);
        $form->handleRequest($request);


        if ($form->isSubmitted() && $form->isValid()) {
            /** @var UploadedFile $image */
            $image = $form['image']->getData();


            // this condition is needed because the 'brochure' field is not required
            // so the PDF file must be processed only when a file is uploaded
            if ($image) {
                $originalFilename = pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME);

                // this is needed to safely include the file name as part of the URL
                $safeFilename = md5(time());
                $newFilename = $safeFilename.'.'.$image->guessExtension();

                // Move the file to the directory where brochures are stored
                try {
                    $image->move(
                        $this->getParameter('news_directory'),
                        $newFilename
                    );
                } catch (FileException $e) {
                    // ... handle exception if something happens during file upload
                }

                // updates the 'brochureFilename' property to store the PDF file name
                // instead of its contents
                $news->setImage($this->getParameter('news_directory').'/'.$newFilename);
                $em = $this->getDoctrine()->getManager();
                $em->persist($news);
                $em->flush();
            }

            // ... persist the $product variable or any other work

            return $this->redirect($this->generateUrl('admin_news'));
        }
        return $this->redirect($this->generateUrl('admin_news'));
    }

    /**
     * @Route("/edit/{id}", name="admin_news_edit")
     * @param int $id
     * @param NewsRepository $news
     */
    public function edit(int $id, NewsRepository $news)
    {
        $currentNews = $news->find($id);
        $form = $this->createForm(NewsType::class,$currentNews);

      //  $form['image_path']= $currentNews->getImage();
        return $this->render('admin/news/edit.html.twig', [
                'controller_name' => 'NewsController',
                'form'=>$form->createView(),
                'old_image' => $currentNews->getImage(),
                'news'=>$currentNews
            ]+$this->data);
    }
    /**
     * @Route("/update/{id}", name="admin_news_update", methods={"POST"})
     * @param Request $request
     * @param int $id
     * @param NewsRepository $news
     */
    public function update(Request $request,int $id, NewsRepository $news)
    {
        $news = $news->find($id);
        $form = $this->createForm(NewsType::class,$news);
        $form->handleRequest($request);



        if ($form->isSubmitted() && $form->isValid()) {
            /** @var UploadedFile $image */
            $image = $form['image']->getData();


            // this condition is needed because the 'brochure' field is not required
            // so the PDF file must be processed only when a file is uploaded
            if ($image) {
                $fileSystem =  new Filesystem();
                $fileSystem->remove([$news->getImage()]);


                // this is needed to safely include the file name as part of the URL
                $safeFilename = md5(time());
                $newFilename = $safeFilename.'.'.$image->guessExtension();

                // Move the file to the directory where brochures are stored
                try {
                    $image->move(
                        $this->getParameter('news_directory'),
                        $newFilename
                    );
                } catch (FileException $e) {
                    // ... handle exception if something happens during file upload
                }

                // updates the 'brochureFilename' property to store the PDF file name
                // instead of its contents
                $news->setImage($this->getParameter('news_directory').'/'.$newFilename);

            }
            $em = $this->getDoctrine()->getManager();
            $em->persist($news);
            $em->flush();
            // ... persist the $product variable or any other work

            return $this->redirect($this->generateUrl('admin_news'));
        }
        return $this->redirect($this->generateUrl('admin_news'));
    }

    /**
     * @Route("/admin/news/destroy",name="admin_news_destroy",methods="POST")
     * @param Request $request
     * @param NewsRepository $newsRepository
     * @return Response
     */
    public function destroy(Request $request, NewsRepository $newsRepository)
    {
        $id = $request->request->get('id');
//        $rep = $this->getDoctrine()->getRepository(News::class);
        $news = $newsRepository->find($id);
        $fileSystem =  new Filesystem();
        $fileSystem->remove([$news->getImage()]);
        $em = $this->getDoctrine()->getManager();
        $em->remove($news);
        $em->flush();
        return $this->redirect($this->generateUrl('admin_news'));
    }
}
