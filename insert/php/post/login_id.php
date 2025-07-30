<?php
include_once($_SERVER['DOCUMENT_ROOT'] . '/insert/init.php');

$loginid = $_POST['loginid'];
$pass = $_POST['pass'];
$account_change = $_POST['account_change'];

if($account_change == 1){
    $accountid = 'subid';
    $loginpass = 'subpass';
    $_SESSION['accounttype'] = 0;
}else{
    $accountid = 'adminid';
    $loginpass = 'adminpass';
    $_SESSION['accounttype'] = 1;
}
$resultarray = [];
$existence = FP0001_sqlquery('SELECT count(id) as login_user FROM login WHERE '.$accountid.'="'.$loginid.'" AND '.$loginpass.'="'.$pass.'"');

$resultarray[0] = $existence[0]['login_user'];
//$resultarray = $existence;
if($resultarray[0] == 1 || $resultarray[0] == '1'){
    $resultsql = FP0001_sqlquery('SELECT id,flagyear,flagseason,readyflag FROM login WHERE '.$accountid.'="'.$loginid.'" AND '.$loginpass.'="'.$pass.'"');
    $resultarray[1] = $resultsql;
    $_SESSION['schoolid'] = $resultsql[0]['id'];
    $resultflagseason = $resultsql[0]['flagseason'];

    $resultsql = FP0001_sqlquery('SELECT id,name FROM season WHERE school="'.$_SESSION['schoolid'].'"');
    $resultarray[2] = $resultsql;

    $resultsql = FP0001_sqlquery('SELECT id,name FROM grade WHERE school="'.$_SESSION['schoolid'].'"');
    $resultarray[3] = $resultsql;

    $resultsql = FP0001_sqlquery('SELECT id,name FROM evaluation WHERE school="'.$_SESSION['schoolid'].'"');
    $resultarray[4] = $resultsql;

    $resultsql = FP0001_sqlquery('SELECT name FROM season WHERE school="'.$_SESSION['schoolid'].'" AND id="'.$resultflagseason.'"');
    $resultarray[5] = $resultsql;

}

$resultjson =  json_encode($resultarray);
print($resultjson);