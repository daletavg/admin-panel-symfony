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
            ['link'=>'',
                'name'=>'Афиши',
                'icon'=>'list_alt'],
            ['link'=>'',
                'name'=>'Гастроли',
                'icon'=>'flight_takeoff'],
            ['link'=>'',
                'name'=>'О компании',
                'icon'=>'description'],
            ['link'=>'',
                'name'=>'Партнеры',
                'icon'=>'people_alt'],
            ['link'=>'',
                'name'=>'Города',
                'icon'=>'location_city'],
            ['link'=>'',
                'name'=>'Настройки',
                'icon'=>'settings'],
            ['link'=>'admin_profile',
                'name'=>'Профиль',
                'icon'=>'person'],
        ];
    }
}