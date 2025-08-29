// heart a click korle increase-1
const heartClicks = document.getElementsByClassName('heart-click');
const heartBtn = document.getElementById('heart-btn');
let count = 0;
for (let heartClick of heartClicks) {
    heartClick.addEventListener('click', function () {
        count++;
        heartBtn.innerText = count;
    })

}


// call button er kaj-2
const callButtons = document.getElementsByClassName('call-btn');
const coinBtn = document.getElementById('coin-btn');
let coin = 100
for (let callButton of callButtons) {
    callButton.addEventListener('click', function () {
        const parent = callButton.parentElement;
        const serviceName = parent.querySelector('.service-name').innerText;
        const serviceNumber = parent.querySelector('.service-number').innerText;

        if (coin < 20) {
            alert('❌ Not enough coins to make a call');
            return;
        }
        coin -= 20;
        coinBtn.innerText = coin;
        alert(`📞 Calling  ${serviceName}  ${serviceNumber}`)
        const callHistory = document.getElementById('call-history');
        const newCart = document.createElement('div');
        newCart.className = " bg-white mt-4 flex justify-between items-center bg-white w-[100%] shadow-sm p-5 rounded-lg"
        newCart.innerHTML = ` <div class=" bg-white  mt-4">
<h2 class="font-bold font-hind">${serviceName}</h2>
<h2 class="font-bold mt-4 text-xl font-roboto ">${serviceNumber}</h2>
                     </div>`
        // time Setting 
        const now = new Date();
        const timeElement = document.createElement('div');
        timeElement.innerText = `${now.toLocaleTimeString()}`;
        newCart.appendChild(timeElement);
        callHistory.appendChild(newCart);
        const clearButton = document.getElementById('clear-btn')
        clearButton.addEventListener('click', function () {
            newCart.style.display = 'none';
            timeElement.style.display = 'none';

        })
    })
}

// copy clicked
const copyClicks = document.getElementsByClassName('copy-click');
const copyBtn = document.getElementById('copy-btn');
let counts = 0;
for (let copyClick of copyClicks) {
    copyClick.addEventListener('click', function () {
        counts++;
        copyBtn.innerText = counts;

        const parent = copyClick.parentElement;
        const serNum = parent.querySelector('.service-number').innerText;
        navigator.clipboard.writeText(serNum);
        alert(`this number is copied ${serNum}`);
    })

}

