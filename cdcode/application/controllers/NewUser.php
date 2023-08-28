<?php 
defined('BASEPATH') OR exit('No direct script access allowed');

class NewUser extends CI_Controller
{
    public function index()
    {
        echo "welcome to new user";
      
        
    }
    public function register()
    {
           $this->load->view('signup');
           $this->load->library('form_validation');
       
           $this->form_validation->set_rules('name','Username','required');
           $this->form_validation->set_rules('mail','Email','required');
           $this->form_validation->set_rules('psw','password','required');


           if ($this->form_validation->run() == FALSE)
                {
                        //$this->load->view('myform');
                        echo "<script>alert('please enter valid details')</script>";
                }
                else
                { 
                      // echo "sucessfully submited";
                        // $this->load->view('formsuccess');


           if(isset($_POST['submit'])) 
           {
               // print_r($_POST);
               // $data['name'] = $this->input->post('name');
               // $data['mail'] = $this->input->post('mail');
               // $data['psw'] = $this->input->post('psw');

               $name = $this->input->post('name');
               $email = $this->input->post('mail');
               $password = $this->input->post('psw');

               $data = array(
                   'name' =>$name,
                   'mail' => $email,
                   'psw' => $password
                  );

                  



               $insert_data = $this->User_Model->insertData($data);
            //  $insert_data = $this->db->insert('citb',$data);
               if($insert_data){
                echo "<script>alert('sucessfully submited');</script>";
            //    $this->session->set_flashdata('item','Data added successfully'); 
            //    redirect('user/register'); 
               } else {
               $this->session->set_flashdata('item','Error in inserting'); 
               redirect('NewUser/register');

               }

               //redirect(base_url().'User');
           }
                }


    }



         // delete data

         public function delete_user(){
            $id=$this->input->get('id');
           $data =$this->User_Model->delete_records($id);
           if($data)
           {

           // echo "<script> alert('deleted user')</script>";
            redirect(base_url().'NewUser\displaydata');

           }
           else 
           {
            echo "<script> alert('user record is not deleted')</script>";
           }
          
            
         }



          // to display data
        public function displaydata()
        {
        $data['citb']=$this->User_Model->display_records();
        $this->load->view('demo',$data);
        }


        // getdata 


        public function getdata()
	    {
	    $id=$this->input->get('id');
	    $result['data']=$this->User_Model->get_records($id);
	    $this->load->view('updatedata',$result);


        }


        // updata data

        public function updatedata()

        {
            // $this->load->view('updatedata');
        
	
		if($this->input->post('Update'))
		{
        $id=$this->input->get('id');
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
            //echo "<script>alert('sucessfully updated')</script>";
            redirect(base_url().'NewUser\displaydata');

           
            } 
            
            else {
           //$this->session->set_flashdata('item','Error in updateing'); 

           echo "<script>alert('Error in updateing')</script>";
            // redirect('user/updatedata');

            }


		}
	    }


}

