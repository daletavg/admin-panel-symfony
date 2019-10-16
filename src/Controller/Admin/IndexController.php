<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AdminController
{
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @Route("/admin/index", name="admin_index")
     */
    public function index()
    {
        $this->data['cardTitle'] = 'Главная страница';
        return $this->render('admin/index/index.html.twig', ([
            'controller_name' => 'IndexController',
        ]+$this->data));
    }
}
