function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}
var isMobile = detectMob();

$(document).ready(function() {
    function setViewport() {
        var vw = window.innerWidth * 0.01;
        document.documentElement.style.setProperty('--vw', `${vw}px`);
        
        var vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }setViewport();
    
    
    
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
                    top: $(pid).offset()?.top
                });
            }
        });
    }
    filldivArr();
    
    //remake section array with each resize
    $( window ).resize(function() {
        setViewport();
        
        filldivArr();
    });
    
    
    //timer to make break between scroll page
    var timeScroll = true;
    function timeoutScroll(){
        setTimeout(function() {
            timeScroll = true;
        }, (animationTime + 200));
    }
    
    //add class to start animation
    function animation(pos){
       console.log(pos); 
        $(divArr[pos].id+' .describe').addClass('animation_describe');
        $(divArr[pos].id+' .me-png').addClass('animation_img');
    }
    //animation(0);
    //check actual div
    function checkDivIndex(pos){
        
        var r;
        var first = true;
        //reverse array
        divArr.slice().reverse().forEach(val => {
            if(val.top <= (pos + (window.innerHeight/2)) && first) {
                r = val.index;
                first = false;
            }
        });
        return r;
    }

    //for check we scroll down or up
    var lastScrollTop = 0;
    
    //smooth scroll to next div when scroll activ
    //if(!isMobile){ turn on smooth scroll
    if(false){
    $(document).scroll(function(){ 
       var scrollTop = window.pageYOffset;// || document.documentElement.scrollTop; 
            if(timeScroll == true){
                var divIndex = checkDivIndex(lastScrollTop);
                console.log('acD '+divIndex);
            
                if (scrollTop > lastScrollTop){
                    // downscroll code

                   if (divIndex<(divArr.length-1)){
                       $([document.documentElement, document.body]).animate({
                            scrollTop: $(divArr[divIndex+1].id).offset().top
                        }, animationTime);
                       animation(divIndex+1);
                   }
                } else {
                      // upscroll code
                       if (divIndex>0){
                        $([document.documentElement, document.body]).animate({
                            scrollTop: $(divArr[divIndex-1].id).offset().top
                        }, animationTime);
                        animation(divIndex-1);
                       }
                }
                timeScroll = false;
                timeoutScroll();

            
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });}
    
    //scroll for menu buttons
    $('.menu-btn').click(function(){
        timeScroll = false;
        timeoutScroll();
        
        let div;
        switch(this.id){
            case 'Menu-About':
                div = '#About';
                break;
            case 'Menu-project':
                div = '#Comarch';
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
    
    //scroll for menu buttons
    $('.overall-project-single').click(function(){
        timeScroll = false;
        timeoutScroll();
        console.log(this);
        let div;
        switch(this.id){
            case 'overall-project-single-viaxar':
                div = '#Viaxar-project';
                break;
            case 'overall-project-single-ots':
                div = '#Runner-project';
                break;
            case 'overall-project-single-pnu':
                div = '#PerlinUnity-project';
                break;
            case 'overall-project-single-pnjs':
                div = '#PerlinJS-project';
                break;
            case 'overall-project-single-other':
                div = '#Other-project';
                break;
        }
        
        if (div != undefined)
        $([document.documentElement, document.body]).animate({
            scrollTop: $(div).offset().top
        }, animationTime);
    });
	
	const images = document.querySelectorAll('#logos_background img');

	images.forEach(img => {
		// Losowa pozycja w poziomie (lewo-prawo)
		const randomLeft = Math.random() * 60 + 20 ;
		// Losowa pozycja w pionie (góra-dół)
		const randomTop = Math.random() * 60 + 20;

		img.style.left = `${randomLeft}%`;
		img.style.top = `${randomTop}%`;
	});

});