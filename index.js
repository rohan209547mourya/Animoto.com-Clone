 
 document.querySelector("#link2").addEventListener("click",function(){
    document.getElementById("image1").setAttribute("src","https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhft8/3cd037d0f2be2f512214e75dee69eddb/Real_Estate_Listing.jpg?w=525&h=295&q=50&fm=webp")
    document.getElementById("image2").setAttribute("src","https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhft9/fa0945721778cd756f0293c59ba36620/Digital_Album.jpg?w=525&h=295&q=50&fm=webp")
    document.getElementById("image3").setAttribute("src","https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhfta/3f9e77def9ea8ddec5b1bfdf25e3f1e7/About_Us.jpg?w=525&h=295&q=50&fm=webp")
    document.getElementById("image1text").innerHTML="REAL ESTATE LISTING"
    document.getElementById("image2text").innerHTML="DIGITAL ALBUM"
    document.getElementById("image3text").innerHTML="ABOUT US"
 });
 document.querySelector("#link3").addEventListener("click",function(){
    document.getElementById("image1").setAttribute("src","https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhftb/2db5197bda4b725b384182bd0a10587a/New_Launch_Promo.jpg?w=525&h=295&q=50&fm=webp")
    document.getElementById("image2").setAttribute("src","https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhftc/90b05ace043ddbc3f9a1c30b88e1a4bc/Collection_Portfolio.jpg?w=525&h=295&q=50&fm=webp")
    document.getElementById("image3").setAttribute("src","https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhftd/9a94be4c48398ceb3c23b40469d82fe5/Bite_Sized_Product_Intro.jpg?w=525&h=295&q=50&fm=webp")
    document.getElementById("image1text").innerHTML="NEW LAUNCH PROMO"
    document.getElementById("image2text").innerHTML="COLLECTION PORTFOLIO"
    document.getElementById("image3text").innerHTML="BITE-SIZED PRODUCT INTRO"
 });
 document.querySelector("#link4").addEventListener("click",function(){
    document.getElementById("image1").setAttribute("src","https://images.ctfassets.net/00i767ygo3tc/5SyNIS6eCZZUkN8KtRQQKU/abe514429db5299db815f5456ea46e2b/AnniversaryCelebration-min.jpg?w=525&h=295&q=50&fm=webp")
    document.getElementById("image2").setAttribute("src","https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhfte/e500983434b4ae1351d513c3a6331dd7/BirthdayCard.jpg?w=525&h=295&q=50&fm=webp")
    document.getElementById("image3").setAttribute("src","https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhftf/49ab80423ec9059cba97f354043f4026/Engagement_Slideshow.jpg?w=525&h=295&q=50&fm=webp")
    document.getElementById("image1text").innerHTML="ANNIVERSARY CELEBRATION"
    document.getElementById("image2text").innerHTML="BIRTHDAY CARD"
    document.getElementById("image3text").innerHTML="ENGAGEMENT SLIDESHOW"
 });
 document.querySelector("#link5").addEventListener("click",function(){
    document.getElementById("image1").setAttribute("src","https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhfth/07f6462c449019e5800f103859423153/VideoResume.jpg?w=525&h=295&q=50&fm=webp")
    document.getElementById("image2").setAttribute("src","https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhfti/5e88b8d9d908427f1b450d5b539be1db/self_introduction.jpg?w=525&h=295&q=50&fm=webp")
    document.getElementById("image3").setAttribute("src","https://images.ctfassets.net/00i767ygo3tc/737fg1qyv2EqV06YLUSfio/a9b5a5a639a937d63684fbd3904c8894/EducationalPresentation-min.jpg?w=525&h=295&q=50&fm=webp")
    document.getElementById("image1text").innerHTML="VIDEO RESUME"
    document.getElementById("image2text").innerHTML="SELF-INTRODUCTION"
    document.getElementById("image3text").innerHTML="EDUCATIONAL PRESENTATION"
 });
 document.querySelector("#link1").addEventListener("click",function(){
    document.getElementById("image1").setAttribute("src","https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhft5/42bf42308d5b26a2fb1a15a89bba7c0c/Make-a-facebook-video-_2x-1b91f5bc33.jpg?w=525&h=295&q=50&fm=webp")
    document.getElementById("image2").setAttribute("src","https://images.ctfassets.net/00i767ygo3tc/2yEqvP358BvnUdigwAVlV2/2e7ebccf696d147107107522a1a71b09/Trend_Story.jpg?w=525&h=295&q=50&fm=webp")
    document.getElementById("image3").setAttribute("src","https://images.ctfassets.net/00i767ygo3tc/1kDoozfRhRamTTcZsuzKMG/a078ab26d8aeed5c00701c7978d9e24a/make_your_own_monday_motivation_video.jpg?w=525&h=295&q=50&fm=webp")
    document.getElementById("image1text").innerHTML="TELL A TRAVEL STORY"
    document.getElementById("image2text").innerHTML="TRENDING TOPIC"
    document.getElementById("image3text").innerHTML="#MONDAYMOTIVATION"
 });
 let btn1 = document.getElementById('btn');

btn1.addEventListener('click', () => {
  btn1.innerText = 'EXPLORE X ';
  let mybox = document.querySelector('.hide');

  if (mybox.style.display == 'none') {
    btn1.innerText = 'EXPLORE X ';
    mybox.style.display = 'block';
  } else {
    btn1.innerText = 'EXPLORE + ';
    mybox.style.display = 'none';
  }
});
