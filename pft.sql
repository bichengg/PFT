/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50719
Source Host           : localhost:3306
Source Database       : pft

Target Server Type    : MYSQL
Target Server Version : 50719
File Encoding         : 65001

Date: 2018-06-21 10:06:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for pft_admin
-- ----------------------------
DROP TABLE IF EXISTS `pft_admin`;
CREATE TABLE `pft_admin` (
  `id` varchar(255) CHARACTER SET utf8 NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `password` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=gb2312;

-- ----------------------------
-- Records of pft_admin
-- ----------------------------
INSERT INTO `pft_admin` VALUES ('cf60fee51a1c17365f9effe51ecb2d4b780ba146bf89eda5bd38dc84fff32d4feff2379c176a00216bcbeb4a2293b2a7e9bb78d9fbee6919db247b16c3374572', 'admin3', '202cb962ac59075b964b07152d234b70');

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
  `student_code` varchar(50) NOT NULL,
  `nation` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `sex` varchar(10) DEFAULT NULL,
  `born` varchar(100) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `teacher_id` varchar(100) DEFAULT NULL,
  `teacher_class` varchar(255) DEFAULT NULL,
  `school_year` varchar(100) DEFAULT NULL,
  `status` int(5) DEFAULT '0',
  `is_submit` int(1) DEFAULT '0',
  `create_time` datetime DEFAULT NULL,
  `time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `test_height` varchar(20) DEFAULT '0' COMMENT '身高',
  `test_weight` varchar(20) DEFAULT '0' COMMENT '体重',
  `test_lung` varchar(20) DEFAULT '0' COMMENT '肺活量',
  `test_50m` varchar(20) DEFAULT '0' COMMENT '50米跑',
  `test_jump` varchar(20) DEFAULT '0' COMMENT '立定跳远',
  `test_sr` varchar(20) DEFAULT '-100' COMMENT '坐位体前屈',
  `test_800` varchar(20) DEFAULT '0' COMMENT '800米跑',
  `test_1000` varchar(20) DEFAULT '0' COMMENT '1000米跑',
  `test_situp` varchar(20) DEFAULT '0' COMMENT '一分钟仰卧起坐',
  `test_pullup` varchar(20) DEFAULT '0' COMMENT '引体向上',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pft_student
-- ----------------------------
INSERT INTO `pft_student` VALUES ('fe55fdbd-74f0-11e8-af08-94de807c8dff', '44', '11415081', '物流1141', '3122115120', '汉族', '陈人杰', '男', '1993/10/09', '江苏省淮安市', 'de3f6967-57de-11e8-bcee-94de807c8dff', '周一34', '2018', '0', '1', '2018-06-21 09:18:19', '2018-06-21 09:46:47', '188', '65', '5555', '5', '200', '20', '0', '4', '0', '33');
INSERT INTO `pft_student` VALUES ('fe5c1903-74f0-11e8-af08-94de807c8dff', '44', '11415081', '物流1141', '3122115107', '汉族', '姜楠', '男', '1993/11/03', '江苏省淮安市', 'de3f6967-57de-11e8-bcee-94de807c8dff', '周一34', '2018', '1', '1', '2018-06-21 09:18:19', '2018-06-21 09:46:47', '0', '0', '0', '0', '0', '-100', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('fe628170-74f0-11e8-af08-94de807c8dff', '44', '11414011', '土木1141', '3122109134', '汉族', '姚坤宇', '男', '1994/07/20', '江苏省淮安市', 'de3f6967-57de-11e8-bcee-94de807c8dff', '周一34', '2018', '0', '1', '2018-06-21 09:18:19', '2018-06-21 09:46:47', '0', '0', '0', '0', '0', '-100', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('fe6866ec-74f0-11e8-af08-94de807c8dff', '42', '11614011', '土木1161', '3122109115', '汉族', '李帅', '男', '1994/01/24', '江苏省淮安市', 'de3f6967-57de-11e8-bcee-94de807c8dff', '周一34', '2018', '0', '1', '2018-06-21 09:18:19', '2018-06-21 09:46:47', '0', '0', '0', '0', '0', '-100', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('fe6e430a-74f0-11e8-af08-94de807c8dff', '41', '11741031', '金融1171', '1174103144', '汉族', '蒋雅俐', '女', '1998/08/25', '江苏省淮安市', 'de3f6967-57de-11e8-bcee-94de807c8dff', '周一34', '2018', '0', '1', '2018-06-21 09:18:19', '2018-06-21 09:46:47', '155', '50', '4444', '6', '150', '10', '3', '0', '33', '0');
INSERT INTO `pft_student` VALUES ('fe75bb22-74f0-11e8-af08-94de807c8dff', '41', '11741031', '金融1171', '1174103143', '汉族', '陶玉洁', '女', '1998/09/09', '江苏省淮安市', 'de3f6967-57de-11e8-bcee-94de807c8dff', '周一34', '2018', '0', '1', '2018-06-21 09:18:19', '2018-06-21 09:46:47', '0', '0', '0', '0', '0', '-100', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('fe7bb4dd-74f0-11e8-af08-94de807c8dff', '41', '11741031', '金融1171', '1174103142', '汉族', '张明珠', '女', '1999/12/14', '江苏省淮安市', 'de3f6967-57de-11e8-bcee-94de807c8dff', '周一34', '2018', '0', '1', '2018-06-21 09:18:19', '2018-06-21 09:46:47', '0', '0', '0', '0', '0', '-100', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('fe823b03-74f0-11e8-af08-94de807c8dff', '41', '11741031', '金融1171', '1174103141', '汉族', '俞利', '女', '1997/12/23', '江苏省淮安市', 'de3f6967-57de-11e8-bcee-94de807c8dff', '周一34', '2018', '0', '1', '2018-06-21 09:18:19', '2018-06-21 09:46:47', '0', '0', '0', '0', '0', '-100', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('fe88a0d2-74f0-11e8-af08-94de807c8dff', '41', '11741031', '金融1171', '1174103140', '汉族', '张姝雨', '女', '1999/03/11', '江苏省淮安市', 'de3f6967-57de-11e8-bcee-94de807c8dff', '周一34', '2018', '0', '1', '2018-06-21 09:18:19', '2018-06-21 09:46:47', '0', '0', '0', '0', '0', '-100', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('fe90b941-74f0-11e8-af08-94de807c8dff', '41', '11741031', '金融1171', '1174103139', '汉族', '顾海美', '女', '1999/01/12', '江苏省淮安市', 'de3f6967-57de-11e8-bcee-94de807c8dff', '周一34', '2018', '0', '1', '2018-06-21 09:18:19', '2018-06-21 09:46:47', '0', '0', '0', '0', '0', '-100', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('fe976b6d-74f0-11e8-af08-94de807c8dff', '41', '11741031', '金融1171', '1174103138', '汉族', '杨馨', '女', '1998/10/12', '江苏省淮安市', 'de3f6967-57de-11e8-bcee-94de807c8dff', '周一34', '2018', '0', '1', '2018-06-21 09:18:20', '2018-06-21 09:46:47', '0', '0', '0', '0', '0', '-100', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('fe9d1029-74f0-11e8-af08-94de807c8dff', '41', '11741031', '金融1171', '1174103137', '汉族', '徐秋月', '女', '1998/10/05', '江苏省淮安市', 'de3f6967-57de-11e8-bcee-94de807c8dff', '周一34', '2018', '0', '1', '2018-06-21 09:18:20', '2018-06-21 09:46:47', '0', '0', '0', '0', '0', '-100', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('fea39f77-74f0-11e8-af08-94de807c8dff', '41', '11741031', '金融1171', '1174103136', '汉族', '马雪萍', '女', '2000/04/23', '江苏省淮安市', 'de3f6967-57de-11e8-bcee-94de807c8dff', '周一34', '2018', '0', '1', '2018-06-21 09:18:20', '2018-06-21 09:46:47', '0', '0', '0', '0', '0', '-100', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('fea957ce-74f0-11e8-af08-94de807c8dff', '41', '11741031', '金融1171', '1174103135', '汉族', '仇嘉仪', '女', '1999/01/17', '江苏省淮安市', 'de3f6967-57de-11e8-bcee-94de807c8dff', '周一34', '2018', '0', '1', '2018-06-21 09:18:20', '2018-06-21 09:46:47', '0', '0', '0', '0', '0', '-100', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('feaf39fd-74f0-11e8-af08-94de807c8dff', '41', '11741031', '金融1171', '1174103133', '汉族', '唐甜甜', '女', '1997/09/01', '江苏省淮安市', 'de3f6967-57de-11e8-bcee-94de807c8dff', '周一34', '2018', '0', '1', '2018-06-21 09:18:20', '2018-06-21 09:46:47', '0', '0', '0', '0', '0', '-100', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('feb5501b-74f0-11e8-af08-94de807c8dff', '41', '11741031', '金融1171', '1174103132', '汉族', '斯丽', '女', '2000/09/08', '江苏省淮安市', 'de3f6967-57de-11e8-bcee-94de807c8dff', '周一34', '2018', '0', '1', '2018-06-21 09:18:20', '2018-06-21 09:46:47', '0', '0', '0', '0', '0', '-100', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('febc5227-74f0-11e8-af08-94de807c8dff', '41', '11741031', '金融1171', '1174103131', '汉族', '李会', '女', '1998/04/20', '江苏省淮安市', 'de3f6967-57de-11e8-bcee-94de807c8dff', '周一34', '2018', '0', '1', '2018-06-21 09:18:20', '2018-06-21 09:46:47', '0', '0', '0', '0', '0', '-100', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('fec24753-74f0-11e8-af08-94de807c8dff', '41', '11741031', '金融1171', '1174103129', '汉族', '冯炜钧', '女', '1999/01/23', '江苏省淮安市', 'de3f6967-57de-11e8-bcee-94de807c8dff', '周一34', '2018', '0', '1', '2018-06-21 09:18:20', '2018-06-21 09:46:47', '0', '0', '0', '0', '0', '-100', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('fec7ed21-74f0-11e8-af08-94de807c8dff', '41', '11741031', '金融1171', '1174103128', '汉族', '刘莎莎', '女', '1999/09/25', '江苏省淮安市', 'de3f6967-57de-11e8-bcee-94de807c8dff', '周一34', '2018', '0', '1', '2018-06-21 09:18:20', '2018-06-21 09:46:47', '0', '0', '0', '0', '0', '-100', '0', '0', '0', '0');
INSERT INTO `pft_student` VALUES ('fecd69a0-74f0-11e8-af08-94de807c8dff', '41', '11741031', '金融1171', '1174103127', '汉族', '殷怡婷', '女', '1999/04/15', '江苏省淮安市', 'de3f6967-57de-11e8-bcee-94de807c8dff', '周一34', '2018', '0', '1', '2018-06-21 09:18:20', '2018-06-21 09:46:47', '0', '0', '0', '0', '0', '-100', '0', '0', '0', '0');

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
INSERT INTO `pft_teacher` VALUES ('7c155701-1a0a-11e8-b7b7-9cf387d7956f', '91', '乔纳森宝宝', '123', '2018-02-25 17:01:42', '2017');
INSERT INTO `pft_teacher` VALUES ('d6471fa2-1a34-11e8-b7b7-9cf387d7956f', '123123', '再试下嗡嗡嗡', '111', '2018-02-25 22:04:52', '2018');
INSERT INTO `pft_teacher` VALUES ('1ececb7b-1aa8-11e8-8708-94de807c8dff', '92', '王麻子小', '123', '2018-02-26 11:50:05', '2018');
INSERT INTO `pft_teacher` VALUES ('1c440885-1aca-11e8-8708-94de807c8dff', '1111111111', '大宝宝', '123', '2018-03-06 15:17:11', '2018');
INSERT INTO `pft_teacher` VALUES ('de3f6967-57de-11e8-bcee-94de807c8dff', '86', '毕老师', '123', '2018-05-18 17:01:20', '2018');
