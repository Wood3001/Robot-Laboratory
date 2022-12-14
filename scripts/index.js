$(document).ready(function(){

    var seeEyes = false;
    var seeNose = false;
    var seeMouth = false;
    var seeHead = false;
    
    var i = 0;
    var j = 0;
    var k = 0;
    var l = 0;
    
    const arrEyeL = ['#eye1L', '#eye2L', '#eye3L', '#eye4L'];
    const arrEyeR = ['#eye1R', '#eye2R', '#eye3R', '#eye4R'];
    const arrNose = ['#nose1', '#nose2', '#nose3', '#nose4'];
    const arrMouth = ['#mouth1', '#mouth2', '#mouth3', '#mouth4'];
    const arrHead = ['#head1', '#head2', '#head3', '#head4'];

    const errorX = $('.errorX');
    const faceColor = ['#58595b', '#a7a9ac', '#2b3990', '#27aae1', '#7f3f98', '#cfacd1', '#ffde17', '#fff'];

    $('#eyeBtn').on('click',function(){eyes()});
    $('#noseBtn').on('click',function(){nose()});
    $('#mouthBtn').on('click',function(){mouth()});
    $('#headBtn').on('click',function(){head()});
    $('#resetBtn').on('click',function(){reset()});
    
    function eyes() {
        if (seeHead==false){
            gsap.fromTo(errorX,{opacity:1},{opacity:0, duration:2});
        } else {
            if (seeEyes==false) {
                gsap.fromTo(arrEyeL[0],{x:-200, opacity:0}, {x:0, opacity:1, duration: .5, ease:"bounce"});
                gsap.fromTo(arrEyeR[0],{x:200, opacity:0}, {x:0, opacity:1, duration: 1, ease:"bounce"});
                seeEyes = true;
            } else if (i <= arrEyeL.length - 1){
                gsap.fromTo(arrEyeL[i],{x:0, opacity:1}, {x:-200, opacity:0, duration: .5, ease:"easeOut"});
                gsap.fromTo(arrEyeR[i],{x:0, opacity:1}, {x:200, opacity:0, duration: 1, ease:"easeOut"});
                i++;
                if (i <= arrEyeL.length - 1) {
                    gsap.fromTo(arrEyeL[i],{x:-200, opacity:0}, {x:0, opacity:1, duration: .5, ease:"bounce"});
                    gsap.fromTo(arrEyeR[i],{x:200, opacity:0}, {x:0, opacity:1, duration: 1, ease:"bounce"});
                    seeEyes = true;
                    return;
                } else {
                    i = 0;
                    gsap.fromTo(arrEyeL[0],{x:-200, opacity:0}, {x:0, opacity:1, duration: .5, ease:"bounce"});
                    gsap.fromTo(arrEyeR[0],{x:200, opacity:0}, {x:0, opacity:1, duration: 1, ease:"bounce"});
                }  
            } 
        }
    };
    
    function nose() {
        if (seeHead==false){
            gsap.fromTo(errorX,{opacity:1},{opacity:0, duration:2});
        } else {
            if (seeNose==false) {
                gsap.fromTo(arrNose[0],{y:-500, opacity:0}, {y:0, opacity:1, duration: .5, ease:"bounce"});
                seeNose = true;
            } else if (j <= arrNose.length - 1) {
                gsap.fromTo(arrNose[j],{y:0, opacity:1}, {y:-500, opacity:0, duration: .5, ease:"easeOut"});
                j++;
                if (j <= arrNose.length - 1) {
                    gsap.fromTo(arrNose[j],{y:-500, opacity:0}, {y:0, opacity:1, duration: .5, ease:"bounce"});
                    seeNose = true;
                    return;
                } else {
                    j = 0;
                    gsap.fromTo(arrNose[0],{y:-500, opacity:0}, {y:0, opacity:1, duration: .5, ease:"bounce"});
                }
            }
        } 
    };
    
    function mouth() {
        if (seeHead==false){
            gsap.fromTo(errorX,{opacity:1},{opacity:0, duration:2});
        } else {
            if (seeMouth==false) {
                gsap.fromTo(arrMouth[0],{y:500, opacity:0}, {y:0, opacity:1, duration: .5, ease:"bounce"});
                seeMouth = true;
            } else if (k <= arrMouth.length - 1) {
                gsap.fromTo(arrMouth[k],{y:0, opacity:1}, {y:500, opacity:0, duration: .5, ease:"easeOut"});
                k++;
                if (k <= arrMouth.length - 1) {
                    gsap.fromTo(arrMouth[k],{y:500, opacity:0}, {y:0, opacity:1, duration: .5, ease:"bounce"});
                    seeMouth = true;
                    return;
                } else {
                    k = 0;
                    gsap.fromTo(arrMouth[0],{y:500, opacity:0}, {y:0, opacity:1, duration: .5, ease:"bounce"});
                }
            }
        }
    };

    function head() {
            if (seeHead==false) {
                gsap.fromTo(arrHead[0],{y:500, opacity:0}, {y:0, opacity:1, duration: .5, ease:"bounce"});
                $('.color1').css("fill", faceColor[0]);
                $('.color2').css("fill", faceColor[1]);
                seeHead = true;
            } else if (l <= arrHead.length - 1) {
                gsap.fromTo(arrHead[l],{y:0, opacity:1}, {y:500, opacity:0, duration: .5, ease:"easeOut"});
                l++;
                $('.color1').css("fill", faceColor[l*2]);
                $('.color2').css("fill", faceColor[l*2+1]);
                if (l <= arrHead.length - 1) {
                    gsap.fromTo(arrHead[l],{y:500, opacity:0}, {y:0, opacity:1, duration: .5, ease:"bounce"});
                    seeHead = true;
                    return;
                } else {
                    l = 0;
                    gsap.fromTo(arrHead[0],{y:500, opacity:0}, {y:0, opacity:1, duration: .5, ease:"bounce"});
                    $('.color1').css("fill", faceColor[0]);
                    $('.color2').css("fill", faceColor[1]);
                }
            }
        };   
    });
    
    function reset() {
        location.reload();
    } 
    
