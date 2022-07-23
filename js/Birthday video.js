let IDEA = document.getElementById("IDEAS");
let TIP = document.getElementById("TIPS");
let PRACTICE = document.getElementById("PRACTICES");

let heading = document.getElementById("Heading");
let Option1 = document.getElementById("Ist");
let P1 = document.getElementById("P1");

let Option2 = document.getElementById("IIst");
let P2 = document.getElementById("P2");

let Option3 = document.getElementById("IIIst");
let P3 = document.getElementById("P3");

function IDEAS() {
  IDEA.style.textDecoration = "underline";
  TIP.style.textDecoration = "none";
  PRACTICE.style.textDecoration = "none";

  heading.innerText = "3 Quick & Easy Birthday Video Ideas";

  Option1.innerText = "BIRTHDAY ECARD";
  P1.innerText =
    "Show you care with a short video that includes a heartfelt or funny birthday message. Include in-jokes or clever quotes, along with photos from way back when. Create a personalized birthday card your recipient won't forget.";

  Option2.innerText = "VIDEO INTERVIEW";
  P2.innerText =
    "Ask friends and family to share memories about the person celebrating a birthday. Mix in the video interviews with photos and add music to make a unique video gift.";

  Option3.innerText = "BIRTHDAY SLIDESHOW";
  P3.innerText =
    "Create a dynamic slideshow of photos and video clips of the birthday boy or girl over of the years. Add text to help tell your story. Share your video at a birthday party by showing it on a TV or by using a projector to watch it on a big screen.";
}

function TIPS() {
  IDEA.style.textDecoration = "none";
  TIP.style.textDecoration = "underline";
  PRACTICE.style.textDecoration = "none";

  heading.innerText = "The Elements of an Amazing Birthday Video";

  Option1.innerText = "TELL A CLEAR STORY";
  P1.innerText =
    "Before you begin, think about how you'll organize your video. Will it be chronological? Will you share images related to a hobby or theme? Choosing your angle ahead of time can make creating a video much easier.";

  Option2.innerText = "MAKE YOUR VIDEO THE RIGHT LENGTH";
  P2.innerText =
    "Keep your video to under a minute if you're creating a birthday invitation or e-card. For a happy birthday video for a loved one, make it about 2-3 minutes. That means being choosy about your visuals. Instead of adding every video clip or picture you have, just include your very best.";

  Option3.innerText = "SELECT FESTIVE VISUALS";
  P3.innerText =
    "Include a photo of the person whose birthday you're celebrating, along with fun, birthday-ready images. If you can't find enough photos on your own, search our collection of Getty Images stock photos and video clips for birthday stock photos.";
}

function PRACTICES() {
  IDEA.style.textDecoration = "none";
  TIP.style.textDecoration = "none";
  PRACTICE.style.textDecoration = "underline";

  heading.innerText = "Birthday Video Editing Tips";

  Option1.innerText = "MATCH YOUR RECIPIENT'S STYLE";
  P1.innerText =
    "Animoto lets you personalize your video using custom fonts and colors. Customize your colors and design to match your party theme. Add bright colors and a fun text style for a child's birthday. Try a black-and-white filter and elegant text for a more sophisticated look.";

  Option2.innerText = "CROP IMAGES AND TRIM VIDEO CLIPS";
  P2.innerText =
    "When you're adding photos or footage, you can adjust them in Animoto to better fit your video. Enlarge images, crop them to the left or right, or show multiple images at once in a photo collage. You can also cut down video clips or mute them in Animoto if you want to cut out the audio.";

  Option3.innerText = "CHOOSE THE RIGHT BIRTHDAY MUSIC";
  P3.innerText =
    "Whether you want a rockin' birthday video or a quiet, reflective instrumental, our library of commercially licensed music has hundreds of songs to choose from. Go for a straightforward Happy Birthday or filter songs by genre";
}

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
      "Animoto's online birthday video maker is quick and easy to use for TikTok!First, choose a birthday video template and select the 9:16 ratio aspect. Then, upload your favorite pictures and videos, write a happy birthday message, choose a song, and download the video. It's ready to share on TikTok!";
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
      "With Animoto, turning your photos into a beautiful birthday video is easy. Simply upload your photos to the Animoto online birthday video maker and drop them into your favorite template. Customize the colors, music, text, and more to make a truly unique B-day video!";
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
      "Give your loved one a good laugh on their birthday by making a funny birthday video! This blog offers 19 creative and funny birthday video ideas, but when in doubt, blooper reels and outtakes are sure to make them smile.";

    Plus1.innerText = "+";
    Plus2.innerText = "+";
    Plus3.innerText = "x";
  }
}
