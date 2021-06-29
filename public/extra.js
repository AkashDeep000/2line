var mainNav = document.querySelector('.mainNav');
var mainNavState = false;
  function showNav() {
  mainNav.style.display = "block";
  mainNavState = true;
 // console.log(mainNavState)
};
  function closeNav() {
  mainNav.style.display = "none";
  mainNavState = false;
 // console.log(mainNavState)
};
//console.log(mainNavState)

window.addEventListener('mouseup', function(e) {
    if (mainNavState) {
   // if (event.target != mainNav) {
   if (!mainNav.contains(e.target)){
        mainNav.style.display = "none";
        mainNavState = false;
        //console.log('hidding');
        //console.log(mainNavState)
    }
  };
});

//scroll hide show
var prevScrollpos = window.pageYOffset;
  
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  //console.log(currentScrollPos)
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.scrollNav').style.position = "sticky";
    document.querySelector('.tabNav').style.top = "4.95rem";
  //  document.getElementById("header-ads").style.display = "none";
  } else {
    document.querySelector('.scrollNav').style.position = "static";
    document.querySelector('.tabNav').style.top = "2.8rem";
   // document.getElementById("header-ads").style.display = "block";
  }
  prevScrollpos = currentScrollPos;
}