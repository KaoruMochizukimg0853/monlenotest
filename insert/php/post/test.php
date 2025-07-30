<?php
include_once($_SERVER['DOCUMENT_ROOT'] . '/insert/init.php');
$resultjson = '';
$result_array = [];

$result_array['result'] = 'success';

$resultjson =  json_encode($result_array);
print($resultjson);