let healthBar = document.getElementById("health"); 
let ageText = document.getElementById("age"); 
let happinessText = document.getElementById("happiness");
let hungerText = document.getElementById("hunger");
let khang = document.getElementById("khang");
let moneyText = document.getElementById("money");
let food = document.getElementById("food");
let foodMenu = document.getElementById("foodMenu");
let toy = document.getElementById("toy");
let toyMenu = document.getElementById("toyMenu");
let upgrade = document.getElementById("upgrade");
let upgradeMenu = document.getElementById("upgradeMenu");
let bigMac = document.getElementById("bigMac");
let bigMacDeluxe = document.getElementById("bigMacDeluxe");
let doubleDouble = document.getElementById("doubleDouble");
let bigMacMeal = document.getElementById("bigMacMeal");
let salad = document.getElementById("salad");
let brokeMessage = document.getElementById("brokeMessage");
let lego = document.getElementById("lego");
let dildo = document.getElementById("dildo");
let airsoftGun = document.getElementById("airsoftGun");
let buttPlug = document.getElementById("buttPlug");
let vape = document.getElementById("vape");
let aclick = document.getElementById("aclick");
let bclick = document.getElementById("bclick");
let cclick = document.getElementById("cclick");
let dclick = document.getElementById("dclick");
let eclick = document.getElementById("eclick");
let cantBuyMessage = document.getElementById("cantBuyMessage");

let happiness = 100;
let health = 100;
let age = 0;
let healthDrain = 0.005;
let hunger = 100;
let moneyMultiplier = 1;
let money = 0;
let happinessDrain = 0;
let isFoodClick = -1;
let isToyClick = -1;
let isUpgradeClick = -1;
let multiplier = 1;
let onAClick = false;
let onBClick = false;
let onCClick = false;
let onDClick = false;
let onEClick = false;

brokeMessage.style.visibility = "hidden";
cantBuyMessage.style.visibility = "hidden";

function checkHealth() {

    ageText.innerHTML = `Age: ${age}`;
    moneyText.innerHTML = Math.round(money);
    health-=healthDrain;
    happiness-=happinessDrain;
    happinessText.innerHTML = `Happiness: ${Math.round(happiness)}`;

    // health
    if (health<=100 && health>=50){
        healthBar.style.width = `${Math.round(health)}%`;
        healthDrain = 0.001;
    }
    else if (health<=50 && health>=25){
        healthBar.style.width = `${Math.round(health)}%`;
        healthDrain = 0.0125;
        happinessDrain+=0.0005;
    }
    else if (health<=25 && health>=10){
        healthBar.style.width = `${Math.round(health)}%`;
        healthDrain = 0.015;
        happinessDrain+=0.0005;
    }
    else if(health>100) {
        health=100;
    }

    // age
    if (age>=15 && age<25){
        khang.src = "khangOld.png";
        happinessDrain+=0.001;
    }
    else if(age>=25 && age<50) {
        khang.src = "khangOld2.png"
        happinessDrain+=0.0025;
    }
    else if(age>=50 && age<75) {
        khang.src = "khangOld3.png"
        happinessDrain+=0.005;
    }
    else if(age>=75 && age<100) {
        khang.src = "khangOld4.png"
        happinessDrain+=0.0075;
    }
    else if(age>=100) {
        khang.src = "khangOld5.png"
        happinessDrain+=0.001;
    }

    // hunger
    if (hunger>=50 && hunger<=100) {
        hungerText.innerHTML= `Hunger: ${Math.round(hunger)}% (Full)`;
}
    else if (hunger>=25 && hunger<=50) {
        hungerText.innerHTML= `Hunger: ${Math.round(hunger)}% (Hungry)`;
}
    else if (hunger>100){
        hunger=100;
        hungerText.innerHTML= `Hunger: ${Math.round(hunger)}% (Hungry)`;       
    }
    else {
        hungerText.innerHTML= `Hunger: ${Math.round(hunger)}% (Starving)`;
    }

    // happiness    
    if (happiness>100) {
        happiness=100;
        happinessText.innerHTML = `Happiness: ${Math.round(happiness)}`;
    }
    else if ((hunger>=50 && hunger<75) || (health<75 && health>=50)) {
        happinessDrain+=0.0001;
    }
    else if ((hunger>=25 && hunger<50) || (health<50 && health>=25)) {
        happinessDrain+=0.00025;
    }
    else if ((hunger>=25 && hunger<0) || (health<25 && health>0)) {
        happinessDrain+=0.0005;
    }

    if(hunger <= 0) {
        window.alert(`You let Khang Le Starve! Money: ${money} Age: ${age}`);
         happiness = 100;
 health = 100;
 age = 0;
 healthDrain = 0.005;
 hunger = 100;
 moneyMultiplier = 1;
 money = 0;
 happinessDrain = 0;
 isFoodClick = -1;
 isToyClick = -1;
 isUpgradeClick = -1;
 multiplier = 1;
 onAClick = false;
 onBClick = false;
 onCClick = false;
 onDClick = false;
 onEClick = false;

        
    }
    else if(happiness <= 0) {
        window.alert(`You let Khang Le Kill Himself! Money: ${money} Age: ${age}`);
                 happiness = 100;
 health = 100;
 age = 0;
 healthDrain = 0.005;
 hunger = 100;
 moneyMultiplier = 1;
 money = 0;
 happinessDrain = 0;
 isFoodClick = -1;
 isToyClick = -1;
 isUpgradeClick = -1;
 multiplier = 1;
 onAClick = false;
 onBClick = false;
 onCClick = false;
 onDClick = false;
 onEClick = false;
    }
    else if(health <= 0){
        window.alert(`You let Khang Le Die! Money: ${money} Age: ${age}`);
                 happiness = 100;
 health = 100;
 age = 0;
 healthDrain = 0.005;
 hunger = 100;
 moneyMultiplier = 1;
 money = 0;
 happinessDrain = 0;
 isFoodClick = -1;
 isToyClick = -1;
 isUpgradeClick = -1;
 multiplier = 1;
 onAClick = false;
 onBClick = false;
 onCClick = false;
 onDClick = false;
 onEClick = false;
    }

        healthBar.style.width = `${Math.round(health)}%`;
}

