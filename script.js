console.log("Hello Surya");

let demo=document.querySelector(".container").children

function getRandColor(){
    let val1=Math.random()*255
    let val2=Math.random()*255
    let val3=Math.random()*255
    return`rgb(${val1},${val2},${val3})`
}

Array.from(demo).forEach(e=>{
    e.style.backgroundColor=getRandColor()
    e.color=getRandColor()
})
