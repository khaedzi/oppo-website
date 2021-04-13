
let marginTopForW11des=document.getElementById("marginTopForW11des");
let hideThiredSection=document.getElementById("hideThiredSection");




// if ($(window).width() < 960) {
//     alert('Less than 960');
//  }
//  else {
//     alert('More than 960');
//  }
window.addEventListener('scroll',scroolling)

function scroolling() {

    if(window.pageYOffset>460 && window.pageYOffset<1200 && $(window).width() > 650 )
{
marginTopForW11des.style.opacity=1;
}
else if(window.pageYOffset>190 && window.pageYOffset<560 && $(window).width() < 650 ){

    marginTopForW11des.style.opacity=1;
}


else{
    marginTopForW11des.style.opacity=0;
    console.log(window.pageYOffset)
}    
}



window.addEventListener('scroll',scrollingTwo)


 function scrollingTwo() {
    if(window.pageYOffset>1400 && window.pageYOffset<3000 && $(window).width() > 650){
        hideThiredSection.style.opacity=1;
    }
    else if(window.pageYOffset>1090 && window.pageYOffset<3000 && $(window).width() < 650){
        hideThiredSection.style.opacity=1;
    }
    else if(window.pageYOffset>1200 && window.pageYOffset<3000 && ($(window).width() > 666)){


    }
    else{
        hideThiredSection.style.opacity=0;
        
    }


}


    
 