const jokeEl = document.querySelector('#joke'),
      getjoke = document.querySelector('#get_joke');

const getRandom =async()=>{
    //call the joke 
    const url=await (await fetch('https://api.chucknorris.io/jokes/random')).json() 
    console.log(joke);
    //set the new joke
    jokeEl.innerHTML = url.value;
}
getRandom()
getjoke.addEventListener('click',getRandom)