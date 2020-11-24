var DataTypes = require("sequelize").DataTypes;
var _Election_Cand = require("./Election_Cand");
var _New_student = require("./New_student");
var _READSTATE = require("./READSTATE");
var _SequelizeMeta = require("./SequelizeMeta");
var _Time_History = require("./Time_History");
var _app_board = require("./app_board");
var _app_board_detail = require("./app_board_detail");
var _app_calendar = require("./app_calendar");
var _app_diet = require("./app_diet");
var _app_feed = require("./app_feed");
var _app_feed_pick = require("./app_feed_pick");
var _app_regid = require("./app_regid");
var _app_school_noti = require("./app_school_noti");
var _app_survery = require("./app_survery");
var _app_survery_detail = require("./app_survery_detail");
var _app_survery_pick = require("./app_survery_pick");
var _card_no_check = require("./card_no_check");
var _consulting = require("./consulting");
var _delete_tab = require("./delete_tab");
var _discip_code = require("./discip_code");
var _discip_list = require("./discip_list");
var _dtproperties = require("./dtproperties");
var _education = require("./education");
var _edufine_a = require("./edufine_a");
var _food_guide = require("./food_guide");
var _food_info = require("./food_info");
var _food_menu = require("./food_menu");
var _food_money = require("./food_money");
var _food_teacher = require("./food_teacher");
var _food_teacher_info = require("./food_teacher_info");
var _food_time = require("./food_time");
var _history = require("./history");
var _idcard = require("./idcard");
var _idcard_issue = require("./idcard_issue");
var _idcarddel = require("./idcarddel");
var _indaycheck = require("./indaycheck");
var _jinro_body = require("./jinro_body");
var _meal_check = require("./meal_check");
var _meal_exit = require("./meal_exit");
var _meal_time = require("./meal_time");
var _mem_info = require("./mem_info");
var _mem_week = require("./mem_week");
var _merit = require("./merit");
var _meritcode = require("./meritcode");
var _my_info = require("./my_info");
var _my_sms_info = require("./my_sms_info");
var _nocheckday = require("./nocheckday");
var _parent_info = require("./parent_info");
var _school_gubun = require("./school_gubun");
var _schooltime = require("./schooltime");
var _sms = require("./sms");
var _sms_group = require("./sms_group");
var _sms_temp = require("./sms_temp");
var _smscode = require("./smscode");
var _studend_end = require("./studend_end");
var _student = require("./student");
var _student_back = require("./student_back");
var _studenthistory = require("./studenthistory");
var _studentin = require("./studentin");
var _studentinout = require("./studentinout");
var _subject = require("./subject");
var _teacher = require("./teacher");
var _temporary_card = require("./temporary_card");
var _writedb = require("./writedb");

