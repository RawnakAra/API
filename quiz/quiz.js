const Quze =async()=>{
    const url = await (await fetch('https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=boolean')).json();
    const dogs = await (await fetch('https://dog.ceo/api/breeds/image/random')).json()
    document.querySelector('body').innerHTML = `<img src='${dogs.message}' width='100%' height ='530px'></img>`
   const question = url.results;
   console.log(url);
   console.log(question);
  
}
Quze()