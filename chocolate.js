let container_cholate=document.querySelector(".choclate");
let btn= document.querySelector(".btn_box button");
let h1=document.querySelector(".btn_box h1");
btn.addEventListener("click",function(){
    setTimeout(() => {
        btn.setAttribute("style","display:none");
        h1.setAttribute("style","display:block");
    }, 1000);
    
    for(let i=0;i<10;i++){
        let div=document.createElement("div");
        let cholate=document.createElement("img");
        cholate.setAttribute("src","chocolate.png");
        cholate.setAttribute("class","choclates");
    
       div.appendChild(cholate);
       
        container_cholate.appendChild(div);
    }
    
    
})


