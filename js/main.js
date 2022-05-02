//Create a button that adds 1 to a botScore stored in localStorage 
if(!localStorage.getItem('botScore')){
    localStorage.setItem('botScore', 0)
}

document.querySelector('h2').innerHTML = localStorage.getItem('botScore')

document.querySelector('.buttonOne').addEventListener('click', anothaOne)

function anothaOne(){
    let botScore = Number(localStorage.getItem('botScore'))
    botScore = botScore + 1
    localStorage.setItem('botScore', botScore)
    document.querySelector('h2').innerHTML = localStorage.getItem('botScore')
}

document.querySelector('.buttonClear').addEventListener('click', clearData)

function clearData(){
    
    let question = confirm('are you sure you want to clear data?')
      if(question === true){
        localStorage.clear()
      }
    document.querySelector('h2').innerHTML = localStorage.getItem('botScore')
}