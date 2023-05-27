let mainElement = document.querySelector('main')

function vClose() {
    let button = event.currentTarget;
    let cardDiv = button.parentNode;    
  
    let newCard = cardDiv.cloneNode(true);
    mainElement.appendChild(newCard);    
    let vCloseButton = newCard.querySelector('#vClose')
    vCloseButton.style.display = 'none'
    newCard.style.backgroundColor = 'red'
    newCard.style.cursor = 'move'
  }

  function adicionarCardMenu(){
    let cardMenu = document.getElementById('cardMenu');
    cardMenu.classList.remove('hide');
  }