function aging() {

    age+=1;

}

function doHunger() {

    hunger-=1;

}

khang.addEventListener("click", event => {
    money+=(1*multiplier);
    let audio = new Audio("click.wav");
    audio.play();
    setTimeout(() => {
        khang.style.transform = "scale(1.05, 1.05)";
}, 50);
    khang.style.transform = "scale(1.00, 1.00)";
   
});

food.addEventListener("click", event => {

    let audio = new Audio("click.wav");
    audio.play();
    isFoodClick*=-1;
    if(isFoodClick == 1){
        foodMenu.style.visibility = "visible";
    }
    else {
        foodMenu.style.visibility = "hidden";
    }

});

toy.addEventListener("click", event => {

    let audio = new Audio("click.wav");
    audio.play();
    isToyClick*=-1;
    if(isToyClick == 1){
        toyMenu.style.visibility = "visible";
    }
    else {
        toyMenu.style.visibility = "hidden";
        
    }

});

upgrade.addEventListener("click", event => {

    let audio = new Audio("click.wav");
    audio.play();
    isUpgradeClick*=-1;
    if(isUpgradeClick == 1){
        upgradeMenu.style.visibility = "visible";
    }
    else {
        upgradeMenu.style.visibility = "hidden";
        
    }

});

bigMac.addEventListener("click", event => {

    let moneyAudio = new Audio("money.wav");
    let nomoneyAudio = new Audio("nomoney.wav");
    if(money>=5){
        
        moneyAudio.play();
        money-=5;
        hunger+=0.5;
               health+=0.5;
    }
    else{
        nomoneyAudio.play();
        setTimeout(() => {
            brokeMessage.style.visibility = "hidden";
    }, 200);
            brokeMessage.style.visibility = "visible";
    }
    

});

bigMacDeluxe.addEventListener("click", event => {

    let moneyAudio = new Audio("money.wav");
    let nomoneyAudio = new Audio("nomoney.wav");
    if(money>=50){
        
        moneyAudio.play();
        money-=50;
        hunger+=0.75;
               health+=1;
    }
    else{
        nomoneyAudio.play();
        setTimeout(() => {
            brokeMessage.style.visibility = "hidden";
    }, 200);
            brokeMessage.style.visibility = "visible";
    } 

});

doubleDouble.addEventListener("click", event => {

    let moneyAudio = new Audio("money.wav");
    let nomoneyAudio = new Audio("nomoney.wav");
    if(money>=250){
        
        moneyAudio.play();
        money-=250;
        hunger+=1.5;
               health+=2.5;
    }
    else{
        nomoneyAudio.play();
        setTimeout(() => {
            brokeMessage.style.visibility = "hidden";
    }, 200);
            brokeMessage.style.visibility = "visible";
    } 

});

