var btn = document.querySelector('#btn');
var a = 0;
var timer = null;
btn.onclick = function(){
// document.body.srcollTop = 500;
// document.documentElement.scrollTop = 500;

timer = setInterval(function(){
    a += 10;
    document.documentElement.scrollTop = a;
    if(a >= 300){
        document.documentElement.scrollTop = a;
        clearInterval(timer);
        a = 0;
    }
},10)
}

