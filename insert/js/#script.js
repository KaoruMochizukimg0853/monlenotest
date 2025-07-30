/*画面遷移関数 */
function FJ0001_display(left,right){
    var lecture_show = document.querySelectorAll('div['+ left +'_show="on"]')[0];
    lecture_show.setAttribute(left+'_show','off');
    var display = document.querySelectorAll('div['+left+'="'+right+'"]')[0];
    display.setAttribute(left+'_show','on');
}

/*通信 */
function FJ0002_Communication(comfile,comstatus=""){
    const xhr = new XMLHttpRequest();
    xhr.open('POST', comfile,false);
    //xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(comstatus);
    /*xhr.onload = () => {*/
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 201)) {
            const data = xhr.response;
            var result = JSON.parse(data);
            //console.log(result);
            return result;
 
        } else {
            //console.log('Error:' + xhr.status);
            return false;
        }
    /*}*/
}
/*入力欄を確認画面に表示用 */
function FJ0003_Copy(original,copy){
    var confirmation = document.getElementById(original).value;
    var tag = document.getElementById(original).tagName;
    if(tag == 'INPUT' || tag == 'TEXFJREA'){
        document.getElementById(copy).innerHTML = confirmation;
    }else if(tag == 'SELECT'){
        document.getElementById(copy).innerHTML = document.getElementById(original).querySelectorAll('option[value="'+confirmation+'"]')[0].innerHTML;
        document.getElementById(copy).setAttribute('NA-value',confirmation);
    }


}

/*選択欄の削除 */
function FJ0004_Choice_Delete(contents){
    document.getElementById(contents).value = document.getElementById(contents).querySelectorAll('option')[0].getAttribute('value');
}
/*入力内容の削除 */
function FJ0005_Input_Delete(contents){
    document.getElementById(contents).value = '';
}

/*選択欄の表示 */
function FJ0006_Choices(choice,phpfile,phpargument){
    
}

/*入力文字を消す */
function FJ0007_Prohibited(type){
    var dom = document.getElementById(type);
    
    dom.value = dom.value.replaceAll('\"','”');
    dom.value = dom.value.replaceAll('<','＜');
    dom.value = dom.value.replaceAll('>','＞');
    dom.value = dom.value.replaceAll('%','％');
    dom.value = dom.value.replaceAll('$','＄');
    dom.value = dom.value.replaceAll('/','／');
    dom.value = dom.value.replaceAll('\'','’');
}

function FJ0009_Login(){
    FJ0001_Display('attend_home');
}