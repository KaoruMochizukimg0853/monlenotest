import FJ0001_display from '/insert/js/script/FJ0001_display.js';
import FJ0003_dialog from '/insert/js/script/FJ0003_dialog.js';
//import FJ0044_attend_initial from '/insert/js/script/FJ0044_attend_initial.js';
import FJ0047_change_year from '/insert/js/script/FJ0047_change_year.js';
import FJ0048_change_home from '/insert/js/script/FJ0048_change_home.js';
import FJ0049_teacher_select from '/insert/js/script/FJ0049_teacher_select.js';
import FJ0050_subject_select from '/insert/js/script/FJ0050_subject_select.js';
import FJ0051_grades_select from '/insert/js/script/FJ0051_grades_select.js';
//import FJ0074_attend_sub_select_change from '/insert/js/script/FJ0074_attend_sub_select_change.js';




export default function FJ0009_login(){
    //ログイン画面の内容をformdata型に変える
    var login = document.querySelector("form[MA_form='login_form']");
    var form = new FormData(login);
    console.log(form.get("loginid"));        
    console.log(form.get("pass"));           
    console.log(form.get("account_change")); 

    var resultarray = FJ0002_communication('/insert/php/post/login_id.php',form);
    //出欠アカウントか管理アカウントか確認
    var account_change = form.get('account_change');

    if(account_change == 1){
        //アカウントが存在したら1,なかったら2
        if(resultarray[0] == 1){
            resultarray = FJ0047_change_year(resultarray);
            //FJ0075_lecture_button_make();

            var select_array = FJ0002_communication('/insert/php/post/select_seach.php');
            var teacher = select_array[0]['teacher'];
            var subject = select_array[0]['subject'];
            FJ0049_teacher_select('MA_sub=attend_first',teacher);
            FJ0050_subject_select('MA_sub=attend_first',subject);
            FJ0051_grades_select('MA_sub=attend_first');
            //FJ0074_attend_sub_select_change();
            //console.log(select_array);
            
            FJ0001_display('MA_main','sub');
        }else{
            //FJ0003_dialog('login_none');
             alert('できてない');
        }
    }else{
        if(resultarray[0] == 1){
            FJ0047_change_year(resultarray);
            FJ0048_change_home();
            FJ0001_display('MA_main','admin');
        }else{
            //FJ0003_dialog('login_none');
            alert('できてない');
        }
    }
}