

//--------------------------------faqs--------------------------------------------------------------------

let para1 = document.getElementById("para1");
let para2 = document.getElementById("para2");
let para3 = document.getElementById("para3");

let Plus1 = document.getElementById("Plus1");

function FAQ1() {
  if (Plus1.innerText == "x") {
    para1.innerText = "";
    Plus1.innerText = "+";
  } else if (Plus1.innerText == "+") {
    para1.innerText =
      "Real estate video marketing can be extremely effective. Whether an in-depth video tour or slideshow video of pictures of the space, the ideal duration of a real estate video is between 3-7 minutes. Start creating your own with our free real estate video templates!";
    para2.innerText = "";
    para3.innerText = "";

    Plus1.innerText = "x";
    Plus2.innerText = "+";
    Plus3.innerText = "+";
  }
}

function FAQ2() {
  if (Plus2.innerText == "x") {
    para2.innerText = "";
    Plus2.innerText = "+";
  } else if (Plus2.innerText == "+") {
    para1.innerText = "";
    para2.innerText =
      "Real estate video tours are virtual pre-recorded tours of a house or space, usually recorded by a real estate agent. They allow potential buyers to tour many spaces from the comfort of their homes. You can use Animoto to edit them into a professional video complete with text, music, your contact info, and more for free.";
    para3.innerText = "";

    Plus1.innerText = "+";
    Plus2.innerText = "x";
    Plus3.innerText = "+";
  }
}

function FAQ3() {
  if (Plus3.innerText == "x") {
    para3.innerText = "";
    Plus3.innerText = "+";
  } else if (Plus3.innerText == "+") {
    para1.innerText = "";
    para2.innerText = "";
    para3.innerText =
      "Recording a professional real estate video not only requires a good camera and ample lighting, but it also requires careful editing. With Animoto's range of professional real estate video templates, you can turn your video tour footage into a professional video in minutes. Check out the video above for inspiration!";

    Plus1.innerText = "+";
    Plus2.innerText = "+";
    Plus3.innerText = "x";
  }
}
