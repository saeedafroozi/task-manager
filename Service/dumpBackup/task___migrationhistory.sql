-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: localhost    Database: task
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `__migrationhistory`
--

DROP TABLE IF EXISTS `__migrationhistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `__migrationhistory` (
  `MigrationId` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ContextKey` varchar(300) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Model` longblob NOT NULL,
  `ProductVersion` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`MigrationId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `__migrationhistory`
--

LOCK TABLES `__migrationhistory` WRITE;
/*!40000 ALTER TABLE `__migrationhistory` DISABLE KEYS */;
INSERT INTO `__migrationhistory` VALUES ('201808140823427_AutomaticMigration','Model.Migrations.Configuration',_binary 'ã\0\0\0\0\0\0\ÕW\Õn\€8æ\ÿw xNE\'¡bªÅ\‘\"µ„Ö±uTn\Ô¥4vàRîñ§Eül˚H˚\n\Íﬂí\'n±X¯\"í3\ﬂ\Ã|ú˙ﬂøˇÒ\ﬂmIAë™Äû{#J@Ei,\‘:†π]Ω~CﬂΩ˝\Âï\'Úπñªtr®©L@¨ÕÆ3\—$\‹xâàtj“ïı¢4a<N\Ÿ\≈hÙ;;?gÄ±Ò?\Ê ää.«©ä ≥9óÛ4i™}<	Tr\À0è †n˘uÅ1û˚|\œ\r†∫Öç•\‰Z\néÖ Wîp•R\À-˙{ı\…@hu™\÷aÜ\\.∂†‹äKUW≠¯sC\Z]∏êX´XCEπ±iÚB¿ÛÀä#\÷W?âi\⁄pà,\ﬁ \€v\Î¢.òËÇõ/îÙ\r]ç•vBéA˝(\"&x,î\Á\ƒ\œHµy÷§fã˚ùëq.mÆ!Pê[\Õ\ÂπœóRD\¬vë~®\\ ÆC\Ëû\Ìl\‡÷ΩN3\–v˚Vïõ≥ò∂´\«˙äçZGßb¶\Ï\Â%∑hú/%4˜\›	8¥©Ü?@Å\Ê\‚{n-h\Â0†`l`Ωgk&\“\"+/©b\Œj,J\Ê|Û\‘\⁄>?)ôä\r\ƒıN\Â\»\'%∞\“P\…\ÍéŸö\n%\Ã¶<,∞rjs\Ìz\Ê\”paÜ!vë±’ÖÒYõI\√¸reà\Ÿ∫ìdMir\rk≤J7S∞\ÎoâÇ\Ì†JZ\ :˜\ T\ﬁ\Áe\„O\€NX\ŸO\Íæ\√4Œ≥Ø±”à™ñ]h¸:|yY&%ãÃû\Ílºm,anÚ5ÙN\—4z:\⁄X\◊˛ñ\‹\›\—8Nb]ˆ0[[\Í\‹/ ñ\ÔZ\⁄}W\È∞ó∑\“\√jYúb`	\Ê_#4˛T}i†V\Ã.π\ﬁS\Í\„T\Êâ:\‘.û\“\ﬁ)\ﬁ.\Ã\Œ¡ÛÒ˙⁄Ö\Ïü=µSß]¿\Œˆ\Àg=û˚ó\ ∑\⁄k≤˝y™∫˙\"çı¶\ z\’\‰Wô}|\÷RΩ°Iz±KÛ˘6¸K\È\Áüc)0\‡VbŒïXÅ±\Â ¢øzøıû	ˇüëÕåâ\ÂIs{¶b\ÿÙ+˘ˆ\ﬂOY\·\ÿ>:G_8ùˆVâœ∑rî¥Xß\œ\Õ◊∂X\ﬂkàD˘™˝¯-\ÿ¯â3t\ÿ\ÏèO…ÉC≤¨~ô¢ø•á\’X=q~+\Ÿg›∑Ωè)\÷-Ñ{\È+à‹Ω∂†µ\ÃL≠“ö_å®\ÎQ-“£ñ\«ni+V<≤x\Ï¶QÒ\0˚\Ãeé\"7\…‚ô∫\Àmñ\€kc Y ùwùœû∂_<v}ˆ\Ôä\Ã4?#tS∏dºS\Ôs!\„\∆\Ô\Èû\Ã9\0\·r§™=Ù\n†∑\ﬁ6H∑©z&PE\ﬂ0´]\Â. \…$Çô;ÚG8\≈7|\Â}Ä5è∂u?>r¸\"vi˜\'ÇØ5OLÖ\—\Íªˇ´\Ã˝a}˚\Ÿt\‰\‚\0\0','6.2.0-61023');
/*!40000 ALTER TABLE `__migrationhistory` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-08-17 12:04:23
