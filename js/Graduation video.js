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

  heading.innerText = "Tips for creating a graduation video";

  Option1.innerText = "COLLECT VIDEO CONGRATULATIONS";
  P1.innerText =
    "Ask family and friends to record short messages to your grad on a mobile device. Then have them text or email the video clips to you. Suggest participants keep their messages under a minute so the videos are easier to send and to upload into your video.";

  Option2.innerText = "BRING SCHOOL COLORS INTO YOUR VIDEO";
  P2.innerText =
    "Show school spirit by adding school colors to the backgrounds or text of your video. Animoto lets you customize colors, fonts, and text styles, so you can pick out colors that match your graduation decorations.";

  Option3.innerText = "ADD MUSIC THAT MATCHES YOUR TONE";
  P3.innerText =
    "The right song can help create the mood you want for your video. If you’re making a video from parents to their child, try for a sweet instrumental track. Or if you’re creating a video to celebrate, look for a high-energy song that’ll fit the mood. Test out Animoto’s music filters to find licensed music you’ll love or upload your own music track to your video.";
}

function TIPS() {
  IDEA.style.textDecoration = "none";
  TIP.style.textDecoration = "underline";
  PRACTICE.style.textDecoration = "none";

  heading.innerText = "3 easy graduation video ideas";

  Option1.innerText = "CREATE A GRADUATION SLIDESHOW VIDEO";
  P1.innerText =
    "Make a beautiful slideshow you can share with friends and family at a graduation party. Focus on your grad’s personality with photos and video clips of their hobbies and accomplishments. Then add text to help tell your grad’s story and say how proud you are of them. If you’ve got a lot of photos, consider using a photo collage or burst to keep the video’s runtime down, while still including all the images you want.";

  Option2.innerText = "WISH GRADUATING SENIORS GOOD LUCK";
  P2.innerText =
    "If you work at a high school or university, wish your graduating seniors good luck with a video you can share on social or present at the graduation ceremony itself. Include photos of big senior events, like the prom or homecoming, to remind the graduating class of all the memorable moments they experienced at your school.";

  Option3.innerText = "USE SCHOOL PICTURES TO TELL A STORY";
  P3.innerText =
    "Grab school photos from pre-K up through high school or college graduation to show how much your grad has grown. Check your social media accounts for recent photos, scan in older photos, or even take new pictures of them on your smartphone.";
}

function PRACTICES() {
  IDEA.style.textDecoration = "none";
  TIP.style.textDecoration = "none";
  PRACTICE.style.textDecoration = "underline";

  heading.innerText = "How to screen your graduation slideshow video";

  Option1.innerText = "WATCH YOUR VIDEO AT A GRADUATION PARTY";
  P1.innerText =
    "Even if you’re celebrating online this year, you can still share your video with your grad’s guests. . Zoom and Google Hangouts both let you share your screen. When you’ve shared your screen, you can play your Animoto video for everyone in attendance. If you want to present your graduation slideshow at an in-person celebration, there are several methods you can try. Plug your laptop into a TV using an HDMI cord, burn your video onto a DVD, upload it to a USB drive, or use Chromecast or Airplay to send your video right from your phone or computer.";

  Option2.innerText = "SHARE IT ON SOCIAL";
  P2.innerText =
    "Let the grads in your life know you care with a heartfelt or fun-loving video that you can share with them on social media. Post a quick video to your college, university, or high school social media accounts to share the excitement of graduation day and congratulate the graduating class. Create a Facebook and Instagram-friendly square video to make sure it stands out more in newsfeeds. Creating a video for just one special grad? Share it on social to help friends and family feel a part of the graduation, even if they’re far away.";

  Option3.innerText = "SEND IT AS AN EMAIL";
  P3.innerText =
    "Reach your graduate wherever they are. Send your video right to them by emailing a link to your video. Then, your recipient will be able to watch their video gift again and again whenever they want.";
}

