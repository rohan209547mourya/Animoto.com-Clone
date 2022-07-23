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

    heading.innerText = "Where to share your promo videos";

    Option1.innerText = "VIDEO ADS";
    P1.innerText =
      "There are a number of ways to connect with your audience, but video ads might be the most effective when it comes to finding new leads. Post a video that introduces your brand and get customers into your funnel fast.";

    Option2.innerText = "EMAIL MARKETING VIDEOS";
    P2.innerText =
      "Engage your email list with informational explainer videos or company announcements. Include info about new products or provide helpful tricks and tips to add value for your audience.";

    Option3.innerText = "PROMOS FOR YOUR WEBSITE";
    P3.innerText =
      "Create videos for your website that introduce new visitors to your brand. Incorporate photos or video clips of your team or direct people to where they can find what they need on your site.";
  }

  function TIPS() {
    IDEA.style.textDecoration = "none";
    TIP.style.textDecoration = "underline";
    PRACTICE.style.textDecoration = "none";

    heading.innerText = "Editing your promos";

    Option1.innerText = "TIMING";
    P1.innerText =
      "Edit your promo videos with a time limit in mind. Make sure each promo isn't too long for your intended audience and platform. For example, a video ad on Instagram should usually be much shorter than a normal YouTube video.";

    Option2.innerText = "ASPECT RATIO";
    P2.innerText =
      "Make your video the appropriate size for its platform. Facebook and Instagram videos perform better in a square format, Stories look best when they're vertical, and YouTube videos are designed for a horizontal view.";

    Option3.innerText = "CALLS TO ACTION";
    P3.innerText =
      "Every promo video should have a unique call to action. In other words, tell viewers what you'd like them to do after watching your video, whether it's subscribing to your email list, downloading your free guide, or simply liking your Facebook page.";
  }

  function PRACTICES() {
    IDEA.style.textDecoration = "none";
    TIP.style.textDecoration = "none";
    PRACTICE.style.textDecoration = "underline";

    heading.innerText = "Tips for effective promotion";

    Option1.innerText = "DETERMINE YOUR OBJECTIVE";
    P1.innerText =
      "What is the purpose of your promo video? A sales promo will be far different from a brand introduction. Figure out what you want to accomplish before you start, so you can select the right storyboard template from the very beginning.";

    Option2.innerText = "WRITE A SCRIPT";
    P2.innerText =
      "Have an outline written down with a few images or video clips you'd like to include in your video. Then jot down the text for your video as well. This will help you stay on track and speed up your editing process.";

    Option3.innerText = "PREVIEW BEFORE PUBLISHING";
    P3.innerText =
      "It's a good idea to review your whole promo video before you publish, which you can easily do right in Animoto. A quick preview lets you make sure you don't see any errors, and you like the way the finished video looks.";
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
        "Social channels are prioritizing video content over all others, and for good reason. Promo videos not only boost conversions and sales by as much as 80%, they can build trust, drive engagement, increase brand recall, and are more likely to be shared than static images. Ready to start building your video marketing strategy? Try out Animoto's Product Promotion templates.";
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
        "Instagram is investing more in video and so should you! To make promo videos for Instagram stories, reels, and more, upload images from your catalog to Animoto and drag and drop them into our Product Promotion templates. This blog has tips, tricks, and inspiration to help you start creating Instagram promo videos with Animoto.";
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
        "WHAT IS A PROMO VIDEO?Promotional or promo videos are made to support a marketing initiative, sale, or event and drive engagement. Promo videos are one of the most important tools in a marketer's toolkit. Check out Animoto's promo video maker and templates to get started in a matter of minutes!";

      Plus1.innerText = "+";
      Plus2.innerText = "+";
      Plus3.innerText = "x";
    }
  }
