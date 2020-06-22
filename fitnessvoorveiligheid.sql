-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Gegenereerd op: 22 jun 2020 om 12:00
-- Serverversie: 5.7.21
-- PHP-versie: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fitnessvoorveiligheid`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `aandachtpunten`
--

DROP TABLE IF EXISTS `aandachtpunten`;
CREATE TABLE IF NOT EXISTS `aandachtpunten` (
  `aandachtpuntid` int(11) NOT NULL AUTO_INCREMENT,
  `oefeningid` int(10) NOT NULL,
  `aandachtspunt` varchar(1000) NOT NULL,
  PRIMARY KEY (`aandachtpuntid`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `aandachtpunten`
--

INSERT INTO `aandachtpunten` (`aandachtpuntid`, `oefeningid`, `aandachtspunt`) VALUES
(1, 1, 'voeten heupbreedte'),
(2, 1, 'benen dieper dan 90 graden'),
(3, 1, 'uitstrekken zonder de benen te overstrekken'),
(9, 7, 'rug recht'),
(8, 2, 'benen recht houden');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `docent`
--

DROP TABLE IF EXISTS `docent`;
CREATE TABLE IF NOT EXISTS `docent` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `wachtwoord` varchar(100) NOT NULL,
  `klasid` int(10) NOT NULL,
  `docent` tinyint(1) NOT NULL,
  `docentmail` varchar(10000) NOT NULL,
  `voornaam` varchar(1000) NOT NULL,
  `achternaam` varchar(1000) NOT NULL,
  `foto` varchar(10000) DEFAULT 'https://assets.zoom.nl/thumbnails/500x500/5/7/5788343c7c2d3728eb9db8f096b62081.png',
  PRIMARY KEY (`userid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `docent`
--

INSERT INTO `docent` (`userid`, `username`, `wachtwoord`, `klasid`, `docent`, `docentmail`, `voornaam`, `achternaam`, `foto`) VALUES
(1, 'Erik', 'wacht', 1, 1, 'erik@summacollege.nl', 'erik', 'kelder', 'https://assets.zoom.nl/thumbnails/500x500/5/7/5788343c7c2d3728eb9db8f096b62081.png'),
(2, 'Anouk', 'W8', 2, 1, 'anouk@summacollege.nl', 'anouk', 'mallens', 'https://assets.zoom.nl/thumbnails/500x500/5/7/5788343c7c2d3728eb9db8f096b62081.png');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `docentberichten`
--

