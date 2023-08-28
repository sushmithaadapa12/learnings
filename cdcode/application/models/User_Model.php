<?php
class User_Model extends CI_Model {

    function __construct()
    {
        parent::__construct();
        // $this->load->library('database');
    }


    // insert model
    public function insertData($data)
    {
    
        $result = $this->db->insert('citb',$data);
        return $result;
    }
    



    // retrive model
    public function display_records()  
    {  
         $query=$this->db->get("citb");

        //  if($query->num->rows()>0)       //  to check num of rows
        //  {

        // or 
        //$query = $this->db->query("select *from citb");
        return $query->result();

        //  }
        //  else
        //  {
        //     return false;
        //  }
    }  

    public function get_records($id)
    {
        $q = $this->db->query("select * from citb  where id = '$id' ");
        return $q->result();
    }

    

    // update records from database model
    
    function update_records($first_name,$email,$password,$id)
	{       
        $query=$this->db->query("update citb SET name ='$first_name', mail='$email', psw='$password' where id='$id' ");
       // print_r($query); exit;
        return $query;
        
	}

    
   

    function delete_records($id)
    {

        $query = $this->db->query("delete from citb where id = '$id' ");
        return $query;
    }



}
?>