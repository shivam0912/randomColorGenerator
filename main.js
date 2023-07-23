const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'

    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];

    }
    return color;
}

function updateColor(){
    console.log(randomColor())
    document.querySelector('body').style.backgroundColor = randomColor();
}

let intervalId;
const startButton = document.getElementById('start');
startButton.addEventListener('click',()=>{
    updateColor();
intervalId = setInterval(updateColor,1000);
startButton.disabled = true;
})

const stopButton = document.getElementById('stop');
stopButton.addEventListener('click',()=>{
    clearInterval(intervalId)
    startButton.disabled = false;
    
})
