/*===== MENU SHOW =====*/
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $("navbar").addClass("sticky")
        }
    })
    $(".menu-btn").click(function () {
        $(".link .menu").toggleClass("active")
        $(".menu-btn i").toggleClass("active")
    })
})
var typed = new Typed(".typing", {
    strings: ["ALTIUS SHOPPING",],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
    
})


/*===== REMOVE MENU MOBILE =====*/
