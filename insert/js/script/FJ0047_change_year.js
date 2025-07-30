export default function FJ0047_change_year(resultarray){
    GJ_now_year = resultarray[1][0]['flagyear'];
    GJ_now_season = resultarray[5][0]['name'];
    GJ_season = resultarray[2];
    GJ_grades = resultarray[3];
    GJ_evaluation = resultarray[4];

    var readyflag = resultarray[1][0]['readyflag'];

    document.querySelector('body[MA_readyflag=""]').setAttribute('MA_readyflag',readyflag);

    var now = GJ_now_year + GJ_now_season;

    document.querySelector('span[MA_id="season_admin"]').innerHTML = now;
    document.querySelector('span[MA_id="season_sub"]').innerHTML = now;


}