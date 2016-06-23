/**
 * Created by Gnet on 2016/6/22.
 */

function writeCookie(name,value,days){
    //days为有效日期，表示cookie可以存在的天数
    var expires = '';
    if(days){
        var date = new Date();
        date.setTime(date.getTime()+(days * 24 * 60 *60 * 1000));//将天数换算成毫秒数，再把毫秒数加到当前时间上
        //expires = "; expires=" + date.toGMTString();//toGMTString()函数用于以字符串的形式返回一个日期
        expires = "; expires=" + date.toUTCString();//toUTCString()函数用于以字符串的形式返回一个日期
    }
    document.cookie = name + " = " + value +expires + ";path=/";

}
function readCookie(name){
    var searchName = name + "=";
    var cookies = document.cookie.split(';');//使用分号隔开各个cookie
    for(var i=0; i < cookies.length; i++){
        var c = cookies[i];
        while(c.charAt(0) == '')
            c =c.substring(searchName.length, c.length);
    }
    return null;
}
function eraseCookie(name){
    writeCookie(name, '', -1);//清除cookie方式
}
