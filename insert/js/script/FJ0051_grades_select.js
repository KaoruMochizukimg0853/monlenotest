export default function FJ0051_grades_select(display){

    var targets = document.querySelectorAll('div[' + display + '] [name="grade"]');

    for (var i = 0; i < GJ_grades.length; i++) {
        var id = GJ_grades[i]['id'];
        var name = GJ_grades[i]['name'];
        //var button = '<option MA_grade_id="' + id + '">' + name + '</option>';
        var button = '<option value ="' + id + '">' + name + '</option>';

        targets.forEach(function(target) {
            target.innerHTML += button;
        });
    }
}