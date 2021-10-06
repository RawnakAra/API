const img1 = document.querySelector('#img_home'),
       btn =document.querySelector('.btn'),
       number = document.querySelector('.number');
    
const getDogPic =async()=>{
    img1.innerHTML=''
    for(let i= 0 ; i<number.value ; i++){
        const url = await (await fetch('https://dog.ceo/api/breeds/image/random')).json()
        creatImge(url.message)     
}
}
function creatImge (img){
    img1.innerHTML += `<img src='${img}' width='200px' height='200px'></img>`
}

btn.addEventListener('click',getDogPic)