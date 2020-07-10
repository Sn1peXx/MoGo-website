$(function(){

    var header =$("#header"),
     introH = $("#intro").innerHeight(),
     scrollOffset =$(window).scrollTop(); 

    /*HEADER FIXED*/
 
     checkScroll(scrollOffset);

    $(window).on("scroll", function() {


        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });
       
function checkScroll(scrollOffset){
   

    if(scrollOffset >= introH){
        header.addClass("fixed");
    }
        else{
         header.removeClass("fixed");
        }
}
    
    /*Smoot scroll*/

    $("[data-scroll]").on("click",function(event){
        event.preventDefault();

    var $this=$(this),
     blockId = $(this).data('scroll'),
    blockOffset = $(blockId).offset().top;

   

    $("html,body").animate({
    
        scrollTop: blockOffset
    },500)
   
});

    $("#nav__toggle").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    $("[data-collapse]").on("click",function(event){

        event.preventDefault();

        var $this=$(this),
        blockId=$this.data('collapse');

        $(blockId).slideToggle(); 
    });

    $("[data-slider]").slick({
        infinite:true,
        fade:false,
        slidesToShow:1,
        SlidesToScroll:1,

    });

    document.getElementById('btn').onclick=function(){
        alert('Will be soon')
    }
 


});