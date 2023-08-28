<?php
class New_Model extends CI_Model 
{
    function __construct()
    {
        parent::__construct();
        // $this->load->library('database');
    }


    // inser model
    function insertData($data)
    {
      $res=   $this->db->insert('userstb',$data);

      return $res;

    }
}
?>