bigMacMeal.addEventListener("click", event => {

    let moneyAudio = new Audio("money.wav");
    let nomoneyAudio = new Audio("nomoney.wav");
    if(money>=1000 && hunger<=50){
        
        moneyAudio.play();
        money-=1000;
        hunger+=50;
        
    }
    else if(money>=1000 && hunger>50){
        
        moneyAudio.play();
        money-=1000;
        hunger=100;
        health+=15;
    }
    else{
        nomoneyAudio.play();
        setTimeout(() => {
            brokeMessage.style.visibility = "hidden";
    }, 200);
            brokeMessage.style.visibility = "visible";
    } 

});

salad.addEventListener("click", event => {

    let moneyAudio = new Audio("money.wav");
    let nomoneyAudio = new Audio("nomoney.wav");
    if(money>=5000){
        
        moneyAudio.play();
        money-=5000;
        hunger=100;
        health+=25;
        
    }
    else{
        nomoneyAudio.play();
        setTimeout(() => {
            brokeMessage.style.visibility = "hidden";
    }, 200);
            brokeMessage.style.visibility = "visible";
    } 

});

lego.addEventListener("click", event => {

    let moneyAudio = new Audio("money.wav");
    let nomoneyAudio = new Audio("nomoney.wav");
    if(money>=100){
        
        moneyAudio.play();
        money-=100;
        happiness+=0.25;
        
    }
    else{
        nomoneyAudio.play();
        setTimeout(() => {
            brokeMessage.style.visibility = "hidden";
    }, 200);
            brokeMessage.style.visibility = "visible";
    } 

});

dildo.addEventListener("click", event => {

    let moneyAudio = new Audio("money.wav");
    let nomoneyAudio = new Audio("nomoney.wav");
    if(money>=500){
        
        moneyAudio.play();
        money-=500;
        happiness+=1.25;
        
    }
    else{
        nomoneyAudio.play();
        setTimeout(() => {
            brokeMessage.style.visibility = "hidden";
    }, 200);
            brokeMessage.style.visibility = "visible";
    } 

});

airsoftGun.addEventListener("click", event => {

    let moneyAudio = new Audio("money.wav");
    let nomoneyAudio = new Audio("nomoney.wav");
    if(money>=1000){
        
        moneyAudio.play();
        money-=1000;
        happiness+=5;
        
    }
    else{
        nomoneyAudio.play();
        setTimeout(() => {
            brokeMessage.style.visibility = "hidden";
    }, 200);
            brokeMessage.style.visibility = "visible";
    } 

});

buttPlug.addEventListener("click", event => {

    let moneyAudio = new Audio("money.wav");
    let nomoneyAudio = new Audio("nomoney.wav");
    if(money>=2500){
        
        moneyAudio.play();
        money-=2500;
        happiness+=10;
        
    }
    else{
        nomoneyAudio.play();
        setTimeout(() => {
            brokeMessage.style.visibility = "hidden";
    }, 200);
            brokeMessage.style.visibility = "visible";
    } 

});

vape.addEventListener("click", event => {

    let moneyAudio = new Audio("money.wav");
    let nomoneyAudio = new Audio("nomoney.wav");
    if(money>=5000){
        
        moneyAudio.play();
        money-=5000;
        happiness+=25;
        
    }
    else{
        nomoneyAudio.play();
        setTimeout(() => {
            brokeMessage.style.visibility = "hidden";
    }, 200);
            brokeMessage.style.visibility = "visible";
    } 

});

aclick.addEventListener("click", event => {

    let moneyAudio = new Audio("money.wav");
    let nomoneyAudio = new Audio("nomoney.wav");
    if(money>=500 && onAClick == false && onBClick == false && false == false && onCClick == false && onDClick == false && onEClick == false){
        
        moneyAudio.play();
        money-=500;
        multiplier=1.25;
        onAClick = true;
        aclick.innerHTML = "BOUGHT";
        
    } 
   else if (money<=500){
        nomoneyAudio.play();
        setTimeout(() => {
            brokeMessage.style.visibility = "hidden";
    }, 200);
            brokeMessage.style.visibility = "visible";
    } 
    else if (onAClick || onDClick || onCClick || onEClick || onBClick || (onAClick == false && onBClick == false && false == false && onCClick == false && onDClick == false && onEClick == false)) {
                nomoneyAudio.play();
        setTimeout(() => {
            cantBuyMessage.style.visibility = "hidden";
    }, 200);
            cantBuyMessage.style.visibility = "visible";
    } 



});

