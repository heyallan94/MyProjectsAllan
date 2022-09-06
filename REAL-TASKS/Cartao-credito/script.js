const cardnumber = document.querySelector('#cardnumber')
const cardname = document.querySelector('#cardname')
const cardvalid = document.querySelector('#cardvalid')
const cardcvv = document.querySelector('#cardcvv')
const hide = document.querySelector('#hide')
const line1 = document.querySelector('.line-1')
const line2 = document.querySelector('.line-2')
const line3 = document.querySelector('.line-3')
const line4 = document.querySelector('.line-4')
const send = document.querySelector('#send')
let count = 0

function line1f() {
  cardnumber.textContent = line1.value

  if( line1.value.length === 4 || line1.value.length === 9 || line1.value.length === 14){
      line1.value += " "
  }
}

function line2f() {
  cardname.textContent = line2.value
}  

function line3f() {
  cardvalid.textContent = line3.value
  if( line3.value.length === 2){
      line3.value += "/"
  }
}

function hidef(){
 const card1 = cardnumber.textContent
 const card2 = cardname.textContent
 const card3 = cardvalid.textContent
 const card4 = cardcvv.textContent

 count = count +1

 if( count % 2){
  line1.style.background = 'black'
  line2.style.background = 'black'
  line3.style.background = 'black'
  line4.style.background = 'black'
    
  if(card1.length > 4 && card1.length <= 9){
    cardnumber.textContent = card1.replace(card1[0] , '*').replace(card1[1] , '*').replace(card1[2] , '*').replace(card1[3] , '*')
  }else if(card1.length >= 10 && card1.length <= 14){
    cardnumber.textContent = card1.replace(card1[0] , '*').replace(card1[1] , '*').replace(card1[2] , '*').replace(card1[3] , '*').replace(card1[5] , '*').replace(card1[6] , '*').replace(card1[7] , '*').replace(card1[8] , '*')
  }else if(card1.length >= 15 && card1.length <= 19){
    cardnumber.textContent = card1.replace(card1[0] , '*').replace(card1[1] , '*').replace(card1[2] , '*').replace(card1[3] , '*').replace(card1[5] , '*').replace(card1[6] , '*').replace(card1[7] , '*').replace(card1[8] , '*').replace(card1[10] , '*').replace(card1[11] , '*').replace(card1[12] , '*').replace(card1[13] , '*')  
  }

  if (card2.length >0 ){
    cardname.textContent = card2.replace(card2, "*************")
  }
  
  if(card3.length > 0){
    cardvalid.textContent = card3.replace(card3,'**/****' )
  }

  if(card4.length > 0){
    cardcvv.textContent = card4.replace(card4,'***' )
  }

  }else{
    line1.style.background = 'white'
    line2.style.background = 'white'
    line3.style.background = 'white'
    line4.style.background = 'white'
    cardnumber.textContent = line1.value
    cardname.textContent = line2.value
    cardvalid.textContent = line3.value
    cardcvv.textContent = line4.value
 }
}

function line4f() {
  cardcvv.textContent = line4.value
}  

function sending(){
  alert('Allan said: "Hi"')
  location.href = 'https://www.linkedin.com/in/allan-santos-400440238/'
}
  

