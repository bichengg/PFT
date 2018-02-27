/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : pft

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2018-02-27 22:23:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for pft_admin
-- ----------------------------
DROP TABLE IF EXISTS `pft_admin`;
CREATE TABLE `pft_admin` (
  `id` varchar(100) CHARACTER SET utf8 NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `password` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=gb2312;

-- ----------------------------
-- Records of pft_admin
-- ----------------------------
INSERT INTO `pft_admin` VALUES ('167ab0a0-d8b0-3333-8a83-94de807c8dff', 'admin3', '123');

-- ----------------------------
-- Table structure for pft_score
-- ----------------------------
DROP TABLE IF EXISTS `pft_score`;
CREATE TABLE `pft_score` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `subject_id` int(11) DEFAULT NULL,
  `value` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=gb2312;

-- ----------------------------
-- Records of pft_score
-- ----------------------------
INSERT INTO `pft_score` VALUES ('1', '967ab0a0-d8b0-11e7-8a83-94de807c8dff', '1', '80', null);
INSERT INTO `pft_score` VALUES ('2', '967ab0a0-d8b0-11e7-8a83-94de807c8dff', '2', '50', null);
INSERT INTO `pft_score` VALUES ('3', '967ab0a0-d8b0-11e7-8a83-94de807c8dff', '3', '66', null);
INSERT INTO `pft_score` VALUES ('4', '967ab0a0-d8b0-11e7-8a83-94de807c8dff', '5', '75', null);
INSERT INTO `pft_score` VALUES ('5', '967ab0a0-d8b0-11e7-8a83-94de807c8dff', '6', '50', null);
INSERT INTO `pft_score` VALUES ('6', '3bf2a3c9-d8b2-11e7-8a83-94de807c81111', '1', '11', null);
INSERT INTO `pft_score` VALUES ('7', '3bf2a3c9-d8b2-11e7-8a83-94de807c81112', '1', '22', null);
INSERT INTO `pft_score` VALUES ('8', '3bf2a3c9-d8b2-11e7-8a83-94de807c81112', '10', '100', null);
INSERT INTO `pft_score` VALUES ('9', '3bf2a3c9-d8b2-11e7-8a83-94de807c81112', '9', '30', null);
INSERT INTO `pft_score` VALUES ('10', '3bf2a3c9-d8b2-11e7-8a83-94de807c81112', '11', '100', null);
INSERT INTO `pft_score` VALUES ('11', '1111', '1', '55', null);
INSERT INTO `pft_score` VALUES ('12', '1111', '2', '44', null);
INSERT INTO `pft_score` VALUES ('13', '1111', '3', '55', null);
INSERT INTO `pft_score` VALUES ('14', '1111', '4', '55', null);
INSERT INTO `pft_score` VALUES ('15', '1111', '5', '56', null);
INSERT INTO `pft_score` VALUES ('16', '1111', '6', '55', null);
INSERT INTO `pft_score` VALUES ('17', '1111', '8', '66', null);
INSERT INTO `pft_score` VALUES ('18', '1111', '10', '55', null);
INSERT INTO `pft_score` VALUES ('19', '1112', '1', '55', null);
INSERT INTO `pft_score` VALUES ('20', '1112', '2', '56', null);
INSERT INTO `pft_score` VALUES ('21', '1112', '3', '55', null);
INSERT INTO `pft_score` VALUES ('22', '1112', '4', '58', null);
INSERT INTO `pft_score` VALUES ('23', '1112', '5', '66', null);
INSERT INTO `pft_score` VALUES ('24', '1112', '6', '87', null);
INSERT INTO `pft_score` VALUES ('25', '1112', '8', '88', null);
INSERT INTO `pft_score` VALUES ('26', '1112', '10', '44', null);
INSERT INTO `pft_score` VALUES ('27', '1113', '1', '55', null);
INSERT INTO `pft_score` VALUES ('28', '1113', '2', '56', null);
INSERT INTO `pft_score` VALUES ('29', '1113', '3', '55', null);
INSERT INTO `pft_score` VALUES ('30', '1113', '4', '100', null);
INSERT INTO `pft_score` VALUES ('31', '1113', '5', '98', null);
INSERT INTO `pft_score` VALUES ('32', '1113', '6', '77', null);
INSERT INTO `pft_score` VALUES ('33', '1113', '8', '55', null);
INSERT INTO `pft_score` VALUES ('34', '1113', '10', '55', null);
INSERT INTO `pft_score` VALUES ('35', '1114', '1', '55', null);
INSERT INTO `pft_score` VALUES ('36', '1114', '2', '55', null);
INSERT INTO `pft_score` VALUES ('37', '1114', '3', '55', null);
INSERT INTO `pft_score` VALUES ('38', '1114', '4', '55', null);
INSERT INTO `pft_score` VALUES ('39', '1114', '5', '56', null);
INSERT INTO `pft_score` VALUES ('40', '1114', '6', '59', null);
INSERT INTO `pft_score` VALUES ('41', '1114', '8', '77', null);
INSERT INTO `pft_score` VALUES ('42', '1114', '10', '55', null);

-- ----------------------------
-- Table structure for pft_student
-- ----------------------------
DROP TABLE IF EXISTS `pft_student`;
CREATE TABLE `pft_student` (
  `id` varchar(100) NOT NULL,
  `grade_num` int(100) DEFAULT NULL,
  `class_num` int(100) DEFAULT NULL,
  `class_name` varchar(255) DEFAULT NULL,
  `student_code` int(30) NOT NULL,
  `nation` int(10) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `sex` int(5) DEFAULT NULL,
  `born` varchar(100) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `teacher_id` varchar(100) DEFAULT NULL,
  `teacher_class` varchar(255) DEFAULT NULL,
  `school_year` varchar(100) DEFAULT NULL,
  `status` int(5) DEFAULT '0',
  `time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `test_height` varchar(20) DEFAULT '0' COMMENT '身高',
  `test_weight` varchar(20) DEFAULT '0' COMMENT '体重',
  `test_lung` varchar(20) DEFAULT '0' COMMENT '肺活量',
  `test_50m` varchar(20) DEFAULT '0' COMMENT '50米跑',
  `test_jump` varchar(20) DEFAULT '0' COMMENT '立定跳远',
  `test_sr` varchar(20) DEFAULT '0' COMMENT '坐位体前屈',
  `test_800` varchar(20) DEFAULT '0' COMMENT '800米跑',
  `test_1000` varchar(20) DEFAULT '0' COMMENT '1000米跑',
  `test_situp` varchar(20) DEFAULT '0' COMMENT '一分钟仰卧起坐',
  `test_pullup` varchar(20) DEFAULT '0' COMMENT '引体向上',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pft_student
-- ----------------------------

-- ----------------------------
-- Table structure for pft_subject
-- ----------------------------
DROP TABLE IF EXISTS `pft_subject`;
CREATE TABLE `pft_subject` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=gb2312;

-- ----------------------------
-- Records of pft_subject
-- ----------------------------
INSERT INTO `pft_subject` VALUES ('1', '身高');
INSERT INTO `pft_subject` VALUES ('2', '体重');
INSERT INTO `pft_subject` VALUES ('3', '肺活量');
INSERT INTO `pft_subject` VALUES ('4', '50米跑');
INSERT INTO `pft_subject` VALUES ('5', '立定跳远');
INSERT INTO `pft_subject` VALUES ('6', '坐位体前屈');
INSERT INTO `pft_subject` VALUES ('7', '800米跑');
INSERT INTO `pft_subject` VALUES ('8', '1000米跑');
INSERT INTO `pft_subject` VALUES ('9', '一分钟仰卧起坐');
INSERT INTO `pft_subject` VALUES ('10', '引体向上');
INSERT INTO `pft_subject` VALUES ('11', '新增测试项目');

-- ----------------------------
-- Table structure for pft_teacher
-- ----------------------------
DROP TABLE IF EXISTS `pft_teacher`;
CREATE TABLE `pft_teacher` (
  `id` varchar(50) CHARACTER SET utf8 NOT NULL,
  `num` int(10) DEFAULT NULL,
  `name` varchar(10) CHARACTER SET utf8 DEFAULT NULL,
  `pwd` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `school_year` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of pft_teacher
-- ----------------------------
INSERT INTO `pft_teacher` VALUES ('7c155701-1a0a-11e8-b7b7-9cf387d7956f', '9', '乔纳森宝宝', '123', '2018-02-25 17:01:42', '2017');
INSERT INTO `pft_teacher` VALUES ('d6471fa2-1a34-11e8-b7b7-9cf387d7956f', '123123', '再试下嗡嗡嗡', '111', '2018-02-25 22:04:52', '2018');
INSERT INTO `pft_teacher` VALUES ('1ececb7b-1aa8-11e8-8708-94de807c8dff', '9', '王麻子小', '123', '2018-02-26 11:50:05', '2018');
INSERT INTO `pft_teacher` VALUES ('1c440885-1aca-11e8-8708-94de807c8dff', '8888888', '大宝宝', '123', '2018-02-26 15:53:19', '2018');
