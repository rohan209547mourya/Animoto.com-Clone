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
})
