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
INSERT INTO `__migrationhistory` VALUES ('201808140823427_AutomaticMigration','Model.Migrations.Configuration',_binary '�\0\0\0\0\0\0\�W\�n\�8�\�w xNE\'�b��\�\"�ㅱuTn\�4v�R���E�l�H�\n\�ߒ\'n�X�\"�3\�\�|��߿��\�mIA����{#J@Ei,\�:��]�~C߽�\�\'򹖻tr��L@�ͮ3\�$\�x��tjҕ��4a<N\�\�h�;;?g���?\�ʊ�.ǩ� �9��4i�}<	Tr\�0� �n�u�1��|\�\r�����\�Z\n�� W�p�R\�-�{�\�@hu�\�a�\\.��܊KUW��sC\Z]��X�XCE��i�B��ˊ#\�W?�i\�p�,\� \�v\�.�肛/��\r]��vB�A�(\"�&x,�\�\�\�H�y֤f����q.m�!P�[\�\��ϗRD\�v�~�\\ʮC\��\�l\�ֽN3\�v�V������\����ZG�b�\�\�%�h�/%4�\�	8���?@�\�\�{n-h\�0�`l`�gk&\�\"+/�b\�j,J\�|�\�\�>?)��\r\��N\�\�\'%�\�P\�\��ٚ\n%\��<,�rjs\�z\�\�pa�!v��Յ�Y�I\��re�\���dMir\rk�J7S�\�o��\�JZ\�:�\�T\�\�e\�O\�NX\�O\�\�4γ��ӈ��]h�:|yY&%�̞\�l�m,an�5�N\�4z:\�X\���\�\�\�8Nb]�0[[\�\�/ʖ\�Z\�}W\����\�\�jY�b`	\�_#4�T}i�V\�.�\�S\�\�T\�:\�.�\�\�)\�.\�\�����څ\�=�S�]�\��\�g=���\��\�k��y���\"���\�z\�\�W�}|\�R��Iz�K��6�K\�\��c)0\�VbΕX��\� ��z���	���͌�\�Is{�b\��+��\�OY\�\�>:G_8��V�Ϸr��X�\�\�׶X\�k�D����-\���3t\�\�OɃC��~�����\�X=q~+\�gݷ��)\�-�{\�+�ܽ���\�L�Қ_��\�Q-ң�\�ni+V<�x\�Q�\0�\�e�\"7\�♺\�m�\�kc Yʝw�Ϟ�_<v}�\�\�4?#tS�d�S\�s!\�\�\�\�\�9\0\�r��=�\n��\�6H��z&PE\�0�]\�. \�$��;�G8\�7|\�}�5��u?>r�\"vi�\'��5OL�\�\���\��a}�\�t\�\�\0\0','6.2.0-61023');
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
