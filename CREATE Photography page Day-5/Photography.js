

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
      "Creating photography slideshows with music is easy with Animoto's photography slideshow maker! Upload then drag and drop your images into any of our video templates for a dynamic video slideshow, complete with animations and licensed music. Create a video from images in minutes!";
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
      "Create stunning lifestyle, wedding, and nature photography slideshows in minutes with Animoto! Our slideshow templates bring your photos to life with animations, music, custom colors, and more. You can also add text and a voice-over message for a captivating, personalized touch. Try it out for free!";
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
      "Photography slideshows are a great way to present your photos to a client. At a minimum, viewers should have 3-4 seconds to look at each image in your slideshow. That's about 10-15 images per minute. With Animoto, you can easily create and edit photography slideshows to your desired length and style.";

    Plus1.innerText = "+";
    Plus2.innerText = "+";
    Plus3.innerText = "x";
  }
}
