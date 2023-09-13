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

// async function business(){
//   try{
//     let response = await fetch(`${url}?q=business`)
//     let result = await response.json()
//     console.log(result);
//     let str = ''
//     result.map((item) => {
//         str+=`
//         <a href="#">
//         <div class="card">
//         <div class="img"><img src='${item.img}' alt="" width: 547.295px;
//         height: 318px;></div>
//         <div class="card__content">
//           <h3>${item.category}</h3>
//           <h2>${item.title}</h2>
//           <p>${item.description}</p>
//         </div>
//       </div>
//       </a>
//         `
//     })
//     document.querySelector('.cards').innerHTML = str
//   }catch(err){
//     console.log(err);
//   }
// }
// business()
// async function startup(){
//   try{
//     let response = await fetch(`${url}?q=startup`)
//     let result = await response.json()
//     console.log(result);
//     let str = ''
//     result.map((item) => {
//         str+=`
//         <a href="#">
//         <div class="card">
//         <div class="img"><img src='${item.img}' alt="" width: 547.295px;
//         height: 318px;></div>
//         <div class="card__content">
//           <h3>${item.category}</h3>
//           <h2>${item.title}</h2>
//           <p>${item.description}</p>
//         </div>
//       </div>
//       </a>
//         `
//     })
//     document.querySelector('.cards').innerHTML = str
//   }catch(err){
//     console.log(err);
//   }
// }
// startup()
// async function economy(){
//   try{
//     let response = await fetch(`${url}?q=economy`)
//     let result = await response.json()
//     console.log(result);
//     let str = ''
//     result.map((item) => {
//         str+=`
//         <a href="#">
//         <div class="card">
//         <div class="img"><img src='${item.img}' alt="" width: 547.295px;
//         height: 318px;></div>
//         <div class="card__content">
//           <h3>${item.category}</h3>
//           <h2>${item.title}</h2>
//           <p>${item.description}</p>
//         </div>
//       </div>
//       </a>
//         `
//     })
//     document.querySelector('.cards').innerHTML = str
//   }catch(err){
//     console.log(err);
//   }
// }
// economy()


// async function technlogogy(){
//   try{
//     let response = await fetch(`${url}?q=technology`)
//     let result = await response.json()
//     console.log(result)
//     let str = ''
//     result.map((item) => {
//         str+=`
//         <a href="#">
//         <div class="card">
//         <div class="img"><img src='${item.img}' alt="" width: 547.295px;
//         height: 318px;></div>
//         <div class="card__content">
//           <h3>${item.category}</h3>
//           <h2>${item.title}</h2>
//           <p>${item.description}</p>
//         </div>
//       </div>
//       </a>
//         `
//     })
//     document.querySelector('.cards').innerHTML = str
//   }catch(err){
//     console.log(err);
//   }
// }
// technlogogy()