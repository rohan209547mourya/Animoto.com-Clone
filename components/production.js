import { dataBase } from "./server.js";


const navbar = () => {
    return `        <nav>
    <div>
        <!--Logo Start-->
        <a href="index.html">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 137 32" width="137" height="32">
                <path fill="#A5999B"
                    d="M51.95 20.595l-2.596-5.835-2.617 5.835h5.214zm-5.72 1.16l-1.357 3.025H43.55l5.215-11.524h1.21l5.212 11.524H53.8l-1.345-3.026H46.23zm13.442-8.415h1.21l7.208 9.167V13.34h1.26v11.44h-1.032l-7.388-9.384v9.385h-1.258zm15.256 0h1.29v11.44h-1.29zm7.19 0h1.31l4.812 8.174 4.81-8.175h1.308v11.44h-1.29v-8.95l-4.81 8.062h-.068l-4.812-8.047v8.93h-1.26zm27.138 5.75v-.033c0-2.597-1.895-4.724-4.512-4.724-2.62 0-4.48 2.092-4.48 4.692v.032c0 2.6 1.896 4.726 4.51 4.726 2.616 0 4.482-2.093 4.482-4.692m-10.332 0v-.03c0-3.155 2.37-5.917 5.85-5.917 3.483 0 5.82 2.73 5.82 5.886.016.015.016.015 0 .03 0 3.157-2.37 5.92-5.85 5.92-3.482 0-5.82-2.73-5.82-5.885m18.23-4.564h-3.843v-1.19h8.998v1.19h-3.844v10.25h-1.305zm18.43 4.56v-.032c0-2.597-1.896-4.724-4.51-4.724-2.616 0-4.48 2.092-4.48 4.692v.032c0 2.6 1.895 4.726 4.514 4.726 2.613 0 4.477-2.093 4.477-4.692m-10.33 0v-.03c0-3.156 2.37-5.918 5.853-5.918 3.478 0 5.816 2.73 5.816 5.886.017.016.017.016 0 .032 0 3.156-2.37 5.918-5.85 5.918-3.483 0-5.82-2.73-5.82-5.884" />
                <path fill="#4BC7EE" d="M0 32l30.465-21.237 5.745 9.73z" />
                <path fill="#CDC6C5"
                    d="M36.82 28.227L20.616 1.26C19.593-.444 17.966-.416 17 1.322L0 32l35.068-.613c1.987-.033 2.775-1.457 1.75-3.16z" />
                <path fill="#BED633" d="M0 32L23.257 5.656l6.896 11.473z" />
                <path fill="#E3E9AC"
                    d="M20.617 1.26C19.593-.444 17.967-.416 17 1.322L0 32 23.257 5.656l-2.64-4.396z" />
                <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-2.232" y1="26.906" x2="30.77"
                    y2="26.906" gradientTransform="translate(1.635 -2.108)">
                    <stop offset="0" stop-color="#4BC7F1" />
                    <stop offset="1" stop-color="#209DBD" />
                </linearGradient>
                <path fill="url(#a)" d="M0 32l30.153-14.87 2.67 4.44z" />
                <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="-2.232" y1="24.716" x2="28.179"
                    y2="24.716" gradientTransform="translate(1.635 -2.108)">
                    <stop offset="0" stop-color="#3BC5F1" />
                    <stop offset="1" stop-color="#84B5CA" />
                </linearGradient>
                <path fill="url(#b)" d="M0 32l27.548-19.205 2.605 4.334z" />
            </svg>
        </a>
        <!--Logo End-->
    </div>

    <!--Pages links-->
    <div>
        <ul>
            <li>BUSINESS</li>
            <li>PHOTOGRAPHY</li>
            <li>FAMILY</li>
            <li>PRICING</li>
            <li>SIGN UP</li>
            <li>LOG IN</li>
        </ul>
    </div>

    <!--Humburger Menu-->
    <div id="menu">
        <i class="fa-solid fa-bars" id="menuBtn"></i>
        <i class="fa-solid fa-xmark" id="menuXBtn"></i>
    </div>
</nav>


<!--Humburger Menu Items start-->
<div id="menu_item">
    <ul>
        <li>BUSINESS</li>
        <li>PHOTOGRAPHY</li>
        <li>FAMILY</li>
        <li>PRICING</li>
        <li>SIGN UP</li>
        <li>LOG IN</li>
    </ul>
</div>
<!--Humburger Menu Items End-->`
}

// Append Fucntion
const createEle = (type) => {
    return document.createElement(type);
}



const hoverOpration = (i) => {
    let img = document.querySelectorAll(".imgDiv");

    img[i].classList.add("dis_none");

    let video = document.querySelectorAll(".videoDiv");
    video[i].setAttribute("autoplay", "");
    video[i].classList.remove("dis_none");
    video[i].play();
}

const detailedInfo = (i) => {
    let data = dataBase();

    localStorage.setItem("templateDetails", JSON.stringify(data[i]));

    window.location.href = "./details.html"
}


const appendData = (data, location) => {
    let container = document.getElementById(`${location}`);

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

        let heading = createEle("h4");
        heading.innerText = title;

        let info = createEle("p");
        info.innerText = description;

        mainDiv.append(img_div, video, heading, info)

        container.append(mainDiv);
    })
}


// *********************************************************
// Navbar responsive logic start

const navbarResponse = () => {
    // let count = 2;
    document.getElementById("menuBtn").addEventListener("click", () => {
        document.getElementById("menuBtn").style.display = "none";
        document.getElementById("menuXBtn").style.display = "block";
        document.getElementById("menu_item").style.display = "block";
    })
}
const navbarResponse1 = () => {
    // let count = 2;
    document.getElementById("menuXBtn").addEventListener("click", () => {
        document.getElementById("menuBtn").style.display = "block";
        document.getElementById("menuXBtn").style.display = "none";
        document.getElementById("menu_item").style.display = "none";
    })
}

// Navbar responsive logic End
// *********************************************************




export { navbar, navbarResponse, navbarResponse1, appendData }