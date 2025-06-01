const start = document.querySelector("#start")
const stop = document.querySelector("#stop")


function colochanger()
{
  const hex = "0123456789ABCDEF"
  console.log(hex.length)
  let color ="#"
  for(let i = 0; i < 6; i++)
  {
    let index = Math.round(Math.random()*15)
    color+=hex[index]    
  }
  console.log(color)
  document.querySelector("body").style.backgroundColor = `${color}`
}

let interv;

start.addEventListener("click", function(event)
{
  if(!interv)
  {
    interv = setInterval(colochanger,1000)
  }
})

stop.addEventListener("click",function(event)
{
  clearInterval(interv)
  console.log("the color changing has stopped")
  interv = null;
})