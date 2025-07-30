export default function FJ0049_teacher_select(display,teacher){
    
    var targets = document.querySelectorAll('div[' + display + '] [name="teacher"]');

    for (var i = 0; i < teacher.length; i++) {
        var id = teacher[i]['id'];
        var name = teacher[i]['name'];
        var button = '<option value ="' + id + '">' + name + '</option>';

        targets.forEach(function(target) {
            target.innerHTML += button;
        });
    }
}
    