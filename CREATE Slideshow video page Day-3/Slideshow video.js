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

  heading.innerText = "Slideshow videos for all of life's important moments";

  Option1.innerText = "CREATE BIRTHDAY MAGIC";
  P1.innerText =
    "Make fun birthday videos, invitations, or thank you messages for birthday party guests. Share slideshow videos across social media to create a lasting memento for friends and family.";

  Option2.innerText = "CELEBRATE WEDDINGS AND ANNIVERSARIES";
  P2.innerText =
    "Whether it’s a save-the-date slideshow for an upcoming wedding or a celebration of a 50th anniversary, Animoto lets you tell a creative, personalized story about a loving couple. Add your project to wedding websites or on social in just a few clicks.";

  Option3.innerText = "GRADUATIONS, REUNIONS, VACATIONS, AND MORE";
  P3.innerText =
    "Share all of life’s milestones, big and small. Create video photo albums to preserve memories or post on social. Celebrate holidays and the everyday. The possibilities are endless.";
}

function TIPS() {
  IDEA.style.textDecoration = "none";
  TIP.style.textDecoration = "underline";
  PRACTICE.style.textDecoration = "none";

  heading.innerText = "Slideshow videos to grow your business";

  Option1.innerText = "PROMOTE YOUR PRODUCTS";
  P1.innerText =
    "Grab the best-looking shots of your product or collection. You can even raid catalogs or pull photos and video clips right from Facebook or Instagram. Highlight your product's best features and most attractive selling points.";

  Option2.innerText = "CELEBRATE YOUR TEAM";
  P2.innerText =
    "Whether you’re sharing a company milestone, a holiday greeting, or just an introductory video about your business, slideshow videos can help show the world why your brand rules. Bring your employees together and create a well-crafted message from your company.";

  Option3.innerText = "CREATE HELPFUL TUTORIALS";
  P3.innerText =
    "Guide customers through the process of using your products. Create how-to videos designed to help buyers get the most value from your offerings, while also addressing frequently asked questions.";
}

function PRACTICES() {
  IDEA.style.textDecoration = "none";
  TIP.style.textDecoration = "none";
  PRACTICE.style.textDecoration = "underline";

  heading.innerText = "Tips and tricks for slideshow success";

  Option1.innerText = "CHOOSE THE RIGHT TEMPLATE";
  P1.innerText =
    "Animoto’s storyboard templates are fully customizable, letting you choose based on theme, look, or even music. However, by picking a storyboard that closely matches your video theme, you can cut down on the time it'll take you to edit your message. There are dozens of pre-built storyboard templates available to select from, so you can quickly and easily find the right fit for your video.";

  Option2.innerText = "USE HIGH-QUALITY PHOTOS AND VIDEO CLIPS";
  P2.innerText =
    "Try to upload HD files to your Animoto project. Select video files that are 720p or 1080p, and PNG, JPG, or GIF photos that are about 2000 pixels on their longest side. This will give you consistent, crystal clear video.";

  Option3.innerText = "ALLOW SPACE FOR TEXT";
  P3.innerText =
    "When choosing images or video clips, remember to leave space for what you have to say. Crop images to the left or right, or choose text animations that’ll let your words stand out, even if your visuals are more involved. You can also easily adjust text size or use filters or text tools to increase your text visibility and make sure your message comes through.";
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
      "Animoto makes it easy to create beautiful slideshow videos with your favorite photos! With hundreds of licensed music tracks and customizable animated templates to choose from, you can create a beautiful video using static images. Get started with the creative video slideshow ideas above!";
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
      "Tired of scrolling through your phone's photo album and fumbling with a small screen? Our online slideshow maker is optimized for desktop and laptop viewing. Upload your photos and minutes and edit your slideshow video in HD then share it to any device with Animoto.";
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
      "Struggling to set the right tone for your slideshow video? Animoto's online slideshow maker has everything you need to quickly customize your slideshow, including a library of 3,000+ licensed music tracks to help tell your story. Sort by genre, mood, and more to find the perfect song for your video.";

    Plus1.innerText = "+";
    Plus2.innerText = "+";
    Plus3.innerText = "x";
  }
}
