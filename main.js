async function getImages() {
  const baseUrl = 'https://api.github.com'
  const userName = 'matheusteodoro01'
  const acessToken= 'Bearer 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'
  const repoImages = 'photos' 
  const repoPath = '/images'
  const path = 'repos'
  const url =  `${baseUrl}/${path}/${userName}/${repoImages}/contents${repoPath}`
  try {
    const res = await fetch(url,{
      headers: {
        'Authorization': acessToken
      },
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}


function getRadomImage(imagesPath) {
  const baseUrl = 'https://github.com'
  const userName = 'matheusteodoro01'
  const repoImages = 'photos' 
  const repoPath = 'images'
  const imagesSrc = imagesPath?.map(image=>{
    return `${baseUrl}/${userName}/${repoImages}/blob/master/${image.path}?raw=true`
  })
  return imagesSrc
}


const div = document.getElementsByClassName('home')
const button = document.querySelector('button')
const p = document.querySelector('p')

async function renderDogs() {
  const images = await getImages()
  const paths = getRadomImage(images)
  var image = []
  image = new Image()
 image.src = paths[0]
  image.width = '600'
  image.height = '500'
  document.getElementById('img')
  document.body.appendChild(image)
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
