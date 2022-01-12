-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Jan 12, 2022 at 03:32 PM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookshelf_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `Book`
--

CREATE TABLE `Book` (
  `id` int(11) NOT NULL,
  `author` varchar(50) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  `title` varchar(100) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  `edition` date NOT NULL,
  `publishing` varchar(100) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  `bookshelf` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Book`
--

INSERT INTO `Book` (`id`, `author`, `title`, `edition`, `publishing`, `bookshelf`) VALUES
(1, 'Arnold Claword', 'Life and Success of Freddie Dredd', '2017-12-06', 'Blue Dog', 1),
(2, 'Fisk Luthor', 'Actor in the river', '2003-12-11', 'Endless cooper', 2),
(3, 'Arnold Claword', 'Wrong way', '2021-12-02', 'Darkwave', 1),
(4, 'Arnold Claword', 'Collection of Best Arnold`s Claword Horrors', '2021-12-24', 'Better than cinema', 3),
(5, 'Fisk Luthor', 'Flower end', '2001-02-12', 'Endless cooper', 2),
(6, 'Fisk Luthor', 'Flower end', '2001-02-12', 'Endless cooper', 4),
(7, 'Steven King', 'IT', '2001-11-30', 'Helloween books', 1),
(8, 'Hilary Mantel', 'Wolf Hall', '2009-05-15', 'Astra Starz', 2),
(9, 'WG Sebald', 'Austerlitz', '2001-11-11', 'Globus', 1),
(10, 'Philip Roth', 'The Plot Against America', '2014-03-05', 'Globus', 4),
(11, 'Sarah Waters', 'Fingersmith', '2005-07-12', 'St. Luric', 5),
(12, 'Kate Atkinson', 'Life after life', '2013-12-24', 'Eve Present', 5),
(13, 'Sally Rooney', 'Normal people', '2018-08-14', 'Globus', 2),
(14, 'Ian McEwen', 'Atonement', '2001-09-09', 'Astra Stars', 5),
(15, 'Andrea Levy', 'Small Island', '2004-06-03', 'Carhartt', 4),
(16, 'Tony Judt', 'Post War', '2005-10-01', 'Mistery freedom', 2),
(17, 'Barbara Demick', 'Nothing to Envy', '2009-05-15', 'Globus', 5),
(18, 'Katharine Sophie Viner', 'The 100 best books of the 21st century (part 1)', '2021-09-21', 'The Guardian', 3);

-- --------------------------------------------------------

--
-- Table structure for table `BookNovelLink`
--

CREATE TABLE `BookNovelLink` (
  `id_book` int(11) NOT NULL,
  `id_novel` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `BookNovelLink`
--

INSERT INTO `BookNovelLink` (`id_book`, `id_novel`) VALUES
(1, 1),
(4, 1),
(2, 2),
(3, 3),
(4, 3),
(5, 4),
(6, 4),
(7, 5),
(8, 6),
(18, 6),
(9, 7),
(18, 7),
(10, 8),
(18, 8),
(11, 9),
(18, 9),
(12, 10),
(18, 10),
(13, 11),
(18, 11),
(14, 12),
(18, 12),
(15, 13),
(18, 13),
(16, 14),
(18, 14),
(17, 15),
(18, 15);

-- --------------------------------------------------------

--
-- Table structure for table `Novel`
--

CREATE TABLE `Novel` (
  `id` int(11) NOT NULL,
  `author` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `genre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Novel`
--

INSERT INTO `Novel` (`id`, `author`, `title`, `genre`) VALUES
(1, 'Arnold Claword', 'Life and Success of Freddie Dredd', 'Horror'),
(2, 'Fisk Luthor', 'Actor in the river', 'Poetry'),
(3, 'Arnold Claword', 'Wrong way', 'Horror'),
(4, 'Fisk Luthor', 'Flower end', 'Comedy'),
(5, 'Steven King', 'IT', 'Horror'),
(6, 'Hilary Mantel', 'Wolf Hall', 'Historical'),
(7, 'WG Sebald', 'Austerlitz', 'Novel'),
(8, 'Philip Roth', 'The Plot Against America', 'Novel'),
(9, 'Sarah Waters', 'Fingersmith', 'Novel'),
(10, 'Kate Atkinson', 'Life after life', 'Novel'),
(11, 'Sally Rooney', 'Normal people', 'Novel'),
(12, 'Ian McEwen', 'Atonement', 'Novel'),
(13, 'Andrea Levy', 'Small Island', 'Novel'),
(14, 'Tony Judt', 'Post War', 'Novel'),
(15, 'Barbara Demick', 'Nothing to Envy', 'Novel');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Book`
--
ALTER TABLE `Book`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `BookNovelLink`
--
ALTER TABLE `BookNovelLink`
  ADD UNIQUE KEY `IX_BookNovelLink` (`id_book`,`id_novel`) USING BTREE,
  ADD KEY `fk_id_novel` (`id_novel`);

--
-- Indexes for table `Novel`
--
ALTER TABLE `Novel`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Book`
--
ALTER TABLE `Book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `Novel`
--
ALTER TABLE `Novel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `BookNovelLink`
--
ALTER TABLE `BookNovelLink`
  ADD CONSTRAINT `fk_id_book` FOREIGN KEY (`id_book`) REFERENCES `Book` (`id`),
  ADD CONSTRAINT `fk_id_novel` FOREIGN KEY (`id_novel`) REFERENCES `Novel` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
