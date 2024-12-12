var myform =document.getElementById("myform")
var myinpt  =document.getElementById("myinpt")
var myitem =document.getElementById("myitem")
myform.addEventListener("submit",
function(event){
event.proventdeefolt()
createitem(myinpt.value)
})
function createitem (inputitems){
    var items=`<li>${
       inputitems 
}

    </li>`
}