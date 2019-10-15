<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AdminController
{
    /**
     * @Route("/admin/index", name="admin_index")
     */
    public function index()
    {

        $data = [];
        $data['content'] = $this->render('admin/index/index.html.twig', [
            'controller_name' => 'IndexController',
        ]);
        return $this->main($data);
    }
}
