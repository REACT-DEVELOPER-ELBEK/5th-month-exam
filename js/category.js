let url = 'http://localhost:3000/posts'

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
// business()

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
// startup()

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
// economy()

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
// technlogy()

// let arr1 = [].pop(business())
// let arr2 = [].pop(startup())
// let arr3 = [].pop(economy())
// let arr4 = [].pop(technlogy())

function arr(category){
  [].pop(category())
}
arr(business)
// import{c1, c2, c3, c4} from "./home.js"
// console.log(c1);
// console.log(c2);
// console.log(c3);
// console.log(c4);
// c1.addEventListener('click', arr(business))
// c2.addEventListener('click', arr(startup))
// c3.addEventListener('click', arr(economy))
// c4.addEventListener('click', arr(technlogy))

// let search = document.querySelector('#all-posts-search').value
// search.addEventListener('keyup', )

async function search(val){
  try{
    let response = await fetch(`${url}?q=${val}`)
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
search('need')