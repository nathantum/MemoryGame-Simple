document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'blank',
            img: 'images/blank.png'
        },
        {
            name: 'doggie',
            img: 'image/doggie.png'
        },
        {
            name: 'froggie',
            img: 'images/froggi.png'
        },
        {
            name: 'green',
            img: 'images/green.png'
        },
        {
            name: 'mad',
            img: 'images/mad.png'
        },
        {
            name: 'panda',
            img: 'images/panda.png'
        },
        {
            name:'spoong',
            img: 'images/spoong.png'
        },
        {
            name: 'white',
            img: 'images/white.png'
        },
        {
            name: 'black',
            img: 'images/black.png'
        },
        {
            name: 'facebook',
            img: 'images/facebook.png'
        },
        {
            name: 'pokemon',
            img: 'images/pokemon.png'
        },
        {
            name: 'ball',
            img: 'images/ball.png'
        },

       

    ]

cardArray.sort(() => 0.5 - Math.random())
// create a grid
const grid = document.querySelector('.grid')
const resultsDisplay = document.querySelector('#result')

var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

// create your board
function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}
// check for matches
function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        alert('You have clicked the same image!!')
    }
    else if(cardsChosen[0] === cardsChosen[1]){
        alert('You have found a match !!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }


    else{
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry, try again:( :(')
    }
    cardsChosen = []
    cardsChosenId = []
    resultsDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardsArray.length/2){
        resultsDisplay.textContent = 'Congratulations!! You found them all!!'
    }
}

// flip your card
function flipCard(){
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen === 2 ){
        setTimeout(checkForMatch, 500)
    }
}



createBoard()
}
)



