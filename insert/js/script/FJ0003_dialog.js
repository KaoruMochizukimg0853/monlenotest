export default function FJ0003_dialog(display,onoff){
    var dialog = document.querySelectorAll('div[MA_dialog="'+ display+'"]')[0];
    dialog.setAttribute('MA_dialog_show',onoff);
}