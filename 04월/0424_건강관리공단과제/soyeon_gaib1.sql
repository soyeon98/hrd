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
-- Table structure for table `gaib1`
--

DROP TABLE IF EXISTS `gaib1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gaib1` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `num` varchar(30) NOT NULL,
  `sign1` varchar(50) NOT NULL,
  `sign2` varchar(50) NOT NULL,
  `id` varchar(30) NOT NULL,
  `pw` varchar(30) NOT NULL,
  `chk_que` varchar(50) NOT NULL,
  `chk_ans` varchar(10) NOT NULL,
  `hp` varchar(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(250) NOT NULL,
  `recieve` varchar(50) NOT NULL,
  `create_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gaib1`
--

LOCK TABLES `gaib1` WRITE;
/*!40000 ALTER TABLE `gaib1` DISABLE KEYS */;
INSERT INTO `gaib1` VALUES (1,'123564281','256488455','4587455265','212qkrthdus','qkrthdus212','나의 초등학교 이름은?','성저초등학교','01027018808','박소연','212psy@naver.com','안받음','2023-04-24 04:31:10'),(2,'3425151','45123515','15412451','45145','145145','나의 초등학교 이름은?','154125','1451425','14514','12451245','받음','2023-04-24 04:33:16'),(3,'13546454','341654646','321674684','lsfgaklrhga','eiugkarglkaj','내가 좋아하는 캐릭터는?','짱구','01025486257','김민주','212jksdh@naver.com','받음','2023-04-24 05:01:16');
/*!40000 ALTER TABLE `gaib1` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-24 14:13:28
