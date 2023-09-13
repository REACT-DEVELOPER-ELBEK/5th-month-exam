// const axios = require("axios");

let url = 'http://localhost:3000/posts'

async function showPosts(){
  try{
    let response = await fetch(url)
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
    document.querySelector('.all__posts__card').innerHTML = str
  }catch(err){
    console.log(err);
  }
}
showPosts()

let search = document.querySelector('#all-posts-search')

// search.addEventListener('keyup', )

// localStorage.setItem('displayCategory', allFunc.toString())