DROP TABLE IF EXISTS `docentberichten`;
CREATE TABLE IF NOT EXISTS `docentberichten` (
  `berichtid` int(11) NOT NULL AUTO_INCREMENT,
  `datum` date NOT NULL,
  `bericht` varchar(10000) NOT NULL,
  PRIMARY KEY (`berichtid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `docentberichten`
--

INSERT INTO `docentberichten` (`berichtid`, `datum`, `bericht`) VALUES
(1, '2020-06-18', 'in verband met corona moet iedereen mondkapjes dragen op school.');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `doelen`
--

DROP TABLE IF EXISTS `doelen`;
CREATE TABLE IF NOT EXISTS `doelen` (
  `doelid` int(11) NOT NULL AUTO_INCREMENT,
  `doel` varchar(50) NOT NULL,
  PRIMARY KEY (`doelid`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `doelen`
--

INSERT INTO `doelen` (`doelid`, `doel`) VALUES
(1, 'kracht'),
(2, 'basiskracht'),
(3, 'uithoudingsvermogen'),
(4, 'conditie');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `klassen`
--

DROP TABLE IF EXISTS `klassen`;
CREATE TABLE IF NOT EXISTS `klassen` (
  `klasid` int(100) NOT NULL AUTO_INCREMENT,
  `klasnaam` varchar(1000) NOT NULL,
  `docentid` int(100) NOT NULL,
  PRIMARY KEY (`klasid`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `klassen`
--

INSERT INTO `klassen` (`klasid`, `klasnaam`, `docentid`) VALUES
(1, 'AO2D', 1),
(2, 'Ao3d', 2),
(6, 'Ao3d', 1);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `logboek`
--

DROP TABLE IF EXISTS `logboek`;
CREATE TABLE IF NOT EXISTS `logboek` (
  `logboekid` int(11) NOT NULL AUTO_INCREMENT,
  `studentid` int(100) NOT NULL,
  `datum` date NOT NULL,
  `log` varchar(1000) NOT NULL,
  `commentaar` varchar(1000) NOT NULL,
  `oefeningid` int(100) NOT NULL,
  PRIMARY KEY (`logboekid`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `logboek`
--

INSERT INTO `logboek` (`logboekid`, `studentid`, `datum`, `log`, `commentaar`, `oefeningid`) VALUES
(1, 1, '2020-06-09', 'ik heb vandaag 20 oefeninf gedaan en heb zieke protiene shakes in me nek geduwd', '', 1),
(5, 1, '2020-06-11', 'Hallo mijn naam is victor en ik hebbvandaag 20 oefeningen gedaan en bem hier zeer trots op', '', 1),
(12, 6, '2020-06-18', 'Je kunt nu een schema volgen', '', 1),
(23, 21, '2020-06-22', 'Schema 1 kompleet', '', 1);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `messages`
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE IF NOT EXISTS `messages` (
  `messageid` int(11) NOT NULL AUTO_INCREMENT,
  `datum` date NOT NULL,
  `message` varchar(1000) NOT NULL,
  `klasid` int(10) NOT NULL,
  PRIMARY KEY (`messageid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `messages`
--

INSERT INTO `messages` (`messageid`, `datum`, `message`, `klasid`) VALUES
(1, '2020-06-11', 'de les valt uit vandaag', 1),
(2, '2020-06-18', 'Iedereen moet verplicht mond kapjes dragen in het school gebouw', 2);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `oefeningen`
--

DROP TABLE IF EXISTS `oefeningen`;
CREATE TABLE IF NOT EXISTS `oefeningen` (
  `oefeningid` int(11) NOT NULL AUTO_INCREMENT,
  `oefeningnaam` varchar(100) NOT NULL,
  `oefeningvideo` varchar(10000) NOT NULL,
  `docentid` int(100) NOT NULL,
  PRIMARY KEY (`oefeningid`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `oefeningen`
--

INSERT INTO `oefeningen` (`oefeningid`, `oefeningnaam`, `oefeningvideo`, `docentid`) VALUES
(1, 'bankdruk', 'https://www.youtube.com/watch?v=RB35pp2tYcw', 1),
(2, 'leg press', 'https://www.youtube.com/watch?v=GvRgijoJ2xY', 1),
(7, 'Opdrukken', '', 1);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `schemaoefeningen`
--

DROP TABLE IF EXISTS `schemaoefeningen`;
CREATE TABLE IF NOT EXISTS `schemaoefeningen` (
  `schemaoefeningid` int(11) NOT NULL AUTO_INCREMENT,
  `oefeningid` int(10) NOT NULL,
  `sets` int(10) NOT NULL,
  `hethaling` int(10) NOT NULL,
  `schemaid` int(10) NOT NULL,
  PRIMARY KEY (`schemaoefeningid`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `schemaoefeningen`
--

INSERT INTO `schemaoefeningen` (`schemaoefeningid`, `oefeningid`, `sets`, `hethaling`, `schemaid`) VALUES
(1, 1, 3, 10, 1),
(2, 2, 3, 10, 1),
(3, 3, 3, 10, 1),
(4, 3, 3, 10, 1),
(5, 2, 12, 12, 1),
(16, 2, 3, 10, 1),
(9, 4, 5, 10, 1),
(10, 1, 5, 10, 1),
(17, 7, 5, 10, 1),
(15, 1, 6, 13, 1),
(13, 2, 5, 4, 1),
(14, 2, 5, 4, 1);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `schemasumma`
--

DROP TABLE IF EXISTS `schemasumma`;
CREATE TABLE IF NOT EXISTS `schemasumma` (
  `schemaid` int(11) NOT NULL AUTO_INCREMENT,
  `doelid` int(10) NOT NULL,
  `schemanaam` varchar(100) NOT NULL,
  PRIMARY KEY (`schemaid`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `schemasumma`
--

INSERT INTO `schemasumma` (`schemaid`, `doelid`, `schemanaam`) VALUES
(1, 2, 'mijn eerste schema'),
(2, 1, 'mijn tweede schema'),
(8, 3, 'mennos schema');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `userstudens`
--

DROP TABLE IF EXISTS `userstudens`;
CREATE TABLE IF NOT EXISTS `userstudens` (
  `userid` int(100) NOT NULL AUTO_INCREMENT,
  `username` varchar(1000) NOT NULL,
  `studentmail` varchar(1000) NOT NULL,
  `wachtwoord` varchar(1000) NOT NULL,
  `klasid` int(100) DEFAULT NULL,
  `lengte` decimal(10,2) DEFAULT NULL,
  `gewicht` decimal(10,2) DEFAULT NULL,
  `fetpercentage` decimal(10,2) DEFAULT NULL,
  `voornaam` varchar(100) NOT NULL,
  `achternaam` varchar(100) NOT NULL,
  `foto` varchar(1000) DEFAULT NULL,
  `schemaid` int(11) DEFAULT NULL,
  `docent` tinyint(1) NOT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `userstudens`
--

INSERT INTO `userstudens` (`userid`, `username`, `studentmail`, `wachtwoord`, `klasid`, `lengte`, `gewicht`, `fetpercentage`, `voornaam`, `achternaam`, `foto`, `schemaid`, `docent`) VALUES
(1, 'vicklo', 'vic.kloeppel@gmail.com', 'Pass', 1, '2.00', '70.00', '19.00', 'Victor', 'Kloeppel', 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', NULL, 0),
(6, 'vicitor', 'jsbcjb@gmail.com', 'w8', 2, '1.60', '69.00', '15.00', 'victor', 'kloeppel', 'https://i2.wp.com/stralendsolliciteren.nl/wp-content/uploads/2018/03/cv-profielfoto.jpg?resize=720%2C675&ssl=1', 2, 0),
(7, 'deenigeechte', 'mail', 'w8', 2, '1.79', '69.00', '15.00', 'victor', 'kloeppel', 'https://i2.wp.com/stralendsolliciteren.nl/wp-content/uploads/2018/03/cv-profielfoto.jpg?resize=720%2C675&ssl=1', NULL, 0),
(8, 'viccie', 'vic.kloeppel@gmail.com', 'w8', 1, '2.20', '69.00', '12.00', 'victor', 'kloeppel', 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', 1, 0),
(9, 'vicklo', 'vic.kloeppel@gmail.com', 'wachtwoord', 1, '1.80', '80.00', '15.00', 'victor', 'kloeppel', 'https://assets.zoom.nl/thumbnails/500x500/5/7/5788343c7c2d3728eb9db8f096b62081.png', NULL, 0),
(10, 'vicklo91', 'vic.kloeppel@gmail.com', 'wachtwoord', NULL, '1.80', '80.00', '15.00', 'victor ', 'kloeppel', 'https://assets.zoom.nl/thumbnails/500x500/5/7/5788343c7c2d3728eb9db8f096b62081.png', NULL, 0),
(11, 'vicklo91', 'vic.kloeppel@gmail.com', 'wachtwoord', NULL, '1.80', '80.00', '15.00', 'victor ', 'kloeppel', 'https://assets.zoom.nl/thumbnails/500x500/5/7/5788343c7c2d3728eb9db8f096b62081.png', NULL, 0),
(12, 'Friso', 'Friso@gmail.com', 'Friso', NULL, '1.80', '69.80', '20.00', 'Friso', 'Kloeppel', 'https://assets.zoom.nl/thumbnails/500x500/5/7/5788343c7c2d3728eb9db8f096b62081.png', NULL, 0),
(15, 'Vic', 'Vic', 'Vic', 1, '1.20', '69.00', '9.60', 'Vic', 'Vic', 'https://assets.zoom.nl/thumbnails/500x500/5/7/5788343c7c2d3728eb9db8f096b62081.png', 1, 0),
(13, 'Victorkloeppel', 'Vic.kloeppel@gmail.com', 'Vicklo', NULL, '1.70', '1.70', '17.80', 'Victor', 'Kloeppel', 'https://assets.zoom.nl/thumbnails/500x500/5/7/5788343c7c2d3728eb9db8f096b62081.png', NULL, 0),
(21, 'Wawoe', 'Wawoe@gmail.com', 'Wawoe123', NULL, '1.82', '80.00', '3.00', 'French', 'Wawoe', 'https://assets.zoom.nl/thumbnails/500x500/5/7/5788343c7c2d3728eb9db8f096b62081.png', NULL, 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
