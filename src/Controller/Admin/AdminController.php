<?php


namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

abstract class AdminController extends AbstractController
{

    public function main($data)
    {
        return $this->render('admin/layouts/base.html.twig',$data);
    }
}