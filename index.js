// eventListener = Listen for specific events to create interacrive web pages 
//                 events: click, mouseover, mouseout,
//                 .addEventListener(event, callback)


// const myBox= document.getElementById("myBox")



// myBox.addEventListener("click", (event)=>{
//     event.target.style.audio
//     event.target.style.backgroundColor="red"
//     event.target.textContent="Hello jerk"
//     myBox.addEventListener("click",event=>{
//         event.target.style.backgroundColor=" rgba(68, 87, 155, 0.664)"
//         event.target.textContent="Click me 🍔🍕🍔"
//     })
// })

// myBox.addEventListener("mouseover", event=>{
//     event.target.style.backgroundColor="yellow"
//     event.target.textContent="don't do it"
// })
// myBox.addEventListener("mouseout", event=>{
//     event.target.style.backgroundColor=" rgba(68, 87, 155, 0.664)"
//     event.target.textContent="Click me 🍔🌭🍟🌭🍔"
// })





















// eventListener = Listen for specific events to create interacrive web pages
//                 events: keydown, keyup,
//                 .addEventListener(event, callback)



const myBox=document.getElementById("myBox")


document.addEventListener("keydown" , (event) =>{
   myBox.textContent="😁";
   myBox.style.backgroundColor="tomato"
})

document.addEventListener("keyup" , (event) =>{
   myBox.textContent="🤣";
   myBox.style.backgroundColor="lightblue"
})


const moveAmount=10;
let x=0;
let y=0;
document.addEventListener("keydown", event=>{
    if(event.key.startsWith("Arrow")){
event.preventDefault()
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y +=moveAmount ;
                break;
            case "ArrowLeft" :
                x-=moveAmount;
                break;
            case "ArrowRight" :
                x +=moveAmount;
                break;
        }


        myBox.style.top= `${y}px`
        myBox.style.right= `${x}px`
        myBox.style.down= `${y}px`
        myBox.style.left= `${x}px`
    }

})



