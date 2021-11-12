const burgerButton = document.getElementById('burgerButton');
const list  = document.getElementsByClassName('header__nav')[0];
list.style.left = '-100%';
let count = 1;
burgerButton.onclick = ()=>{
    console.log(count);
    if(count%2==1){
        list.style.left = '0';
        burgerButton.classList.add('active');
    }
    else{
        list.style.left='-100%';
        burgerButton.classList.remove('active');
    }   
    count++;
}
let menuLinks=document.querySelectorAll('.menu__item[data-goto]');
if(menuLinks.length>0){
    menuLinks.forEach (menuLinks=>{
        menuLinks.addEventListener('click',onMenuClick)
    })
    function onMenuClick (e){
        console.log('eee');
        if(count%2==0){
            console.log('aaa');
            list.style.left='-100%';
            burgerButton.classList.remove('active');
            count++;
        }
        const menuLink = e.target;
        if(menuLink.dataset.goto&&document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top+pageYOffset-document.querySelector('header').offsetHeight;
            window.scrollTo({
                top:gotoBlockValue,
                behavior:'smooth'
            })
            
            e.preventDefault();
        }
    }
}
///form///////////////////////

const form = document.forms[0];
const email = form.emailInput;
const name = form.nameInput;
const message = form.messageInput;

addEventListener ('submit',(event)=>{
    if(checkEmail(email)&&checkname(name)&&checkMessage(message)){
        return true;
    }
    event.preventDefault();
})


function checkEmail (el){
    if (typeof el.value=='string'){
        if(el.value.split(['@']).length>1&&el.value.split(['.']).length>1){
            if(el.value.length>8){
                return true;
            }
        }
    }
    alert("enter the correct email")
    return false;
}
function checkname (el){
    if (typeof el.value=='string'){
        if(el.value.length<30&&el.value.length>4&& el.value.split([' ']).length>1){
            return true;
        }
    }
    alert("enter the correct name")
    return false;
}
function checkMessage(el){
    if (typeof el.value=='string'){
        if(el.value.length>0){
            return true;
        }
    }
    return false;
}