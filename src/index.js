import generateJoke from "./generateJoke";
import './styles/main.scss' // configure the loaders in our webpack config
import laptop from './assets/laptop.png'

const laptopImg = document.getElementById('laptopImg')
laptopImg.src = laptop
console.log(generateJoke())