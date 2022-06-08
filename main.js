async function getRandomDogs() {
  let url = 'https://dog.ceo/api/breeds/image/random'
  try {
    let res = await fetch(url)
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}


const div = document.getElementsByClassName('home')
const button = document.querySelector('button')
const p = document.querySelector('p')

async function renderDogs() {
  let dogs = './images/1.jpg'
  var dog = []
  dog = new Image()
  dog.src = dogs
  dog.width = '600'
  dog.height = '500'
  var images = document.getElementById('img')
  document.body.appendChild(dog)
  console.log(dog)
}

var count = 0

button.addEventListener('click', function () {
  count++
  if (count <= 1) {
    p.innerText = `Eba!! ${count} fotinha nossa :)`
  } else if (count <= 9) {
    p.innerText = `EEE!! agora são ${count} fotos :)`
  } else p.innerText = `Já foram ${count} fotos!! Vc não cansa não?`
})
