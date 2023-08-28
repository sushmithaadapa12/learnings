<?php

namespace App\Models;

use \PDO;

class DB
{
    private $host = 'localhost:3306';
    private $user = 'root';
    private $pass = '';
    private $dbname = 'customers_api';

    public function connect()
    {
        // $conn = new PDO("mysql:host=127.0.0.1:3306;dbname=customers_api;", "root", "");
        $conn = new PDO("mysql:host=$this->host;dbname=$this->dbname;", $this->user, $this->pass);

        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        return $conn;
    }
}
