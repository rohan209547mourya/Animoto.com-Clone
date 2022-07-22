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

  heading.innerText = "Creating an effective social campaign strategy";

  Option1.innerText = "SET OBJECTIVES";
  P1.innerText =
    "Each social media video should have a defined purpose, whether you want to boost engagement to your website, generate sign-ups for your email list, or introduce a new product line. Browse Animoto’s collection of storyboard templates to find a pre-built template that matches your goals or fits the look you want for your video.";

  Option2.innerText = "UNLOCK YOUR AUDIENCE";
  P2.innerText =
    "Your social media video strategy starts with knowing your audience inside and out. Thankfully, social platforms like Facebook and Instagram simplify matters by providing detailed user information about your target customers.";

  Option3.innerText = "MEASURE RESULTS";
  P3.innerText =
    "Make sure you’re hitting your goals for social. If you’re not, try an A/B test to find out they type of video that works best for your audience and your message. Animoto makes it easy to create multiple versions of one video for testing or edit an existing video to make it even better.";
}

function TIPS() {
  IDEA.style.textDecoration = "none";
  TIP.style.textDecoration = "underline";
  PRACTICE.style.textDecoration = "none";

  heading.innerText = "Best practices for creating effective social media videos";

  Option1.innerText = "CHOOSE A HORIZONTAL OR SQUARE VIDEO";
  P1.innerText =
    "Different social platforms require different video sizes. Lucky, Animoto makes changing your video’s aspect ratio a breeze. Alternate between landscape and square dimensions in just a few clicks.";

  Option2.innerText = "KEEP TEXT VISIBLE";
  P2.innerText =
    "Since so many viewers watch with the sound off, easy-to-read text is a must. Animoto includes dynamic text styles with features that enhance legibility and make text attention grabbing and fun.";

  Option3.innerText = "ADD EMOTION WITH YOUR SOUNDTRACK";
  P3.innerText =
    "Animoto gives you access to hundreds of professionally licensed songs that let you make social media videos with music. Elevate your video with music that fits the mood you want to create and build an emotional connection with your audience.";
}

function PRACTICES() {
  IDEA.style.textDecoration = "none";
  TIP.style.textDecoration = "none";
  PRACTICE.style.textDecoration = "underline";

  heading.innerText = "Posting your social media videos";

  Option1.innerText = "SHARE TO FACEBOOK, INSTAGRAM, YOUTUBE AND MORE";
  P1.innerText =
    "Animoto allows you to post to all of the top social media platforms, including Facebook, Instagram, Twitter, and YouTube.";

  Option2.innerText = "MAKE VIDEO ADS OR ORGANIC POSTS";
  P2.innerText =
    "Create powerful videos for both paid and organic social media campaigns. Build your audience through well-targeted video ads, engaging organic posts. Use A/B testing to improve your videos and your targeting.";

  Option3.innerText = "DEFINE YOUR OBJECTIVE";
  P3.innerText =
    "Determine if your social media video is geared for driving sales, boosting engagement, or capturing leads to your website. Understanding your campaign objectives will help you create a more effective video using Animoto.";
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
      "Video length, audio usage, and aspect ratio requirements differ between social media platforms -- it can be difficult to keep them all straight! When in doubt, the templates in Animoto's social media video maker will help you comply to their requirements while offering customization tools to help your video stand out.";
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
      "Social channels are prioritizing video content over all others, and for good reason. Promo videos not only boost conversions and sales by as much as 80%, they can build trust, drive engagement, and increase brand recall, and are more likely to be shared than static images. Ready to start building your video marketing strategy? Try out Animoto's Product Promotion templates.";
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
      "Want to learn how to make a youtube video or promo video for Instagram, Facebook, TikTok, and more? Start with Animoto, a social media video maker that has drag and drop tools and templates to make professional videos in minutes! Edit the text, choose your music, add your logo, photos, video clips, and more.";

    Plus1.innerText = "+";
    Plus2.innerText = "+";
    Plus3.innerText = "x";
  }
}
