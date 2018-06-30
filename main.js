const { Client } = require('discord.js');
config = require('./config.json'),
os = require('os'),
mysql = require('mysql'),
fs = require('fs'),
ytdl = require('ytdl-core'),
cheerio = require('cheerio'),
snekfetch = require('snekfetch'),
querystring = require('querystring'),
moment = require('moment'),
express = require('express'),
path = require('path'),
request = require("request"),
http = require("http");
//db = require('mongodb'),


client = new Client();
var sys = require('util');
var exec = require('child_process').exec;
var cluster = require('cluster');
var systemOS = os.platform();
var prettySize = require('prettysize');
var prettyMs = require('pretty-ms');
var ffmpeg = require('fluent-ffmpeg');
var mm = require('musicmetadata');
var aliasesFile = "./aliases.yml";

var bot_prefix = config.bot_prefix;
var bot_passes = config.bot_passes;
var bot_nickname = config.bot_nickname;
var bot_admin_id = config.bot_admin_id;
var bot_token = config.bot_token;
var bot_web_port = config.bot_web_port || 5000;
var bot_web_title = config.bot_web_title;
var bot_web_favicon = config.bot_web_favicon;
var bot_logo_long = config.bot_logo_long;
var bot_logo_square = config.bot_logo_square;
var bot_icon_log = config.bot_icon_log;
var bot_icon_inet = config.bot_icon_inet;
var bot_emoji_logo = config.bot_emoji_logo;
var bot_icon_about = config.bot_icon_about;
var bot_icon_help = config.bot_icon_help;
var bot_icon_ticket = config.bot_icon_ticket;
var bot_icon_heart = config.bot_icon_heart;
var discord_server_invite_link = config.discord_server_invite_link;
var discord_server_id = config.discord_server_id;
var discord_category_id_support = config.discord_category_id_support;
var discord_channel_id_log = config.discord_channel_id_log;
var discord_channel_id_welcome = config.discord_channel_id_welcome;
var discord_channel_id_radio = config.discord_channel_id_radio;
var discord_auto_role_name = config.discord_auto_role_name;
var discord_server_support_role_id_one = config.discord_server_support_role_id_one;
var discord_server_support_role_id_two = config.discord_server_support_role_id_two;
var discord_invite_link = config.discord_invite_link;
var mysql_host = config.mysql_host;
var mysql_user = config.mysql_user;
var mysql_pass = config.mysql_pass;
var mysql_database = config.mysql_database;
var info_website = config.info_website;
var info_copyright = config.info_copyright;
var api_youtube_data = config.api_youtube_data;
var api_google_shortener = config.api_google_shortener;



//Start Current Date/Time
var currentdate = new Date();
var logTimestamp = info_copyright+" | " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/"
                + currentdate.getFullYear() + " @ "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();
var msgTimestamp = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/"
                + currentdate.getFullYear() + " @ "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();
//End Current Date/Time


//Start Commander Init Stuff
var co = require('co');
var prompt = require('co-prompt');
var program = require('commander');
console.log('starting...');
program
.arguments('<file>')
.option('-u, --username <username>', 'The user to authenticate as')
.option('-p, --password <password>', 'The user\'s password')
.action(function(file) {
  co(function *() {
    var username = yield prompt('username: ');
    var password = yield prompt('password: ');
    if (file == "start") { console.log('start command'); }
    console.log('user: %s pass: %s file: %s', username, password, file);
  });
});
//End Commander Init Stuff
