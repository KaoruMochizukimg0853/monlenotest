

export default function FJ0002_communication(comfile,form){
    const xhr = new XMLHttpRequest();
    xhr.open('POST',comfile,false);
    xhr.send(form);
    if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 201)) {
        const data = xhr.response;
        var result = JSON.parse(data);
        console.log(result);
        return result;

    } else {
        console.log('Error:' + xhr.status);
        return false;
    }
}