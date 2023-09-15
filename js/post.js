let url = 'http://localhost:3000/posts'
async function postDetail(id){
    try{
      let response = await fetch(`${url}/${id}`)
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
      document.querySelector('.post__detail').innerHTML = str
    }catch(err){
      console.log(err);
    }
  }
  let id = localStorage.getItem('postId')
  postDetail(id)