function initModels(sequelize) {
  var Election_Cand = _Election_Cand(sequelize, DataTypes);
  var New_student = _New_student(sequelize, DataTypes);
  var READSTATE = _READSTATE(sequelize, DataTypes);
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var Time_History = _Time_History(sequelize, DataTypes);
  var app_board = _app_board(sequelize, DataTypes);
  var app_board_detail = _app_board_detail(sequelize, DataTypes);
  var app_calendar = _app_calendar(sequelize, DataTypes);
  var app_diet = _app_diet(sequelize, DataTypes);
  var app_feed = _app_feed(sequelize, DataTypes);
  var app_feed_pick = _app_feed_pick(sequelize, DataTypes);
  var app_regid = _app_regid(sequelize, DataTypes);
  var app_school_noti = _app_school_noti(sequelize, DataTypes);
  var app_survery = _app_survery(sequelize, DataTypes);
  var app_survery_detail = _app_survery_detail(sequelize, DataTypes);
  var app_survery_pick = _app_survery_pick(sequelize, DataTypes);
  var card_no_check = _card_no_check(sequelize, DataTypes);
  var consulting = _consulting(sequelize, DataTypes);
  var delete_tab = _delete_tab(sequelize, DataTypes);
  var discip_code = _discip_code(sequelize, DataTypes);
  var discip_list = _discip_list(sequelize, DataTypes);
  var dtproperties = _dtproperties(sequelize, DataTypes);
  var education = _education(sequelize, DataTypes);
  var edufine_a = _edufine_a(sequelize, DataTypes);
  var food_guide = _food_guide(sequelize, DataTypes);
  var food_info = _food_info(sequelize, DataTypes);
  var food_menu = _food_menu(sequelize, DataTypes);
  var food_money = _food_money(sequelize, DataTypes);
  var food_teacher = _food_teacher(sequelize, DataTypes);
  var food_teacher_info = _food_teacher_info(sequelize, DataTypes);
  var food_time = _food_time(sequelize, DataTypes);
  var history = _history(sequelize, DataTypes);
  var idcard = _idcard(sequelize, DataTypes);
  var idcard_issue = _idcard_issue(sequelize, DataTypes);
  var idcarddel = _idcarddel(sequelize, DataTypes);
  var indaycheck = _indaycheck(sequelize, DataTypes);
  var jinro_body = _jinro_body(sequelize, DataTypes);
  var meal_check = _meal_check(sequelize, DataTypes);
  var meal_exit = _meal_exit(sequelize, DataTypes);
  var meal_time = _meal_time(sequelize, DataTypes);
  var mem_info = _mem_info(sequelize, DataTypes);
  var mem_week = _mem_week(sequelize, DataTypes);
  var merit = _merit(sequelize, DataTypes);
  var meritcode = _meritcode(sequelize, DataTypes);
  var my_info = _my_info(sequelize, DataTypes);
  var my_sms_info = _my_sms_info(sequelize, DataTypes);
  var nocheckday = _nocheckday(sequelize, DataTypes);
  var parent_info = _parent_info(sequelize, DataTypes);
  var school_gubun = _school_gubun(sequelize, DataTypes);
  var schooltime = _schooltime(sequelize, DataTypes);
  var sms = _sms(sequelize, DataTypes);
  var sms_group = _sms_group(sequelize, DataTypes);
  var sms_temp = _sms_temp(sequelize, DataTypes);
  var smscode = _smscode(sequelize, DataTypes);
  var studend_end = _studend_end(sequelize, DataTypes);
  var student = _student(sequelize, DataTypes);
  var student_back = _student_back(sequelize, DataTypes);
  var studenthistory = _studenthistory(sequelize, DataTypes);
  var studentin = _studentin(sequelize, DataTypes);
  var studentinout = _studentinout(sequelize, DataTypes);
  var subject = _subject(sequelize, DataTypes);
  var teacher = _teacher(sequelize, DataTypes);
  var temporary_card = _temporary_card(sequelize, DataTypes);
  var writedb = _writedb(sequelize, DataTypes);


  return {
    Election_Cand,
    New_student,
    READSTATE,
    SequelizeMeta,
    Time_History,
    app_board,
    app_board_detail,
    app_calendar,
    app_diet,
    app_feed,
    app_feed_pick,
    app_regid,
    app_school_noti,
    app_survery,
    app_survery_detail,
    app_survery_pick,
    card_no_check,
    consulting,
    delete_tab,
    discip_code,
    discip_list,
    dtproperties,
    education,
    edufine_a,
    food_guide,
    food_info,
    food_menu,
    food_money,
    food_teacher,
    food_teacher_info,
    food_time,
    history,
    idcard,
    idcard_issue,
    idcarddel,
    indaycheck,
    jinro_body,
    meal_check,
    meal_exit,
    meal_time,
    mem_info,
    mem_week,
    merit,
    meritcode,
    my_info,
    my_sms_info,
    nocheckday,
    parent_info,
    school_gubun,
    schooltime,
    sms,
    sms_group,
    sms_temp,
    smscode,
    studend_end,
    student,
    student_back,
    studenthistory,
    studentin,
    studentinout,
    subject,
    teacher,
    temporary_card,
    writedb,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
