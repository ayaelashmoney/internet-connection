let title=document.querySelector('.title');
let ul=document.querySelector('ul');
let btn=document.querySelector('.btn');

window.onload=function(){
    if(window.navigator.onLine){
        online()
    }else{
        offline()
    }
}

window.addEventListener('online',function(){
    online();
});

window.addEventListener('offline',function(){
    offline();
});

btn.onclick =function(){
    window.location.reload()
}
function online(){

    title.innerHTML='online now';
    title.style.color = 'green';
    ul.classList.add('hide');
    btn.classList.add('hide');

}


function offline(){
title.innerHTML='offline now';
title.style.color='#666';
ul.classList.remove('hide');
btn.classList.remove('hide');

}