bclick.addEventListener("click", event => {

    let moneyAudio = new Audio("money.wav");
    let nomoneyAudio = new Audio("nomoney.wav");
    if(money>=2500 && onAClick == true && onBClick == false && false == false && onCClick == false && onDClick == false && onEClick == false){
        
        moneyAudio.play();
        money-=2500;
        multiplier=1.5;
        onAClick = false;
        onBClick = true;
          bclick.innerHTML = "BOUGHT";      
        
    }
    else if (onDClick || onCClick || onEClick || onBClick || (onAClick == false && onBClick == false && false == false && onCClick == false && onDClick == false && onEClick == false)) {
                nomoneyAudio.play();
        setTimeout(() => {
            cantBuyMessage.style.visibility = "hidden";
    }, 200);
            cantBuyMessage.style.visibility = "visible";
    } 

    else if (money<=2500){
        nomoneyAudio.play();
        setTimeout(() => {
            brokeMessage.style.visibility = "hidden";
    }, 200);
            brokeMessage.style.visibility = "visible";
    } 

});

cclick.addEventListener("click", event => {

    let moneyAudio = new Audio("money.wav");
    let nomoneyAudio = new Audio("nomoney.wav");
    if(money>=5000 && onAClick == false && onBClick == true && onCClick == false && onDClick == false && onEClick == false){
        
        moneyAudio.play();
        money-=5000;
        multiplier=2;
        onBClick = false;
        onCClick = true;
                cclick.innerHTML = "BOUGHT";
    }
    else if (onAClick || onDClick || onCClick || onEClick || (onAClick == false && onBClick == false && false == false && onCClick == false && onDClick == false && onEClick == false)) {
                nomoneyAudio.play();
        setTimeout(() => {
            cantBuyMessage.style.visibility = "hidden";
    }, 200);
            cantBuyMessage.style.visibility = "visible";
    } 

    else if (money<=5000){
        nomoneyAudio.play();
        setTimeout(() => {
            brokeMessage.style.visibility = "hidden";
    }, 200);
            brokeMessage.style.visibility = "visible";
    } 

});

dclick.addEventListener("click", event => {

    let moneyAudio = new Audio("money.wav");
    let nomoneyAudio = new Audio("nomoney.wav");
    if(money>=10000 && onAClick == false && onBClick == false && onCClick == true && onDClick == false && onEClick == false){
        
        moneyAudio.play();
        money-=10000;
        multiplier=4;
        onCClick = false;
        onDClick = true;
                dclick.innerHTML = "BOUGHT";
    }
    else if (onAClick || onBClick  || onEClick || onDClick || (onAClick == false && onBClick == false && false == false && onCClick == false && onDClick == false && onEClick == false)) {
                nomoneyAudio.play();
        setTimeout(() => {
            cantBuyMessage.style.visibility = "hidden";
    }, 200);
            cantBuyMessage.style.visibility = "visible";
    } 

    else if (money<=10000){
        nomoneyAudio.play();
        setTimeout(() => {
            brokeMessage.style.visibility = "hidden";
    }, 200);
            brokeMessage.style.visibility = "visible";
    } 

});

eclick.addEventListener("click", event => {

    let moneyAudio = new Audio("money.wav");
    let nomoneyAudio = new Audio("nomoney.wav");
    if(money>=15000 && onAClick == false && onBClick == false && onCClick == false && onDClick == true && onEClick == false){
        
        moneyAudio.play();
        money-=15000;
        multiplier=8;
        onDClick = false;
        onEClick = true;
                eclick.innerHTML = "BOUGHT";
    }
    else if (onAClick || onBClick || onCClick || onEClick || (onAClick == false && onBClick == false && false == false && onCClick == false && onDClick == false && onEClick == false)) {
                nomoneyAudio.play();
        setTimeout(() => {
            cantBuyMessage.style.visibility = "hidden";
    }, 200);
            cantBuyMessage.style.visibility = "visible";
    } 

    else if (money<=15000){
        nomoneyAudio.play();
        setTimeout(() => {
            brokeMessage.style.visibility = "hidden";
    }, 200);
            brokeMessage.style.visibility = "visible";
    } 

});
setInterval(aging, 30000);
setInterval(checkHealth, 50);
setInterval(doHunger, 7500);