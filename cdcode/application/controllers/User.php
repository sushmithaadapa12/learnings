<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class user extends CI_Controller{

    function __construct()
    {
        parent::__construct();
        $this->load->library('session');
    }


    public function index()
    {
        //echo "sucessfully submited";
       
    //     $this->load->library('form_validation');
    //     $this->load->helper('form','url');
    //         $this->load->database();
    //    // $this->load->model('User_Model');
      

    echo "welcome this is default method";
  



      // fetch data from database

    //    $this->load->model('User_Model');
    //    $data['citb']= $this->User_Model->select();

    //   $this->load->view('user/demo', $data);
    //  // $this->load->view('demo');


        }



    // to insert data


     public function signin()
     {
            $this->load->view('sign');
        
         $this->form_validation->set_rules('name','Username','required');
          $this->form_validation->set_rules('mail','Email','required');
          $this->form_validation->set_rules('address','Address','required');
           $this->form_validation->set_rules('psw','password','required');



           if ($this->form_validation->run() == FALSE)
           {
                   //$this->load->view('signin');
                   echo "please enter valid details";
           }
           else
           { 
                //   echo "<script>alert('formsuccess')</script>";
                   // $this->load->view('formsuccess');




            if(isset($_POST['submit'])) 
            {
                // print_r($_POST);
                // $data['name'] = $this->input->post('name');
                // $data['mail'] = $this->input->post('mail');
                // $data['psw'] = $this->input->post('psw');

                $name = $this->input->post('name');
                $email = $this->input->post('mail');
                $address = $this->input->post('address');
                $password = $this->input->post('psw');
               

                $data = array(
                    'name' =>$name,
                    'mail' => $email,
                    'address'=> $address,
                    'psw' => $password
                    
                   );
                $insert_data = $this->New_Model->insertData($data);
             //  $insert_data = $this->db->insert('citb',$data);
                if($insert_data){
                    echo "<script>alert('sucessfully inserted')</script>";
                // $this->session->set_flashdata('item','Data added successfully'); 
                // redirect('user/register'); 
                } else {
                // $this->session->set_flashdata('item','Error in inserting'); 
                echo "<script>alert('error in  inserting')</script>";
                // redirect('user/register');

                }

                //redirect(base_url().'User');
            }

           }











     }

        // to display data
        public function displaydata()
        {
        $data['Usertb']=$this->User_Model->display_records();
        $this->load->view('demo',$data);
        }

       
         // delete data

         public function delete_user(){
            $id=$this->input->get('id');
           $data =$this->User_Model->delete_records($id);
           if($data)
           {

           // echo "<script> alert('deleted user')</script>";
            redirect(base_url().'user\displaydata');

           }
           else 
           {
            echo "<script> alert('user record is not deleted')</script>";
           }
          
            
         }



        //          public function edit($id)
        //             {
        //           $this->load->model('UserModel');
        //         if(isset($_POST['submit']))
        //           {


        //          $this->load->model('User_Model');
        //          $data['name'] = $this->input->post('name');
        //           $data['mail'] = $this->input->post('mail');
        //          $data['psw'] = $this->input->post('psw');

        //    $data['citb']=$this->User_Model->delete_records();
        //    $data['citb']=$this->User_Model->delete_records();
        //         $this->UserModel->insert('edit',$data);

        //         redirect(base_url().'User');
        //     }
    
        // }

        public function getdata()
	    {
	    $id=$this->input->get('id');
	    $result['data']=$this->User_Model->get_records($id);
	    $this->load->view('updatedata',$result);


        }
        
        public function updatedata()

        {
            // $this->load->view('updatedata');
        
	
		if($this->input->post('Update'))
		{
        $id=$this->input->post('id');
		$first_name=$this->input->post('updatename');
		$email=$this->input->post('updatemail');
		$password=$this->input->post('updatepsw');
        // $data = array(
        //     'name' =>$first_name,
        //     'mail' => $email,
        //     'psw' => $password
        //    );
		 $res = $this->User_Model->update_records($first_name,$email,$password,$id);
         if($res){
            //$this->session->set_flashdata('item','Data updated successfully'); 
            echo "<script>alert('sucessfully updated')</script>";
            //redirect('user/updatedata'); 
            } else {
           //$this->session->set_flashdata('item','Error in updateing'); 

           echo "<script>alert('Error in updateing')</script>";
            // redirect('user/updatedata');

            }


		}
	    }
    }
    
?>
