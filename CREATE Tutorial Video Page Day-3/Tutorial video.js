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

  heading.innerText = "Why DIY videos are so effective";

  Option1.innerText = "PEOPLE WANT TO LEARN FROM THE BEST";
  P1.innerText =
    "Customers prefer to buy from people they know, like, and trust. A professional video that displays your expertise will give audiences a way to identify you as an authority. Then when viewers need help from a professional in your field, they'll think of your video—and you—first.";

  Option2.innerText = "TUTORIALS EXPLAIN VISUALLY";
  P2.innerText =
    "Breaking down a process with video makes it easy for your audience to understand exactly what to do and how. A DIY video takes your audience through each step in a process, so they won't get confused or lost, the way they might with just text or static images.";

  Option3.innerText = "VIDEOS BUILD YOUR PROFILE ON SOCIAL";
  P3.innerText =
    "Posting content that's valuable to your audience is part of growing a brand on social. The more you provide video tutorials that helps your audience solve problems or give fresh education, the more they'll like, comment, or share.";
}

function TIPS() {
  IDEA.style.textDecoration = "none";
  TIP.style.textDecoration = "underline";
  PRACTICE.style.textDecoration = "none";

  heading.innerText = "Where to share your tutorial videos";

  Option1.innerText = "POST TO SOCIAL MEDIA";
  P1.innerText =
    "Animoto lets you publish videos to any of the top social media platforms. Share your tutorial video on a Facebook page, post it as an Instagram Story, or turn it into a YouTube video in minutes.";

  Option2.innerText = "SHARE ON YOUR WEBSITE";
  P2.innerText =
    "Whether it's a step-by-step blog post or a sales video for a landing page, posting video content to your website can keep visitors on your site for longer periods of time. Turn your site into a go-to resource for your specialty.";

  Option3.innerText = "USE IN EMAIL MARKETING";
  P3.innerText =
    "Increase open rates and engage your list with valuable tutorial videos. Create content that gets your email list excited each time a new email arrives.";
}

function PRACTICES() {
  IDEA.style.textDecoration = "none";
  TIP.style.textDecoration = "none";
  PRACTICE.style.textDecoration = "underline";

  heading.innerText = "How to make top-notch tutorials";

  Option1.innerText = "KEEP TEXT VISIBLE";
  P1.innerText =
    "If people can't see your words on screen, they won't get the most value out of your content. Make sure to choose text colors that will stand out against your background and select a size that'll be visible even if your audience is watching on mobile.";

  Option2.innerText = "PICK THE RIGHT ASPECT RATIO";
  P2.innerText =
    "Animoto lets you choose between landscape and portrait aspect ratios so that you can select the best option for your posting platform. Horizontal video is still the best choice for your website or YouTube, whereas Instagram and Facebook tutorials will look better, and take up more screen space, when they're square.";

  Option3.innerText = "ADD BACKGROUND MUSIC";
  P3.innerText =
    "Breathe life into your tutorials by adding an entertaining background soundtrack. Animoto offers thousands of commercially licensed songs to choose from, or you can upload a licensed song of your own.";
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
      "Users are 3X more likely to prefer a tutorial video to written instructions. With Animioto's tutorial video maker, you can combine video clips, screen recordings, helpful images, voice-over messages, text, and more to create a helpful, professional video tutorial. Create your own for free!";
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
      "The benefits of video tutorials are plentiful. In fact, users are 3X more likely to prefer a tutorial video to written instructions. They combine multiple forms of media like video clips, screen recordings, voice-over messages, and text to guide viewers on how to use a product/service or complete a task. They can also be saved, shared, and rewatched at any time.";
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
      "Many consumers said that they would prefer to watch a short video about a product or service over any other format. By offering a richer visual and auditory learning experience, video tutorials appeal to a wider audience and are more memorable. Plus, they can be paused, slowed down, and rewatched. You can use Animoto's video tutorial maker to start making informative tutorials for free.";

    Plus1.innerText = "+";
    Plus2.innerText = "+";
    Plus3.innerText = "x";
  }
}
