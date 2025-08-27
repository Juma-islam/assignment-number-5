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
const callButtons=document.getElementsByClassName('call-btn');
const coinBtn=document.getElementById('coin-btn');
let coin=100
for(let callButton of callButtons){
    callButton.addEventListener('click', function(){
        const parent = callButton.parentElement; 
        const serviceName=parent.querySelector('.service-name').innerText;
        const serviceNumber=parent.querySelector('.service-number').innerText;

        if(coin<20){
    alert('❌ Not enough coins to make a call');
    return;
}
coin -=20;
coinBtn.innerText = coin;
alert(`📞 Calling  ${serviceName}  ${serviceNumber}`)
const callHistory = document.getElementById('call-history');
const newCart = document.createElement('div');
newCart.innerHTML = ` <div class=" bg-white  mt-9 ">
<h2 class="font-bold font-hind">${serviceName}</h2>
<h2 class="font-bold mt-4 text-xl font-roboto ">${serviceNumber}</h2>
                     </div>`
                     
callHistory.append(newCart);
const now= new Date();
                     const timeString=now.toLocaleTimeString();
                     
                     callHistory.append(timeString)

    })
}

