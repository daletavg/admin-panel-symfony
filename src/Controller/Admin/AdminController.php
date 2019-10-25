<?php


namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

abstract class AdminController extends AbstractController
{
    protected $data = [];

    public function __construct()
    {
        $this->data['cardTitle'] = 'Page';
        $this->data['menu']=[
            ['link'=>'admin_news',
                'name'=>'Новости',
                'icon'=>'list_alt'],
            ['link'=>'admin_profile',
                'name'=>'Профиль',
                'icon'=>'person'],
        ];
    }
}