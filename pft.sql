/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : pft

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2018-02-25 12:48:43
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
  `test_height` varchar(20) DEFAULT NULL COMMENT '身高',
  `test_weight` varchar(20) DEFAULT NULL COMMENT '体重',
  `test_lung` varchar(20) CHARACTER SET gb2312 DEFAULT '0' COMMENT '肺活量',
  `test_50m` varchar(20) CHARACTER SET gb2312 DEFAULT '0' COMMENT '50米跑',
  `test_jump` varchar(20) CHARACTER SET gb2312 DEFAULT '0' COMMENT '立定跳远',
  `test_sr` varchar(20) CHARACTER SET gb2312 DEFAULT '0' COMMENT '坐位体前屈',
  `test_800` varchar(20) CHARACTER SET gb2312 DEFAULT '0' COMMENT '800米跑',
  `test_1000` varchar(20) CHARACTER SET gb2312 DEFAULT '0' COMMENT '1000米跑',
  `test_situp` varchar(20) CHARACTER SET gb2312 DEFAULT '0' COMMENT '一分钟仰卧起坐',
  `test_pullup` varchar(20) CHARACTER SET gb2312 DEFAULT '0' COMMENT '引体向上',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pft_student
-- ----------------------------
INSERT INTO `pft_student` VALUES ('1111', '41', '11413161', '物联网1141', '1141316128', '1', '曹司令', '1', '1995/11/17', '江苏省淮安市', 'bbbb', '周一34', '2014', '0', '111', '1', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('1112', '42', '11413161', '物联网1141', '1141316128', '1', '曹司令', '1', '1995/11/17', '江苏省淮安市', 'aaaa', '周三34', '2015', '0', '123', '3', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('1113', '43', '11413161', '物联网1141', '1141316128', '1', '曹司令', '1', '1995/11/17', '江苏省淮安市', 'bbbb', '周四56', '2016', '0', '3213', null, '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('1114', '44', '11413161', '物联网1141', '1141316128', '1', '曹司令', '1', '1995/11/17', '江苏省淮安市', 'aaaa', '周四78', '2017', '0', '123123', '1', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('2222', '44', '111', null, '111', '1', '李老三', '1', '1996/12/11', '11111', '6eb84f7c-d8c4-11e7-8a83-94de807c8dff', '周五34', '2018', '0', '23', '1', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('3333', '41', '1', '1', '1', '1', '1', '1', '1', '1', '6eb84f7c-d8c4-11e7-8a83-94de807c8dff', '周一12', '2018', '0', null, null, '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('3bf2a3c9-d8b2-11e7-8a83-94de807c81111', '41', '22615043', '计算机', '222222', '1', '李四三', '1', '1996/12/11', '江苏省淮安市', '94de807c8dff', '周一34', '2013', '0', '111', null, '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('3bf2a3c9-d8b2-11e7-8a83-94de807c81112', '42', '22615043', '计算机', '222222', '1', '李四三', '1', '1996/12/11', '江苏省淮安市', '6eb84f7c-d8c4-11e7-8a83-94de807c8dff', '周二12', '2014', '0', '1231', '1', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('3bf2a3c9-d8b2-11e7-8a83-94de807c81113', '43', null, '计算机', '222222', '1', '李四三', '1', '1996/12/11', '江苏省淮安市', '6eb84f7c-d8c4-11e7-8a83-94de807c8dff', '周五12', '2015', '0', '123', '12', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('3bf2a3c9-d8b2-11e7-8a83-94de807c81114', '44', '11111', '计算机', '222222', '1', '张静雅', '1', '1996/12/11', '江苏省淮安市1111', '6eb84f7c-d8c4-11e7-8a83-94de807c8dff', '周五34', '2018', '1', '123', '123', '0', '0', '0', '99', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('967ab0a0-d8b0-11e7-8a83-94de807c8dff', '41', '11615043', '车辆1163', '1161504338', '1', '陈三', '1', '1996/12/11', '江苏省淮安市', '6eb84f7c-d8c4-11e7-8a83-94de807c8dff', '周一12', '2013', '0', '123', '123', '0', '0', '0', '0', '0', '0', '0', '0');

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
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of pft_teacher
-- ----------------------------
INSERT INTO `pft_teacher` VALUES ('1', '1', '1', '1', '2017-11-09 13:00:41');
INSERT INTO `pft_teacher` VALUES ('967ab0a0-d8b0-11e7-8a83-94de807c8dff', '1', '1', '1', '2017-12-04 13:04:20');
INSERT INTO `pft_teacher` VALUES ('ae84ef5d-d8b0-11e7-8a83-94de807c8dff', '0', 'q', '1', '2017-12-04 13:05:01');
INSERT INTO `pft_teacher` VALUES ('1f0e5d3a-d8b1-11e7-8a83-94de807c8dff', '0', '11', '32323', '2017-12-04 13:08:09');
INSERT INTO `pft_teacher` VALUES ('3bf2a3c9-d8b2-11e7-8a83-94de807c8dff', '1', '2', '2', '2017-12-04 13:16:07');
INSERT INTO `pft_teacher` VALUES ('2db118cc-d8b9-11e7-8a83-94de807c8dff', '1', '我', '1', '2017-12-04 14:05:50');
INSERT INTO `pft_teacher` VALUES ('ad75a8f7-d8bc-11e7-8a83-94de807c8dff', '12', '334', '34', '2017-12-04 14:30:53');
INSERT INTO `pft_teacher` VALUES ('440877f2-d8be-11e7-8a83-94de807c8dff', '1', '我', '1', '2017-12-04 14:42:15');
INSERT INTO `pft_teacher` VALUES ('717035ae-d8bf-11e7-8a83-94de807c8dff', '0', 'xxxxxxxxxx', '123123123123123123', '2018-02-23 10:21:51');
INSERT INTO `pft_teacher` VALUES ('7d01166c-d8bf-11e7-8a83-94de807c8dff', '1231231111', '还原我我还原我我还原', '111', '2017-12-04 15:25:38');
INSERT INTO `pft_teacher` VALUES ('6eb84f7c-d8c4-11e7-8a83-94de807c8dff', '1111111888', '张老师', '1222112312312311111111112', '2017-12-04 15:26:37');
INSERT INTO `pft_teacher` VALUES ('24bf7629-1841-11e8-9c3e-02004c4f4f50', '909', '吴老二', '123', '2018-02-23 10:25:33');
INSERT INTO `pft_teacher` VALUES ('24bf7d76-1841-11e8-9c3e-02004c4f4f50', '1', '吴老二', '1234567', '2018-02-23 10:25:59');
INSERT INTO `pft_teacher` VALUES ('24bf8d40-1841-11e8-9c3e-02004c4f4f50', '1', '吴老二', '123', '2018-02-23 10:27:08');
INSERT INTO `pft_teacher` VALUES ('24bf9e2d-1841-11e8-9c3e-02004c4f4f50', '1', '111', '123', '2018-02-23 10:27:17');
INSERT INTO `pft_teacher` VALUES ('24bfabc0-1841-11e8-9c3e-02004c4f4f50', '11', '1111111111', '1111111111', '2018-02-23 10:27:29');
INSERT INTO `pft_teacher` VALUES ('4dcb0de3-1841-11e8-9c3e-02004c4f4f50', '999', '张里ii111111', '123', '2018-02-23 10:35:44');
INSERT INTO `pft_teacher` VALUES ('c0b7a4c6-1874-11e8-9c3e-02004c4f4f50', '3', '3', '3', '2018-02-23 16:37:48');
INSERT INTO `pft_teacher` VALUES ('6345f8a0-1879-11e8-9c3e-02004c4f4f50', '2', 'ccc', '000000', '2018-02-23 17:11:00');
INSERT INTO `pft_teacher` VALUES ('7cea5da3-190c-11e8-9134-02004c4f4f50', '0', 'x1', '123', '2018-02-24 10:43:27');
INSERT INTO `pft_teacher` VALUES ('aaaa', '2', '孙主任', '222', '2018-02-24 18:43:27');
INSERT INTO `pft_teacher` VALUES ('bbbb', '46546', '朱老师', '111', '2018-02-24 22:43:27');
INSERT INTO `pft_teacher` VALUES ('382789eb-19ce-11e8-8583-9cf387d7956f', '0', '11', '123', '2018-02-25 09:50:04');
INSERT INTO `pft_teacher` VALUES ('481429b9-19ce-11e8-8583-9cf387d7956f', '123123', '1231231', '23123123123123', '2018-02-25 09:50:30');
INSERT INTO `pft_teacher` VALUES ('51af780a-19ce-11e8-8583-9cf387d7956f', '123123', '呃呃呃', '1', '2018-02-25 09:50:46');
