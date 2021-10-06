const img = document.querySelector('#img_home'),
       btn =document.querySelector('.btn');
const getDogPic =async()=>{
        const url = await (await fetch('https://dog.ceo/api/breeds/image/random')).json()
        creatImge(url.message) 
}
function creatImge (img){
    document.querySelector('#img_home').innerHTML += `<img src='${img}' width='100px' height='100px'></img>`
}
getDogPic()
btn.addEventListener('click',getDogPic)