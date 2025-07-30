<?php
include_once($_SERVER['DOCUMENT_ROOT'] . '/insert/init.php');

$resultarray = [];
$resultarray[0]['teacher'] = FP0001_sqlquery('SELECT id,name FROM teacher WHERE school = "'.$_SESSION['schoolid'].'"');
$resultarray[0]['subject'] = FP0001_sqlquery('SELECT id,name FROM subject WHERE school = "'.$_SESSION['schoolid'].'"');

$resultjson =  json_encode($resultarray);
print($resultjson);