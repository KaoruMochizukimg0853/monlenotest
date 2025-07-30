<?php
$db_host = "localhost";
$db_user = "monleno";
$db_pass = "monleno0001";
$db_name = "nikken";

$link = mysqli_connect($db_host,$db_user,$db_pass);
mysqli_select_db($link,$db_name);


include_once($_SERVER['DOCUMENT_ROOT'] . '/insert/php/script/script.php');
session_start();