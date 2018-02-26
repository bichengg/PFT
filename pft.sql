/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50719
Source Host           : localhost:3306
Source Database       : pft

Target Server Type    : MYSQL
Target Server Version : 50719
File Encoding         : 65001

Date: 2018-02-26 14:41:17
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
INSERT INTO `pft_student` VALUES ('1d9d35dc-1a35-11e8-b7b7-9cf387d7956f', '49', '11413166', '物联网1146', '1141316133', '6', '曹司令', '6', '1995/11/22', '江苏省淮安市', null, null, '2018', '1', '2018-02-26 14:18:56', '1', '1111', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('1d9e3300-1a35-11e8-b7b7-9cf387d7956f', '46', '11413163', '物联网1143', '1141316130', '3', '曹司令', '3', '1995/11/19', '江苏省淮安市', null, null, '2018', '1', '2018-02-26 14:18:56', '1', '1111', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('1d9f0aa9-1a35-11e8-b7b7-9cf387d7956f', '48', '11413165', '物联网1145', '1141316132', '5', '曹司令', '5', '1995/11/21', '江苏省淮安市', null, null, '2018', '1', '2018-02-26 14:18:56', '1', '1111', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('1da23a66-1a35-11e8-b7b7-9cf387d7956f', '45', '11413162', '物联网1142', '1141316129', '2', '曹司令', '2', '1995/11/18', '江苏省淮安市', null, null, '2018', '1', '2018-02-26 14:18:56', '1', '1111', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('1da45343-1a35-11e8-b7b7-9cf387d7956f', '47', '11413164', '物联网1144', '1141316131', '4', '曹司令', '4', '1995/11/20', '江苏省淮安市', null, null, '2018', '1', '2018-02-26 14:18:56', '1', '1111', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('1da457ec-1a35-11e8-b7b7-9cf387d7956f', '51', '11413168', '物联网1148', '1141316135', '8', '曹司令', '8', '1995/11/24', '江苏省淮安市', null, null, '2018', '1', '2018-02-26 14:18:56', '1', '1111', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('1da45e8a-1a35-11e8-b7b7-9cf387d7956f', '52', '11413169', '物联网1149', '1141316136', '9', '曹司令', '9', '1995/11/25', '江苏省淮安市', null, null, '2018', '1', '2018-02-26 14:18:56', '1', '1111', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('1da7e38b-1a35-11e8-b7b7-9cf387d7956f', '44', '11413161', '物联网1141', '1141316128', '1', '曹司令', '1', '1995/11/17', '江苏省淮安市', null, null, '2018', '1', '2018-02-26 14:18:56', '1', '1111', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('1da8cb6c-1a35-11e8-b7b7-9cf387d7956f', '50', '11413167', '物联网1147', '1141316134', '7', '曹司令', '7', '1995/11/23', '江苏省淮安市', null, null, '2018', '1', '2018-02-26 14:18:56', '1', '1111', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('1dabb686-1a35-11e8-b7b7-9cf387d7956f', '53', '11413170', '物联网1150', '1141316137', '10', '曹司令', '10', '1995/11/26', '江苏省淮安市', null, null, '2018', '1', '2018-02-26 14:18:56', '1', '1111', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('1dac10e2-1a35-11e8-b7b7-9cf387d7956f', '55', '11413172', '物联网1152', '1141316139', '12', '曹司令', '12', '1995/11/28', '江苏省淮安市', null, null, '2018', '1', '2018-02-26 14:18:56', '1', '1111', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('1dadeee2-1a35-11e8-b7b7-9cf387d7956f', '57', '11413174', '物联网1154', '1141316141', '14', '曹司令', '14', '1995/11/30', '江苏省淮安市', null, null, '2018', '0', '2018-02-26 14:18:56', '1', '1111', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('1dadfd62-1a35-11e8-b7b7-9cf387d7956f', '54', '11413171', '物联网1151', '1141316138', '11', '曹司令', '11', '1995/11/27', '江苏省淮安市', null, null, '2018', '0', '2018-02-26 14:18:56', '1', '1111', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('1db065af-1a35-11e8-b7b7-9cf387d7956f', '58', '11413175', '物联网1155', '1141316142', '15', '曹司令', '0', '1995/11/31', '江苏省淮安市', null, null, '2018', '0', '2018-02-26 14:18:56', '1', '1111', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('1db06baf-1a35-11e8-b7b7-9cf387d7956f', '56', '11413173', '物联网1153', '1141316140', '13', '曹司令', '13', '1995/11/29', '江苏省淮安市', null, null, '2018', '0', '2018-02-26 14:18:56', '1', '1111', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('62c32527-1aa4-11e8-8708-94de807c8dff', '57', '11413174', '物联网1154', '1141316141', '14', '曹司令12', '14', '1995/11/30', '江苏省淮安市', null, null, '2018', '0', '2018-02-26 14:18:56', '1', '1111', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('62c36130-1aa4-11e8-8708-94de807c8dff', '55', '11413172', '物联网1152', '1141316139', '12', '曹司令14', '12', '1995/11/28', '江苏省淮安市', null, null, '2018', '0', '2018-02-26 14:18:56', '1', '1111', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('62c52a7b-1aa4-11e8-8708-94de807c8dff', '58', '11413175', '物联网1155', '1141316142', '15', '曹司令11', '0', '1995/11/31', '江苏省淮安市', null, null, '2018', '0', '2018-02-26 14:18:56', '1', '1111', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('62c60a55-1aa4-11e8-8708-94de807c8dff', '56', '11413173', '物联网1153', '1141316140', '13', '曹司令13', '13', '1995/11/29', '江苏省淮安市', null, null, '2018', '0', '2018-02-26 14:18:56', '1', '1111', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('62c6b521-1aa4-11e8-8708-94de807c8dff', '53', '11413170', '物联网1150', '1141316137', '10', '曹司令16', '10', '1995/11/26', '江苏省淮安市', null, null, '2018', '0', '2018-02-26 14:18:56', '1', '1111', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('62c85aad-1aa4-11e8-8708-94de807c8dff', '51', '11413168', '物联网1148', '1141316135', '8', '曹司令18', '8', '1995/11/24', '江苏省淮安市', null, null, '2018', '0', '2018-02-26 14:18:56', '1', '1111', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('62c9391f-1aa4-11e8-8708-94de807c8dff', '49', '11413166', '物联网1146', '1141316133', '6', '曹司令20', '6', '1995/11/22', '江苏省淮安市', null, null, '2018', '0', '2018-02-26 14:18:56', '1', '1111', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('62ca732b-1aa4-11e8-8708-94de807c8dff', '54', '11413171', '物联网1151', '1141316138', '11', '曹司令15', '11', '1995/11/27', '江苏省淮安市', null, null, '2018', '0', '2018-02-26 14:18:56', '1', '1111', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('62cab3ee-1aa4-11e8-8708-94de807c8dff', '50', '11413167', '物联网1147', '1141316134', '7', '曹司令19', '7', '1995/11/23', '江苏省淮安市', null, null, '2018', '0', '2018-02-26 14:18:56', '1', '1111', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('62cb4761-1aa4-11e8-8708-94de807c8dff', '52', '11413169', '物联网1149', '1141316136', '9', '曹司令17', '9', '1995/11/25', '江苏省淮安市', null, null, '2018', '0', '2018-02-26 14:18:56', '1', '1111', '0', '0', '0', '0', '0', '0', '0', '0');

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
INSERT INTO `pft_teacher` VALUES ('1', '1', '1', '1', '2017-11-09 13:00:41', '2018');
INSERT INTO `pft_teacher` VALUES ('967ab0a0-d8b0-11e7-8a83-94de807c8dff', '1', '1', '1', '2017-12-04 13:04:20', '2018');
INSERT INTO `pft_teacher` VALUES ('2018', '2018', '2018', '2018', '2018-01-31 13:38:31', '2018');
INSERT INTO `pft_teacher` VALUES ('1f0e5d3a-d8b1-11e7-8a83-94de807c8dff', '0', '11', '32323', '2017-12-04 13:08:09', '2018');
INSERT INTO `pft_teacher` VALUES ('3bf2a3c9-d8b2-11e7-8a83-94de807c8dff', '1', '2', '2', '2017-12-04 13:16:07', '2018');
INSERT INTO `pft_teacher` VALUES ('2db118cc-d8b9-11e7-8a83-94de807c8dff', '1', '我', '1', '2017-12-04 14:05:50', '2018');
INSERT INTO `pft_teacher` VALUES ('ad75a8f7-d8bc-11e7-8a83-94de807c8dff', '12', '334', '34', '2017-12-04 14:30:53', '2018');
INSERT INTO `pft_teacher` VALUES ('440877f2-d8be-11e7-8a83-94de807c8dff', '1', '我', '1', '2017-12-04 14:42:15', '2017');
INSERT INTO `pft_teacher` VALUES ('717035ae-d8bf-11e7-8a83-94de807c8dff', '0', 'xxxxxxxxxx', '123123123123123123', '2018-02-23 10:21:51', '2018');
INSERT INTO `pft_teacher` VALUES ('7d01166c-d8bf-11e7-8a83-94de807c8dff', '1231231111', '还原我我还原我我还原', '111', '2017-12-04 15:25:38', '2018');
INSERT INTO `pft_teacher` VALUES ('6eb84f7c-d8c4-11e7-8a83-94de807c8dff', '1111111888', '张老师', '1222112312312311111111112', '2017-12-04 15:26:37', '2018');
INSERT INTO `pft_teacher` VALUES ('24bf7629-1841-11e8-9c3e-02004c4f4f50', '909', '吴老二', '123', '2018-02-23 10:25:33', '2018');
INSERT INTO `pft_teacher` VALUES ('24bf7d76-1841-11e8-9c3e-02004c4f4f50', '1', '吴老二', '1234567', '2018-02-23 10:25:59', '2018');
INSERT INTO `pft_teacher` VALUES ('24bf8d40-1841-11e8-9c3e-02004c4f4f50', '1', '吴老二', '123', '2018-02-23 10:27:08', '2018');
INSERT INTO `pft_teacher` VALUES ('24bf9e2d-1841-11e8-9c3e-02004c4f4f50', '1', '111', '123', '2018-02-23 10:27:17', '2018');
INSERT INTO `pft_teacher` VALUES ('24bfabc0-1841-11e8-9c3e-02004c4f4f50', '11', '1111111111', '1111111111', '2018-02-23 10:27:29', '2018');
INSERT INTO `pft_teacher` VALUES ('4dcb0de3-1841-11e8-9c3e-02004c4f4f50', '999', '张里ii111111', '123', '2018-02-23 10:35:44', '2018');
INSERT INTO `pft_teacher` VALUES ('c0b7a4c6-1874-11e8-9c3e-02004c4f4f50', '3', '3', '3', '2018-02-23 16:37:48', '2018');
INSERT INTO `pft_teacher` VALUES ('6345f8a0-1879-11e8-9c3e-02004c4f4f50', '2', 'ccc', '000000', '2018-02-23 17:11:00', '2018');
INSERT INTO `pft_teacher` VALUES ('7cea5da3-190c-11e8-9134-02004c4f4f50', '0', 'x1', '123', '2018-02-24 10:43:27', null);
INSERT INTO `pft_teacher` VALUES ('aaaa', '2', '孙主任', '222', '2018-02-24 18:43:27', null);
INSERT INTO `pft_teacher` VALUES ('bbbb', '46546', '朱老师', '111', '2018-02-24 22:43:27', null);
INSERT INTO `pft_teacher` VALUES ('382789eb-19ce-11e8-8583-9cf387d7956f', '0', '11', '123', '2018-02-25 09:50:04', null);
INSERT INTO `pft_teacher` VALUES ('481429b9-19ce-11e8-8583-9cf387d7956f', '123123', '1231231', '23123123123123', '2018-02-25 09:50:30', null);
INSERT INTO `pft_teacher` VALUES ('51af780a-19ce-11e8-8583-9cf387d7956f', '123123', '呃呃呃', '1', '2018-02-25 09:50:46', null);
INSERT INTO `pft_teacher` VALUES ('f4f5a8eb-1a08-11e8-b7b7-9cf387d7956f', '9123123', '武大郎', '2222', '2018-02-25 16:50:40', null);
INSERT INTO `pft_teacher` VALUES ('c80615dc-1a09-11e8-b7b7-9cf387d7956f', '1111111111', '张打造2', '11', '2018-02-25 17:01:08', null);
INSERT INTO `pft_teacher` VALUES ('7c155701-1a0a-11e8-b7b7-9cf387d7956f', '9', '乔纳森宝宝', '123', '2018-02-25 17:01:42', null);
INSERT INTO `pft_teacher` VALUES ('d6471fa2-1a34-11e8-b7b7-9cf387d7956f', '123123', '再试下嗡嗡嗡', '111', '2018-02-25 22:04:52', null);
INSERT INTO `pft_teacher` VALUES ('1ececb7b-1aa8-11e8-8708-94de807c8dff', '9', '王麻子小', '123', '2018-02-26 11:50:05', null);
INSERT INTO `pft_teacher` VALUES ('634d3148-1ab7-11e8-8708-94de807c8dff', '25', '乔纳森', '123', '2018-02-26 13:39:18', null);
INSERT INTO `pft_teacher` VALUES ('8de10584-1ab7-11e8-8708-94de807c8dff', '22', '乔纳森1', '123', '2018-02-26 13:40:29', null);
INSERT INTO `pft_teacher` VALUES ('929f12c4-1ab7-11e8-8708-94de807c8dff', '111', '23213', '123', '2018-02-26 13:40:37', null);
INSERT INTO `pft_teacher` VALUES ('dd1e4877-1ab7-11e8-8708-94de807c8dff', '1', '1', '1', '2018-02-26 13:42:42', '2018');
INSERT INTO `pft_teacher` VALUES ('e2eb2602-1ab8-11e8-8708-94de807c8dff', '12', '12', '1', '2018-02-26 13:50:05', '2018');
INSERT INTO `pft_teacher` VALUES ('c924f321-1abd-11e8-8708-94de807c8dff', '9988', '达达君', '111', '2018-02-26 14:25:06', '2018');
INSERT INTO `pft_teacher` VALUES ('d313fbf4-1abd-11e8-8708-94de807c8dff', '514896611', '虫虫', '123', '2018-02-26 14:25:30', '2018');
