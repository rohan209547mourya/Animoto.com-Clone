let count = 2;

document.getElementById("menuBtn").addEventListener("click", () => {
    if (count % 2 == 0) {
        document.getElementById("menu_item").style.display = "block";
        count++;
    }
    else if (count % 2 == 1) {
        document.getElementById("menu_item").style.display = "none";
        document.getElementById("menu_item").style.display = "none";
        count++;
    }
});





// const toggler = document.querySelector(".toggler");

// const starterPrice = document.getElementById("starter-price");
// const proPrice = document.getElementById("pro-price");

// toggler.addEventListener("change", ()=>{
//     if(toggler.checked){
//         starterPrice.innerHTML = `$200 <span> / year </span>`;
//         proPrice.innerHTML = `$1000 <span> / year </span>`;
//     }else{
//         starterPrice.innerHTML = `$19 <span> / month </span>`;
//         proPrice.innerHTML = `$99 <span> / month </span>`; 
//     }
// })


const toggler = document.querySelector(".toggler");
const starterPrice = document.getElementById("starter-price");
const proPrice = document.getElementById("pro-price");

toggler.addEventListener("change", ()=>{
    if(toggler.checked){
        starterPrice.innerHTML = `$200 <span> / year </span>`;
        proPrice.innerHTML = `$1000 <span> / year </span>`;
    }else{
        starterPrice.innerHTML = `$19 <span> / month </span>`;
        proPrice.innerHTML = `$99 <span> / month </span>`; 
    }
})