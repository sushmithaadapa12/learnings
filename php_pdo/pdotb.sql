-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 03, 2022 at 10:39 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pdodb`
--

-- --------------------------------------------------------

--
-- Table structure for table `pdotb`
--

CREATE TABLE `pdotb` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `num` bigint(255) NOT NULL,
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pdotb`
--

INSERT INTO `pdotb` (`id`, `name`, `mail`, `num`, `address`) VALUES
(1, 'venkaktesh', 'vekatesh.y@krify.com', 7207700270, 'jaggampeta'),
(2, 'siva', 'siva@gmail.com', 7412589630, 'ramachandharpuram'),
(3, 'ajay', 'ajay@gmail.com', 8794561230, 'bavaram'),
(4, 'pavan', 'pavan.p@krify.com', 7458691330, 'peddhapuram'),
(5, 'kalyan', 'kalyan@gmail.com', 674892130, 'pitapuram'),
(6, 'lakshmi', 'lakshmi@gmail.com', 856479620, 'chennai'),
(7, 'suneel', 'suneel.s@krify.com', 88774569640, 'pitapuram'),
(8, 'lokesh', 'lokesh@gmail.com', 88774569640, 'lokesh@gmail.com'),
(9, 'srivishnu', 'srivishnu@gmail.com', 7415682390, 'srivishnu@123'),
(13, 'anusha', 'anusha@gmail.com', 7458691330, 'anu@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pdotb`
--
ALTER TABLE `pdotb`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pdotb`
--
ALTER TABLE `pdotb`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
