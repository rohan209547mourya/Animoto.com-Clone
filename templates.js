import { dataBase } from "./productions.js";


// *********************************************************
// Appending Template Data Start
const createEle = (type) => {
    return document.createElement(type);
}

const appendData = (data) => {
    let container = document.getElementById("templates_results");

    container.innerHTML = "";

    data.forEach(({ cover_image_url: img_url, hover_preview_url: video_url, title, description }, index) => {
        let mainDiv = createEle("div");
        mainDiv.className = "templates_container";
        mainDiv.addEventListener("click", () => {
            detailedInfo(index);
        })


        let img_div = createEle("div");
        let img = createEle("img");
        img_div.className = "imgDiv"
        img.src = img_url;
        img_div.append(img);
        img_div.addEventListener("mouseover", () => {
            hoverOpration(index);
        })

        let video = createEle("video");
        let source = createEle("source");
        source.src = video_url;
        source.type = "video/mp4";
        video.setAttribute("muted", "");
        video.setAttribute("loop", "");
        video.append(source);
        video.classList.add("dis_none", "videoDiv")
        video.addEventListener('click', () => {
            hoverLeaveOpration(index);
        })

        let heading = createEle("h4");
        heading.innerText = title;

        let info = createEle("p");
        info.innerText = description;

        mainDiv.append(img_div, video, heading, info)

        container.append(mainDiv);
    })
}

const hoverOpration = (i) => {
    let img = document.querySelectorAll(".imgDiv");

    img[i].classList.add("dis_none");

    let video = document.querySelectorAll(".videoDiv");
    video[i].setAttribute("autoplay", "");
    video[i].classList.remove("dis_none");
    video[i].play();
}

const main = () => {
    let data = dataBase();
    appendData(data);
}

main();

const detailedInfo = (i) => {
    let data = dataBase();

    localStorage.setItem("templateDetails", JSON.stringify(data[i]));

    window.location.href = "./details.html"
}

// Appending Template Data Start
// *********************************************************
