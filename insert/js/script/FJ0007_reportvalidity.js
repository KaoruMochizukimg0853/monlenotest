export default function FJ0007_reportvalidity(form) {
    var formdom = document.querySelectorAll('form[MA_form="' + form + '"]')[0];
    var formdata = new FormData(formdom);

    for (const pair of formdata.entries()) {
        var key = pair[0];
        var value_text = pair[1];
        value_text = value_text.replaceAll('{', '｛');
        value_text = value_text.replaceAll('<', '＜');
        value_text = value_text.replaceAll('>', '＞');
        value_text = value_text.replaceAll('%', '％');
        value_text = value_text.replaceAll('$', '＄');
        value_text = value_text.replaceAll('/', '／');
        value_text = value_text.replaceAll('}', '｝');
        value_text = value_text.replaceAll('\'', '’');
        
        var dom = document.querySelectorAll('form[MA_form="' + form + '"] input[name="' + key + '"]')[0];
        dom.value = value_text;
    }

    var check = document.querySelectorAll('form[MA_form="' + form + '"]')[0].reportValidity();
    return check;

}