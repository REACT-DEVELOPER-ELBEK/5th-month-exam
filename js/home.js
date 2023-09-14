let hero = document.querySelector('.hero')
let heroContent = document.querySelector('.hero__wrapper')
let latestPosts = document.querySelector('.last__cards')

const url = 'http://localhost:3000/posts'
// fetch(`http://localhost:3000/users?_page=&{page}&_limit={limit}`);


async function getInfo(){
    try{
        let response = await fetch(url)
        let res = await response.json()
        let lastImg = res.pop().img
        hero.style.backgroundImage = `url(${lastImg})`
        let lastThree = res.slice(-3)
        console.log(lastThree);
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


