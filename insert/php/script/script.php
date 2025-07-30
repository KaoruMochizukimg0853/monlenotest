<?php
function FP0001_sqlquery($query,$explanation=''){
    global $link;
        $resultarray = [];
        $query = str_replace('  ',' ',$query);
        $result = mysqli_query($link,$query);

        if(gettype($result) == 'boolean'){
            $resultarray[0] = $result;
            $query = str_replace('"','”',$query);
            mysqli_query($link,'INSERT INTO sqlpast(school,query,description,type) VALUES("'.$_SESSION['schoolid'].'","'.$query.'","'.$explanation.'","'.$_SESSION['accounttype'].'")');
        }else{
            $i = 0;
            while($row = mysqli_fetch_assoc($result)){
                $arraykey = array_keys($row);
                for($z = 0;$z < count($arraykey);$z++){
                    $resultarray[$i][$arraykey[$z]] = $row[$arraykey[$z]];
                }
                $i = $i+1;
            }
            mysqli_free_result($result);
        }
    return $resultarray;

}

/*function FP0002_sqlquery($query,$explanation=''){
    global $link;
        $resultarray = [];
        $query = str_replace('  ',' ',$query);
        $result = mysqli_query($link,$query);

        if(gettype($result) == 'boolean'){
            $resultarray[0] = $result;
            $query = str_replace('\'','’',$query);
            $query = str_replace('"','”',$query);
            //$sqltest = 'INSERT INTO sqlpast (school,query,description,type) VALUES ("'.$_SESSION['schoolid'].'",\''.$query.'\',"'.$explanation.'","'.$_SESSION['accounttype'].'")';
            //$resultarray[1] = $query;
            //mysqli_query($link,'INSERT INTO sqlpast (school,query,description,type) VALUES ("'.$_SESSION['schoolid'].'","'.$query.'","'.$explanation.'","'.$_SESSION['accounttype'].'")');
            mysqli_query($link,'INSERT INTO sqlpast (school,query,description,type) VALUES ("'.$_SESSION['schoolid'].'","'.$query.'","'.$explanation.'","'.$_SESSION['accounttype'].'")');
        }else{
            $i = 0;
            while($row = mysqli_fetch_assoc($result)){
                $arraykey = array_keys($row);
                for($z = 0;$z < count($arraykey);$z++){
                    $resultarray[$i][$arraykey[$z]] = $row[$arraykey[$z]];
                }
                $i = $i+1;
            }
            mysqli_free_result($result);
        }
    return $resultarray;

}*/