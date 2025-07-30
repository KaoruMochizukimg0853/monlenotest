export default function FJ0048_change_home(){
    var readyflag = document.querySelector('body').getAttribute('MA_readyflag');
    if(readyflag == '0'){
        document.querySelector('div[MA_button="season_start"]').setAttribute('MA_hidden','off');
        document.querySelector('div[MA_button="season_end"]').setAttribute('MA_hidden','on');
        document.querySelector('div[MA_button="year_end"]').setAttribute('MA_hidden','none');
    }   
    else if(readyflag == '1'){
        document.querySelector('div[MA_button="season_end"]').setAttribute('MA_hidden','off');
        document.querySelector('div[MA_button="season_start"]').setAttribute('MA_hidden','on');
        document.querySelector('div[MA_button="year_end"]').setAttribute('MA_hidden','none');
    }
    else if(readyflag == '2'){
        document.querySelector('div[MA_button="year_end"]').setAttribute('MA_hidden','off');
        document.querySelector('div[MA_button="season_start"]').setAttribute('MA_hidden','on');
        document.querySelector('div[MA_button="season_end"]').setAttribute('MA_hidden','none');
    }
}