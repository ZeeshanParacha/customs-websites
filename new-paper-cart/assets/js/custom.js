$(document).ready(function () {

    $("#owlslider").owlCarousel({

        loop: true,
        nav: true,
        items: 1

        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

});



/* owl testimonial */
$(document).ready(function () {

    $("#owl-testomonial").owlCarousel({

        loop: true,
        nav: true,
        items: 1

        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

});




/* All pages content change */


function newscontent1() {
    document.getElementById("ex1").style.display = "block";
    document.getElementById("ex2").style.display = "none";
    document.getElementById("ex3").style.display = "none";
    document.getElementById("ex4").style.display = "none";
}

function newscontent2() {
    document.getElementById("ex1").style.display = "none";
    document.getElementById("ex2").style.display = "block";
    document.getElementById("ex3").style.display = "none";
    document.getElementById("ex4").style.display = "none";
}

function newscontent3() {
    document.getElementById("ex1").style.display = "none";
    document.getElementById("ex2").style.display = "none";
    document.getElementById("ex3").style.display = "block";
    document.getElementById("ex4").style.display = "none";
}

function newscontent4() {
    document.getElementById("ex1").style.display = "none";
    document.getElementById("ex2").style.display = "none";
    document.getElementById("ex3").style.display = "none";
    document.getElementById("ex4").style.display = "block";
}



/* back to top arrow */

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('#back-to-top').tooltip('show');

});


/* Radio button */

// function select(){

//    var Radio1 = document.getElementById("radio1");
//    var Radio2 = document.getElementById("radio2");

//    if(Radio1.checked){
//        windows.location.href= './newreader.html';
//    }
//    else{windows.location.href = '/subscribe.html'}
// ;
// }


function sliderimg1() {
   document.getElementById("hdimg").style.background = "url('./assets/images/banner2.jpg') top center no-repeat" ;
   document.getElementById("hdimg").style.backgroundSize ="cover";
   document.getElementById("h1").innerHTML = "Get Free Monthly Scrap Picking Subscription";
}
function sliderimg2() {
    document.getElementById("hdimg").style.background = "url('./assets/images/banner.jpg') top center no-repeat" ;
    document.getElementById("hdimg").style.backgroundSize ="cover";
    document.getElementById("h1").innerHTML = "India's <span class='first'>first</span> online Newspaper subscription portal"
 }
 function sliderimg3() {
    document.getElementById("hdimg").style.background = "url('./assets/images/banner3.jpg') top center no-repeat" ;
    document.getElementById("hdimg").style.backgroundSize ="cover";
    document.getElementById("h1").innerHTML = " <span style='color:#fff; background-color:#30a653'>No need to wake up early to catch your Hawker! </span>";
 }
 function sliderimg4() {
    document.getElementById("hdimg").style.background = "url('./assets/images/banner4.jpg') top center no-repeat" ;
    document.getElementById("hdimg").style.backgroundSize ="cover";
    document.getElementById("h1").innerHTML = '<span style="color:#fff; background-color:#222222">"All I know is what I read in the Papers" </span> <span style="color:#0d59a1; background-color:#222222"">Will Rogers </span>';
    
 }
