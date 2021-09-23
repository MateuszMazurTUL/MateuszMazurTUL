/*
TODO

=błąd z przewijaniem strony
zoom, phone size
--- text wypływający poza div
-opisy
zdjęcia
drobny resizing interiorSection
-animacje
*/
$(document).ready(function() {

    var divID;
    var divIndex;
    var animationTime = 900;
    
    var divArr;
    
    //Get and add all section to array
    function filldivArr(){
        divArr = new Array;
        Object.values($('section')).forEach((val,pindex) => {
            if(val.id) {
                let pid = '#'+val.id;

                divArr.push({
                    id: pid,
                    index: pindex,
                    top: $(pid).offset().top
                });
            }
        });
    }
    filldivArr();
    
    //remake section array with each resize
    $( window ).resize(function() {
        filldivArr()
    });
    
    
    //timer to make break between scroll page
    var timeScroll = true;
    function timeoutScroll(){
        setTimeout(function() {
            timeScroll = true;
        }, (animationTime + 100));
    }
    
    
    //check actual div
    function checkDivIndex(pos){
        
        var r;
        var first = true;
        //reverse array
        divArr.slice().reverse().forEach(val => {
            if(val.top <= (pos + 400) && first) {
                r = val.index;
                first = false;
            }
        });
        return r;
    }

    //for check we scroll down or up
    var lastScrollTop = 0;
    
    //smooth scroll to next div when scroll activ
    $(document).scroll(function(){ 
       var scrollTop = window.pageYOffset;// || document.documentElement.scrollTop; 
        if(timeScroll == true){
            var divIndex = checkDivIndex(lastScrollTop);

            
           if (scrollTop > lastScrollTop){
              // downscroll code

               if (divIndex<(divArr.length-1))
               $([document.documentElement, document.body]).animate({
                    scrollTop: $(divArr[divIndex+1].id).offset().top
                }, animationTime);
               //animation(divIndex+1);
           } else {
              // upscroll code
               if (divIndex>0)
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(divArr[divIndex-1].id).offset().top
                }, animationTime);
                //animation(divIndex-1);
           }
            timeScroll = false;
            timeoutScroll();

        }
       lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });
    
    //scroll for menu buttons
    $('.menu-btn').click(function(){
        timeScroll = false;
        timeoutScroll();
        
        let div;
        switch(this.id){
            case 'Menu-About':
                div = '#About';
                break;
            case 'Menu-Viaxar-project':
                div = '#Viaxar-project';
                break;
            case 'Menu-Hobby':
                div = '#Hobby';
                break;
            case 'Menu-Contact':
                div = '#Contact';
                break;
        }
        
        if (div != undefined)
        $([document.documentElement, document.body]).animate({
            scrollTop: $(div).offset().top
        }, animationTime);
    });
});