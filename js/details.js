let url = 'http://localhost:3000/posts'

async function post1(){
  try{
    let response = await fetch(`${url}/31241`)
    let result = await response.json()
    let str = ''
        str+=`
        <div class="img">
                    <img src="${result.img}" alt="">
                </div>
                <div class="detail__content">
                    <h3>${result.author}</h3>
                    <div class="date">
                        <p>Posted on ${result.date}</p>
                    </div>
                    <h2>${result.title}</h2>
                    <h4>${result.category}</h4>
                    <p>${result.description}</p>
                </div>
        `
    document.querySelector('.detail__wrapper').innerHTML = str
  }catch(err){
    console.log(err);
  }
}
post1()

async function post2(){
  try{
    let response = await fetch(`${url}/42353`)
    let result = await response.json()
    let str = ''
        str+=`
        <div class="img">
                    <img src="${result.img}" alt="">
                </div>
                <div class="detail__content">
                    <h3>${result.author}</h3>
                    <div class="date">
                        <p>Posted on ${result.date}</p>
                    </div>
                    <h2>${result.title}</h2>
                    <h4>${result.category}</h4>
                    <p>${result.description}</p>
                </div>
        `
    document.querySelector('.detail__wrapper').innerHTML = str
  }catch(err){
    console.log(err);
  }
}
// post2()

async function post3(){
  try{
    let response = await fetch(`${url}/95555`)
    let result = await response.json()
    let str = ''
        str+=`
        <div class="img">
                    <img src="${result.img}" alt="">
                </div>
                <div class="detail__content">
                    <h3>${result.author}</h3>
                    <div class="date">
                        <p>Posted on ${result.date}</p>
                    </div>
                    <h2>${result.title}</h2>
                    <h4>${result.category}</h4>
                    <p>${result.description}</p>
                </div>
        `
    document.querySelector('.detail__wrapper').innerHTML = str
  }catch(err){
    console.log(err);
  }
}
// post3()

async function post4(){
  try{
    let response = await fetch(`${url}/84583`)
    let result = await response.json()
    let str = ''
        str+=`
        <div class="img">
                    <img src="${result.img}" alt="">
                </div>
                <div class="detail__content">
                    <h3>${result.author}</h3>
                    <div class="date">
                        <p>Posted on ${result.date}</p>
                    </div>
                    <h2>${result.title}</h2>
                    <h4>${result.category}</h4>
                    <p>${result.description}</p>
                </div>
        `
    document.querySelector('.detail__wrapper').innerHTML = str
  }catch(err){
    console.log(err);
  }
}
// post4()

async function post5(){
  try{
    let response = await fetch(`${url}/27929`)
    let result = await response.json()
    let str = ''
        str+=`
        <div class="img">
                    <img src="${result.img}" alt="">
                </div>
                <div class="detail__content">
                    <h3>${result.author}</h3>
                    <div class="date">
                        <p>Posted on ${result.date}</p>
                    </div>
                    <h2>${result.title}</h2>
                    <h4>${result.category}</h4>
                    <p>${result.description}</p>
                </div>
        `
    document.querySelector('.detail__wrapper').innerHTML = str
  }catch(err){
    console.log(err);
  }
}
// post5()

async function post6(){
  try{
    let response = await fetch(`${url}/19943`)
    let result = await response.json()
    let str = ''
        str+=`
        <div class="img">
                    <img src="${result.img}" alt="">
                </div>
                <div class="detail__content">
                    <h3>${result.author}</h3>
                    <div class="date">
                        <p>Posted on ${result.date}</p>
                    </div>
                    <h2>${result.title}</h2>
                    <h4>${result.category}</h4>
                    <p>${result.description}</p>
                </div>
        `
    document.querySelector('.detail__wrapper').innerHTML = str
  }catch(err){
    console.log(err);
  }
}
// post6()

async function post7(){
  try{
    let response = await fetch(`${url}/93626`)
    let result = await response.json()
    let str = ''
        str+=`
        <div class="img">
                    <img src="${result.img}" alt="">
                </div>
                <div class="detail__content">
                    <h3>${result.author}</h3>
                    <div class="date">
                        <p>Posted on ${result.date}</p>
                    </div>
                    <h2>${result.title}</h2>
                    <h4>${result.category}</h4>
                    <p>${result.description}</p>
                </div>
        `
    document.querySelector('.detail__wrapper').innerHTML = str
  }catch(err){
    console.log(err);
  }
}
// post7()

async function post8(){
    try{
      let response = await fetch(`${url}/42034`)
      let result = await response.json()
      let str = ''
          str+=`
          <div class="img">
                      <img src="${result.img}" alt="">
                  </div>
                  <div class="detail__content">
                      <h3>${result.author}</h3>
                      <div class="date">
                          <p>Posted on ${result.date}</p>
                      </div>
                      <h2>${result.title}</h2>
                      <h4>${result.category}</h4>
                      <p>${result.description}</p>
                  </div>
          `
      document.querySelector('.detail__wrapper').innerHTML = str
    }catch(err){
      console.log(err);
    }
  }
  // post8()

  async function post9(){
    try{
      let response = await fetch(`${url}/73294`)
      let result = await response.json()
      let str = ''
          str+=`
          <div class="img">
                      <img src="${result.img}" alt="">
                  </div>
                  <div class="detail__content">
                      <h3>${result.author}</h3>
                      <div class="date">
                          <p>Posted on ${result.date}</p>
                      </div>
                      <h2>${result.title}</h2>
                      <h4>${result.category}</h4>
                      <p>${result.description}</p>
                  </div>
          `
      document.querySelector('.detail__wrapper').innerHTML = str
    }catch(err){
      console.log(err);
    }
  }
  // post9()

  async function post10(){
    try{
      let response = await fetch(`${url}/97324`)
      let result = await response.json()
      let str = ''
          str+=`
          <div class="img">
                      <img src="${result.img}" alt="">
                  </div>
                  <div class="detail__content">
                      <h3>${result.author}</h3>
                      <div class="date">
                          <p>Posted on ${result.date}</p>
                      </div>
                      <h2>${result.title}</h2>
                      <h4>${result.category}</h4>
                      <p>${result.description}</p>
                  </div>
          `
      document.querySelector('.detail__wrapper').innerHTML = str
    }catch(err){
      console.log(err);
    }
  }
  // post10()