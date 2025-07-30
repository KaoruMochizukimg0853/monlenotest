export default function FJ0050_subject_select(display,subject){

    var targets = document.querySelectorAll('div[' + display + '] [name="subject"]');

    for (var i = 0; i < subject.length; i++) {
        var id = subject[i]['id'];
        var name = subject[i]['name'];
        //var button = '<option MA_subject_id="' + id + '">' + name + '</option>';
        var button = '<option value ="' + id + '">' + name + '</option>';
        targets.forEach(function(target) {
            target.innerHTML += button;
        });
    }
    
}