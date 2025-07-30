export default function FJ0055_button_onoff(button){
    var dom = document.querySelectorAll('div[MA_main="sub"][MA_main_show="on"] button[MA_button_show = "on"],div[MA_main="admin"][MA_main_show="on"] button[MA_button_show = "on"]')[0];
    dom.setAttribute('MA_button_show','off');

    var display = document.querySelector('div[MA_main="admin"][MA_main_show="on"] div[MA_right="attend_second"][MA_right_show="on"] button[MA_button="' + button + '"],' +
  'div[MA_main="admin"][MA_main_show="on"] div[MA_right="grades_second"][MA_right_show="on"] button[MA_button="' + button + '"],' +
  'div[MA_main="sub"][MA_main_show="on"] div[MA_sub="attend_second"][MA_sub_show="on"] button[MA_button="' + button + '"],' +
  'div[MA_main="sub"][MA_main_show="on"] div[MA_sub="grades_second"][MA_sub_show="on"] button[MA_button="' + button + '"]'
);
    display.setAttribute('MA_button_show','on');

}