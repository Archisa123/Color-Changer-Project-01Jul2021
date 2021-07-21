var btn_red,btn_green
function setup() {
 
  btn_red=createButton("RED");
  
  btn_green=createButton("GREEN")
 
  
}

function draw() 
{
  btn_red.mousePressed(()=>{
    background("red") 
  })
btn_green.mousePressed(()=>{
background("green")
})
}