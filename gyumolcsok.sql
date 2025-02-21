-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Feb 20, 2025 at 03:05 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gyumolcsok`
--

-- --------------------------------------------------------

--
-- Table structure for table `gyumolcs`
--

DROP TABLE IF EXISTS `gyumolcs`;
CREATE TABLE `gyumolcs` (
  `id` bigint(20) NOT NULL,
  `nev` varchar(32) NOT NULL,
  `mennyiség` int(11) NOT NULL,
  `egységár` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- Dumping data for table `gyumolcs`
--

INSERT INTO `gyumolcs` (`id`, `nev`, `mennyiség`, `egységár`) VALUES
(1, 'Alma', 10, 300),
(2, 'Banán', 5, 250),
(3, 'Narancs', 8, 400),
(4, 'Szőlő', 2, 600),
(5, 'Körte', 7, 350),
(6, 'Eper', 12, 500),
(7, 'Cseresznye', 4, 700),
(8, 'Málna', 6, 800),
(9, 'Szilva', 9, 450),
(10, 'Dinnye', 3, 900),
(11, 'Citrom', 5, 300),
(12, 'Mangó', 2, 1000),
(13, 'Kivi', 7, 550),
(14, 'Ananász', 1, 1200),
(15, 'Őszibarack', 8, 650);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gyumolcs`
--
ALTER TABLE `gyumolcs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `gyumolcs`
--
ALTER TABLE `gyumolcs`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
