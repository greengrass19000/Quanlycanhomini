-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 20, 2022 at 05:12 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `canhomini`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(8) NOT NULL,
  `accountType` varchar(10) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `firstName` varchar(8) NOT NULL,
  `lastName` varchar(8) NOT NULL,
  `birthdate` date NOT NULL,
  `phone` varchar(10) NOT NULL,
  `email` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `accountType`, `username`, `password`, `firstName`, `lastName`, `birthdate`, `phone`, `email`) VALUES
(10000000, 'host', 'abc', 'abc12345', 'Huu Fuck', 'Hoang Fa', '2022-04-01', '0123456789', 'fanxipan@gmail.com'),
(10000001, 'renter', 'xyz', 'xyz12345', 'Huu Dug', 'Hoang Fa', '2022-04-01', '0123456788', 'fanxipan123@gmail.com'),
(10000002, 'renter', 'def', 'def1000', 'Quan', 'Phan Din', '2022-04-02', '0123456787', 'fan7di@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `buildings`
--

CREATE TABLE `buildings` (
  `id` int(8) NOT NULL,
  `hostID` int(8) NOT NULL,
  `district` text NOT NULL,
  `ward` text NOT NULL,
  `street` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `buildings`
--

INSERT INTO `buildings` (`id`, `hostID`, `district`, `ward`, `street`) VALUES
(10000000, 10000000, 'Quan Cau Giay', 'Phuong Cau Dien', 'Duong Ho Tung Mau'),
(10000001, 10000000, 'Quan Am Phu', 'Phuong Dia Nguc', 'Duong Hell');

-- --------------------------------------------------------

--
-- Table structure for table `contracts`
--

CREATE TABLE `contracts` (
  `id` int(8) NOT NULL,
  `roomID` int(8) NOT NULL,
  `hostID` int(8) NOT NULL,
  `renterID` int(8) NOT NULL,
  `deposit` int(8) NOT NULL,
  `startTime` date NOT NULL,
  `endTime` date NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `hosts`
--

CREATE TABLE `hosts` (
  `id` int(8) NOT NULL,
  `property` int(10) NOT NULL,
  `contact` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hosts`
--

INSERT INTO `hosts` (`id`, `property`, `contact`) VALUES
(10000000, 10000, 'Muon thue nha lien he https://www.facebook.com/huuphucccc');

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

CREATE TABLE `invoices` (
  `id` int(8) NOT NULL,
  `roomID` int(8) NOT NULL,
  `type` text NOT NULL,
  `price` int(8) NOT NULL,
  `time` date NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `renters`
--

CREATE TABLE `renters` (
  `id` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `renters`
--

INSERT INTO `renters` (`id`) VALUES
(10000001),
(10000002);

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `id` int(8) NOT NULL,
  `buildingID` int(8) NOT NULL,
  `floorNo` int(2) NOT NULL,
  `roomNo` int(3) NOT NULL,
  `rentalPrice` int(8) NOT NULL,
  `description` text NOT NULL,
  `image` text DEFAULT NULL,
  `limit` int(1) NOT NULL,
  `utilities` text NOT NULL,
  `state` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`id`, `buildingID`, `floorNo`, `roomNo`, `rentalPrice`, `description`, `image`, `limit`, `utilities`, `state`) VALUES
(10000000, 10000000, 1, 1, 10000, 'Cai gi cung co', 'https://www.facebook.com/bongdatructuyentv/photos/a.903343389682934/5725874680763090/', 2, 'Cai gi cung co', 'Còn trống'),
(10000001, 10000000, 2, 1, 10000, 'Cai gi cung co', 'https://www.facebook.com/bongdatructuyentv/photos/a.903343389682934/5725874680763090/', 2, 'Cgcc', 'Đã thuê');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `buildings`
--
ALTER TABLE `buildings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Building_fk0` (`hostID`);

--
-- Indexes for table `contracts`
--
ALTER TABLE `contracts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roomID` (`roomID`),
  ADD KEY `Contract_fk1` (`hostID`),
  ADD KEY `Contract_fk2` (`renterID`);

--
-- Indexes for table `hosts`
--
ALTER TABLE `hosts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Invoice_fk0` (`roomID`);

--
-- Indexes for table `renters`
--
ALTER TABLE `renters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Room_fk0` (`buildingID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50000002;

--
-- AUTO_INCREMENT for table `buildings`
--
ALTER TABLE `buildings`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40000000;

--
-- AUTO_INCREMENT for table `contracts`
--
ALTER TABLE `contracts`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20000000;

--
-- AUTO_INCREMENT for table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30000000;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10000002;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `buildings`
--
ALTER TABLE `buildings`
  ADD CONSTRAINT `Building_fk0` FOREIGN KEY (`hostID`) REFERENCES `hosts` (`id`);

--
-- Constraints for table `contracts`
--
ALTER TABLE `contracts`
  ADD CONSTRAINT `Contract_fk0` FOREIGN KEY (`roomID`) REFERENCES `rooms` (`id`),
  ADD CONSTRAINT `Contract_fk1` FOREIGN KEY (`hostID`) REFERENCES `hosts` (`id`),
  ADD CONSTRAINT `Contract_fk2` FOREIGN KEY (`renterID`) REFERENCES `renters` (`id`);

--
-- Constraints for table `hosts`
--
ALTER TABLE `hosts`
  ADD CONSTRAINT `Host_fk0` FOREIGN KEY (`id`) REFERENCES `accounts` (`id`);

--
-- Constraints for table `invoices`
--
ALTER TABLE `invoices`
  ADD CONSTRAINT `Invoice_fk0` FOREIGN KEY (`roomID`) REFERENCES `rooms` (`id`);

--
-- Constraints for table `renters`
--
ALTER TABLE `renters`
  ADD CONSTRAINT `Renter_fk0` FOREIGN KEY (`id`) REFERENCES `accounts` (`id`);

--
-- Constraints for table `rooms`
--
ALTER TABLE `rooms`
  ADD CONSTRAINT `Room_fk0` FOREIGN KEY (`buildingID`) REFERENCES `buildings` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
