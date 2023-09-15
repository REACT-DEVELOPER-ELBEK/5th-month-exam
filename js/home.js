let hero = document.querySelector('.hero')
let heroContent = document.querySelector('.hero__wrapper')
let latestPosts = document.querySelector('.last__cards')

let url = 'http://localhost:3000/posts'
// fetch(`http://localhost:3000/users?_page=&{page}&_limit={limit}`);


async function getInfo(){
    try{
        let response = await fetch(url)
        let res = await response.json()
        let lastImg = res.pop().img
        hero.style.backgroundImage = `url(${lastImg})`
        let lastThree = res.slice(-3)
        let str = ''
        lastThree.map((item) =>{
            str+=`
            <div class="last__item">
            <img src= '${item.img}' alt="">
            <div class="card__info">
              <div class="last__card-content">
              <p><span>By</span> ${item.author}   |</p>
              <p>Aug 23, 2021</p>
            </div>
            <h2>${item.title}: </h2>
            <p>${item.description}</p>
            </div>
          </div>
            `
        })
        latestPosts.innerHTML = str

    }catch(err){
        console.log(err);
    }
}
getInfo()


async function business(){
  try{
    let response = await fetch(`${url}?q=business`)
    let result = await response.json()
    console.log(result);
    let str = ''
    result.map((item) => {
        str+=`
        <a href="#">
        <div class="card">
        <div class="img"><img src='${item.img}' alt="" width: 547.295px;
        height: 318px;></div>
        <div class="card__content">
          <h3>${item.category}</h3>
          <h2>${item.title}</h2>
          <p>${item.description}</p>
        </div>
      </div>
      </a>
        `
    })
    document.querySelector('.cards').innerHTML = str
  }catch(err){
    console.log(err);
  }
}

async function startup(){
  try{
    let response = await fetch(`${url}?q=startup`)
    let result = await response.json()
    console.log(result);
    let str = ''
    result.map((item) => {
        str+=`
        <a href="#">
        <div class="card">
        <div class="img"><img src='${item.img}' alt="" width: 547.295px;
        height: 318px;></div>
        <div class="card__content">
          <h3>${item.category}</h3>
          <h2>${item.title}</h2>
          <p>${item.description}</p>
        </div>
      </div>
      </a>
        `
    })
    document.querySelector('.cards').innerHTML = str
  }catch(err){
    console.log(err);
  }
}

async function economy(){
  try{
    let response = await fetch(`${url}?q=economy`)
    let result = await response.json()
    console.log(result);
    let str = ''
    result.map((item) => {
        str+=`
        <a href="#">
        <div class="card">
        <div class="img"><img src='${item.img}' alt="" width: 547.295px;
        height: 318px;></div>
        <div class="card__content">
          <h3>${item.category}</h3>
          <h2>${item.title}</h2>
          <p>${item.description}</p>
        </div>
      </div>
      </a>
        `
    })
    document.querySelector('.cards').innerHTML = str
  }catch(err){
    console.log(err);
  }
}

async function technlogy(){
  try{
    let response = await fetch(`${url}?q=technology`)
    let result = await response.json()
    console.log(result)
    let str = ''
    result.map((item) => {
        str+=`
        <a href="#">
        <div class="card">
        <div class="img"><img src='${item.img}' alt="" width: 547.295px;
        height: 318px;></div>
        <div class="card__content">
          <h3>${item.category}</h3>
          <h2>${item.title}</h2>
          <p>${item.description}</p>
        </div>
      </div>
      </a>
        `
    })
    document.querySelector('.cards').innerHTML = str
  }catch(err){
    console.log(err);
  }
}

function arr(category){
  [].pop(category())
}

document.querySelector('#i1').addEventListener('click', ()=>{
  document.querySelector('.hero').style.display = 'none'
  document.querySelector('.last').style.display = 'none'
  document.querySelector('.category').style.display = 'none'
  document.querySelector('.modal__window').style.display = 'block'
  arr(business)
})

document.querySelector('#i2').addEventListener('click', ()=>{
  document.querySelector('.hero').style.display = 'none'
  document.querySelector('.last').style.display = 'none'
  document.querySelector('.category').style.display = 'none'
  document.querySelector('.modal__window').style.display = 'block'
  arr(startup)
  document.querySelector('.modal__title').innerHTML = 'Startup'
  document.querySelector('#modal-link-cur').innerHTML = 'Startup'
})

document.querySelector('#i3').addEventListener('click', ()=>{
  document.querySelector('.hero').style.display = 'none'
  document.querySelector('.last').style.display = 'none'
  document.querySelector('.category').style.display = 'none'
  document.querySelector('.modal__window').style.display = 'block'
  arr(economy)
  document.querySelector('.modal__title').innerHTML = 'Economy'
  document.querySelector('#modal-link-cur').innerHTML = 'economy'
})

document.querySelector('#i4').addEventListener('click', ()=>{
  document.querySelector('.hero').style.display = 'none'
  document.querySelector('.last').style.display = 'none'
  document.querySelector('.category').style.display = 'none'
  document.querySelector('.modal__window').style.display = 'block'
  arr(technlogy)
  document.querySelector('.modal__title').innerHTML = 'Technology'
  document.querySelector('#modal-link-cur').innerHTML = 'Technology'
})

document.querySelector('.modal__back').addEventListener('click', ()=>{
  location.reload()
})