const payform=document.getElementById('pay-form')
const cardnum=document.getElementById('card-number')
const cardnumberview=document.getElementById('card-number-view')
const cardholderview=document.getElementById('card-holder-view')
const cardexpiryview=document.getElementById('card-expiry-view')
const cardcvvfront=document.getElementById('card-cvv-front')
const card=document.getElementById('card-holder')
let cardexpi=document.getElementById('card-expiry')
const cardcv=document.getElementById('card-cvv')
const msgnumber=document.getElementById('msg-number')
const fieldnumber=document.getElementById('field-number')
const msgholder=document.getElementById('msg-holder')
const fieldholder=document.getElementById('field-holder')
const msgexpiry=document.getElementById('msg-expiry')
const fieldexpiry=document.getElementById('field-expiry')
const msgcvv=document.getElementById('msg-cvv')
const fieldcvv=document.getElementById('field-cvv')
const paybtn=document.getElementById('pay-btn')
const inp=document.querySelectorAll('input')
const paystatus=document.getElementById('pay-status')
const paylabel=document.getElementById('pay-label')
const result=document.getElementById('overlay')
const successcard=document.getElementById('success-card')
const successdate=document.getElementById('success-date')
const cardscene=document.getElementById('card-scene')

console.log(inp);

const themetoggle=document.getElementById('theme-toggle')

themetoggle.addEventListener('click',()=>{
  document.documentElement.classList.toggle('light')
})

let array=[]
// const cardnumber=document.getElementById('card-number')
// cardnumber.addEventListener('input', () => {
//     console.log(cardnumber.value);
// });
let a=4
let cardnumber


payform.addEventListener('input',(e)=>{
let cardnumber=e.target.closest('#card-number')
let cardholder=e.target.closest('#card-holder')
let cardexpiry=e.target.closest('#card-expiry')
let cardcvv=e.target.closest('#card-cvv')
// console.log(cardnumber);
if(cardnumber){
    cardnumber.value=cardnumber.value.replace(/[^\d ]/g, '')
    fieldnumber.classList.add('is-on')

    cardnumber.classList.add('is-invalid')
    cardnumber.nextElementSibling.classList.add('is-bad')
    msgnumber.classList.add('is-show','tone-bad')
    msgnumber.textContent='Invalid card number'
    // console.log(cardnumber.value.length);
    // console.log(cardnumber.value.length);
    
    
    if(cardnumber.value.length == 4 || cardnumber.value.length==10||cardnumber.value.length==16 && !cardnumber.value.endsWith("  ")){
        cardnumber.value+='  '
          
      
    }
    if(cardnumber.value.length == 22){
      cardnumber.classList.remove('is-invalid')
      cardnumber.classList.add('is-valid')
      cardnumber.nextElementSibling.classList.remove('is-bad')
      // fieldnumber.classList.remove('is-on')
      msgnumber.textContent='Valid card number'
      msgnumber.classList.remove('tone-bad')
      msgnumber.classList.add('tone-ok')
      cardnumber.nextElementSibling.classList.add('is-ok')
    
        
        card.focus()
    }else{
      
    }
    cardnumberview.textContent=cardnumber.value
  // console.log(card);

}
///////////card holder//////////////////////
if(cardholder){
  cardholder.value=cardholder.value.replace(/[^\p{L} ]/gu, '')
  fieldholder.classList.add('is-on')
  
  cardholder.classList.add('is-invalid')
  msgholder.classList.add('is-show','tone-pending')
  msgholder.classList.remove('tone-ok')
  cardholder.nextElementSibling.classList.remove('is-ok')
  msgholder.textContent='Card details incomplete'
  cardholder.nextElementSibling.classList.add('is-pending')


  if(cardholder.value.length >= 3){
    // fieldholder.classList.remove('is-on')
    cardholder.classList.remove('is-invalid')
    cardholder.classList.add('is-valid')
      cardholder.nextElementSibling.classList.remove('is-pending')
        cardholder.nextElementSibling.classList.add('is-ok')
        msgholder.classList.remove('tone-pending')
        msgholder.classList.add('tone-ok')
        msgholder.textContent='Looks good'
  }
  cardholderview.textContent=cardholder.value
}

///////////////////////////cardexpiry//////////////////
if(cardexpiry){
cardexpiry.value=cardexpiry.value.replace(/[^\d/]/g, '')
fieldexpiry.classList.add('is-on')
cardexpiry.nextElementSibling.classList.add('is-pending')
cardexpiry.nextElementSibling.classList.remove('is-ok')
cardexpiry.classList.add('is-invalid')
msgexpiry.classList.add('is-show','tone-pending')
msgexpiry.classList.remove('tone-ok')
msgexpiry.textContent='Card details incomplete'
if(cardexpiry.value.length==2 && e.inputType !== 'deleteContentBackward'){
    cardexpiry.value += '/'
}
 cardexpiryview.textContent=cardexpiry.value
 if(cardexpiry.value.length == 5){
  cardexpiry.classList.remove('is-invalid')
  cardexpiry.classList.add('is-valid')
  cardexpiry.nextElementSibling.classList.remove('is-pending')
  cardexpiry.nextElementSibling.classList.add('is-ok')
  msgexpiry.classList.remove('tone-pending')
  msgexpiry.classList.add('tone-ok')
  msgexpiry.textContent='valid'
  cardcv.focus()
 }
 
}

//////////////////////cardcvv/////////////
if(cardcvv){
  cardcvv.value=cardcvv.value.replace(/[^\d ]/g, '')
  cardcvv.classList.add('is-invalid')
  fieldcvv.classList.add('is-on')
  cardcvv.nextElementSibling.classList.add('is-pending')
  cardcvv.nextElementSibling.classList.remove('is-ok')
  msgcvv.classList.add('is-show','tone-pending')
  msgcvv.classList.remove('tone-ok')
  msgcvv.textContent='Card details incomplete'

  if(cardcvv.value.length ===4){
    cardcvv.classList.remove('is-invalid')
    cardcvv.classList.add('is-valid')
    cardcvv.nextElementSibling.classList.remove('is-pending')
  cardcvv.nextElementSibling.classList.add('is-ok')
  
  msgcvv.classList.remove('tone-pending')
  msgcvv.classList.add('tone-ok')

  msgcvv.textContent='valid'
  }
  cardcvvfront.textContent=cardcvv.value
}





})
payform.addEventListener("keydown", (e) => {

  if (e.key === "Backspace") {

    if (cardnumber.value.endsWith("  ")) {
      cardnumber.value = cardnumber.value.slice(0, -2);
      
    }
    
}
})
card.addEventListener('keydown',(e)=>{
  if(e.key==='Enter'){
    e.preventDefault()
    cardexpi.focus()
  }
})
// console.log(paybtn);

paybtn.addEventListener('click', (e) => {
  e.preventDefault();

  let isvalid = true;

  inp.forEach((input) => {
    if (input.classList.contains('is-invalid') || input.value.length == 0) {
      isvalid = false;
    }
  });

  if (!isvalid) {
    paybtn.classList.add('is-error');
    paystatus.classList.add('is-show', 'is-error');
    paystatus.textContent = 'Please review the highlighted fields.';

    setTimeout(() => {
      paybtn.classList.remove('is-error');
    }, 2000);

  } else {
    paybtn.classList.add('is-success');
    paylabel.textContent = 'Paid';

  
    successcard.textContent = '.... ' + cardnum.value.slice(-4);

    
    let date = new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    successdate.textContent = date;

    setTimeout(() => {
      result.classList.add('is-open');
    }, 500);
  }
});

