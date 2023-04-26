-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: soyeon
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `naver1`
--

DROP TABLE IF EXISTS `naver1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `naver1` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `id` varchar(30) NOT NULL,
  `pw` varchar(30) NOT NULL,
  `name` varchar(50) NOT NULL,
  `year` varchar(4) NOT NULL,
  `month` varchar(2) NOT NULL,
  `date` varchar(2) NOT NULL,
  `gender` varchar(5) NOT NULL,
  `email` varchar(50) NOT NULL,
  `hp` varchar(13) NOT NULL,
  `create_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `naver1`
--

LOCK TABLES `naver1` WRITE;
/*!40000 ALTER TABLE `naver1` DISABLE KEYS */;
INSERT INTO `naver1` VALUES (1,'212psy','qkrthdus212','박소연','1998','03','17','여자','212psy@naver.com','010-2701-8808','2023-04-24 05:21:06'),(2,'212psy','qkrthdus21212','이아현','1998','3','14','여자','sssss@dddd','01085246279','2023-04-24 06:38:23'),(3,'ejkdghlak','fslalekhgl54','임성택','1998','1','23','남자','ewalfh@efklhe.net','1054879562','2023-04-24 06:51:14');
/*!40000 ALTER TABLE `naver1` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-24 15:54:20
