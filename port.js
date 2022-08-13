$(document).ready(function(){

     //for navbar to appear on scroll
    $(window).scroll(function(){
        if(this.scrollY > 200){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    var typed = new Typed(".typing-1",{
        strings:[
            "network engineer", "Developer"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2",{
        strings:[
            "network engineer", "Developer"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});