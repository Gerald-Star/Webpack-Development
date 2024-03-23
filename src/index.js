import generateJoke from "./generateJoke";
import './styles/main.scss' // configure the loaders in our webpack config
import laptop from './assets/laptop.png'

const laptopImg = document.getElementById('laptopImg')
laptopImg.src = laptop

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

//console.log(generateJoke())
generateJoke()