<?php


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class AjaxController
 * @package App\Controller
 * @Route("/ajax")
 */
class AjaxController extends AbstractController
{

    /**
     * @Route("/delete-image",name="ajax_delete_image",methods="POST")
     * @param Request $request
     */
    public function deleteImage(Request $request)
    {

    }
}