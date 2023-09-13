const url = 'http://localhost:3000/posts'
// fetch(`http://localhost:3000/users?_page=&{page}&_limit={limit}`);


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
business()
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
startup()
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
economy()
async function technlogogy(){
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
technlogogy()