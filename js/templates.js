import { navbar, navbarResponse, navbarResponse1, appendData } from "../components/production.js";
import { dataBase } from "../components/server.js";

document.getElementById("navbar").innerHTML = navbar();
navbarResponse();
navbarResponse1();



// *********************************************************
// Appending Template Data Start

const main = () => {
    let data = dataBase();
    appendData(data, "templates_results");
}

main();


// Appending Template Data Start
// *********************************************************



document.getElementById("category").addEventListener("click", () => {
    const div = document.getElementById('category_item');

    if (div.classList.contains('open')) {
        div.classList.remove('open')
    } else {
        div.classList.add('open')
    }
})


document.getElementById("side_2El").addEventListener("click", () => {
    window.location.href = "/html/allteamplates.html";
})