//import FJ0001_display from "";

/*画面遷移関数 */
export default function FJ0001_display(left,right){
    var lecture_show = document.querySelectorAll('div['+ left +'_show="on"]')[0];
    lecture_show.setAttribute(left+'_show','off');
    var display = document.querySelectorAll('div['+left+'="'+right+'"]')[0];
    display.setAttribute(left+'_show','on');
}