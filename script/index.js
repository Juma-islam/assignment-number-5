// heart a click korle increase-1
const heartClicks=document.getElementsByClassName('heart-click');
const heartBtn=document.getElementById('heart-btn');
let count=0;
for(let heartClick of heartClicks){
    heartClick.addEventListener('click', function(){
        count++;
        heartBtn.innerText = count;
    })
    
}


// call button er kaj-2
const callButton = document.getElementsByClassName('call-btn');
console.log();
