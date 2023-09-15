let url = 'http://localhost:3000/posts'

async function showPosts(page, limit){
  try{
    let response = await fetch(`${url}?_page=${page}&_limit=${limit}`)
    let result = await response.json()
    let str = ''
    result.map((item) => {
        str+=`
        <a onclick="goPost(${item.id})" href="../pages/post.html">
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
    parent.innerHTML = str
  }catch(err){
    console.log(err);
  }
}
let parent = document.querySelector('.all__posts__card')
showPosts(1, 5)

document.querySelector('#arr1').addEventListener('click', ()=>{
  parent.innerHTML = showPosts(1, 5)
})

document.querySelector('#arr-left').addEventListener('click', ()=>{
  parent.innerHTML = showPosts(1, 5)
})

document.querySelector('#arr2').addEventListener('click', ()=>{
  parent.innerHTML = showPosts(2, 5)
})

document.querySelector('#arr-right').addEventListener('click', ()=>{
  parent.innerHTML = showPosts(2, 5)
})