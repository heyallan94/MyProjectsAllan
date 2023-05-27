let mainElement = document.querySelector('main')

function vClose() {
    let button = event.currentTarget;
    let cardDiv = button.parentNode;    
    let cardMenu = document.getElementById('cardMenu');
    let newCard = cardDiv.cloneNode(true);
    mainElement.appendChild(newCard);    
    let vCloseButton = newCard.querySelector('#vClose')
    vCloseButton.style.display = 'none'
    newCard.style.backgroundColor = 'red'
    newCard.style.cursor = 'move'
    cardMenu.classList.add('hide')

  }

  function adicionarCardMenu(){
    let inputName = document.getElementById('inputName').value.trim()
    let cardName = document.getElementById('card-name')
    let cardMenu = document.getElementById('cardMenu');
    let imgCard = document.getElementById('imgCard')
    let regex = /^[A-Za-z]+$/

    if (inputName !== '' && regex.test(inputName)) {
        fetch('https://pokeapi.co/api/v2/pokemon/'+ inputName.toLowerCase())
        .then(response => response.json())
        .then(data => {
        console.log(data);
        let dataNameTreatedFirst = data.name.charAt(0).toUpperCase()
        let dataNameTreatedRest = data.name.slice(1)
        imgCard.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png'
        cardName.textContent = dataNameTreatedFirst + dataNameTreatedRest

        if(data.types[0].type.name === 'fire'){
            cardMenu.style.borderColor = 'red'
        }
    })
        .catch(error => {
        console.log('Ocorreu um erro:', error);
    });

        cardName.textContent = inputName;
        cardMenu.classList.remove('hide')
      } else {
        alert('Por favor, insira uma frase válida (sem espaços ou números).');
      }
    
  }