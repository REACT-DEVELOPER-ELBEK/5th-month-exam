const url = 'http://localhost:3000/users'
// const axios = require('axios'); 
// fetch(`http://localhost:3000/users?_page=&{page}&_limit={limit}`);


async function e(){
    try{
        let response = await fetch(url)
        let res = await response.json()
        console.log(res);
    }catch(err){
        console.log(err);
    }
}

e()