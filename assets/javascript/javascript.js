
// new script start
    
$(document).on("click", function(event){
    var $trigger = $(".btn-clicked");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".drop2").slideUp("fast");
    }
});

$(".btn-clicked").click(function(){
    $('.drop2').fadeOut();
    $(this).parent().find('.drop2').toggle();
});
// right sidebar j-query
$(".chat-user .author-thumb, .author-name, .olympus-chat, .little-delete, .start-con, .block-con, .add-con").click(function(){
    $('.my-popup').slideToggle(400); 
});
$("#olymp-menu-icon").click(function(){
    $('#small-bar').hide(100);
    $('#large-bar').show(500); 
});
$("#olymp-close-icon").click(function(){
    $('#large-bar').hide(500);
    $('#small-bar').show(800); 
});
// right sidebar j-query
$(document).on("click", function(event){
    var $trigger = $(".btn-clicked");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".drop2").slideUp("fast");
    }
});
// spectrum page start
$(".spectrum-card-small").on('click',function(){
    $('.spectrum-card-small').show();
    $(this).hide();
    $('.spectrum-card-large').hide();
    $(this).parent().find('.spectrum-card-large').fadeIn();
});
$(document).mouseup(function(e) 
{
    var container = $(".spectrum-card-large");

    // if the targetof the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $('.spectrum-card-small').show();
        container.hide();
    }
});
// spectrum page end
// Show hide popover
$(".btn-click").click(function(){
    $('.drop').fadeOut();
    $(this).parent().find('.drop').toggle();
});

    $(document).on("click", function(event){
        var $trigger = $(".btn-click");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $(".drop").slideUp("fast");
        }
    });

    $('#btn-click').on('click',function () {
        $('#drop1').toggle();
    });

    $(document).on("click", function(event){
        var $trigger = $(".btn-click");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $(".drop1").slideUp("fast");
        }
    });

    $(".btn").click(function(){
        $(".input").toggleClass("active slow").focus;

        $(".input").val("");
    });

    $('#file-click').click(function(e){
        e.preventDefault();
        $("#popup-textarea").addClass("display-text");
        $("#file-click").addClass("icon-color");
        $("#map-click,#user-click,#clip-click,#music-click").removeClass('icon-color');
        $("#place-search,#people-search,#music-search,#link-search").removeClass("display-text");

    });

    $('#map-click').click(function(e){
        e.preventDefault();
        $("#place-search").addClass("display-text");
        $("#map-click").addClass("icon-color");
        $("#file-click,#user-click,#music-click,#clip-click").removeClass('icon-color');
        $("#popup-textarea,#people-search,#music-search,#link-search").removeClass("display-text");

    });

    $('#user-click').click(function(e){
        e.preventDefault();
        $("#people-search").addClass("display-text");
        $("#user-click").addClass("icon-color");
        $("#file-click,#map-click,#clip-click,#music-click").removeClass('icon-color');
        $("#popup-textarea,#place-search,#music-search,#link-search").removeClass("display-text");

    });

    $('#music-click').click(function(e){
        e.preventDefault();
        $("#music-search").addClass("display-text");
        $("#music-click").addClass("icon-color");
        $("#file-click,#map-click,#clip-click,#user-click").removeClass('icon-color');
        $("#popup-textarea,#place-search,#people-search,#link-search").removeClass("display-text");

    });
    $('#clip-click').click(function(e){
        e.preventDefault();
        $("#link-search").addClass("display-text");
        $("#clip-click").addClass("icon-color");
        $("#file-click,#map-click,#music-click,#user-click").removeClass('icon-color');
        $("#popup-textarea,#place-search,#people-search,#music-search").removeClass("display-text");

    });

    var mouse_is_inside = false;
    $('#moment-btn').hover(function(){
        mouse_is_inside=true;
    }, function(){
        mouse_is_inside=false;
    });

    $("body").mouseup(function(){
        if(! mouse_is_inside) $('#moment,.people-drop,.places-drop').hide();
    });
    $('#moment').on('click',function () {
        $('#moment').show();
    });

    $('#moment-btn').click(function () {
        $('#moment').toggle(300);
    });


    $(".open").on("click", function(){
        $(".popup-overlay, .popup-content").addClass("active");
      });
      
      //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
      $(".close").on("click", function(){
        $(".popup-overlay, .popup-content").removeClass("active");
      });


      $('#file-click1').click(function(e){
        e.preventDefault();
        $("#popup-textarea1").addClass("display-text");
        $("#file-click1").addClass("icon-color");
        $("#map-click1,#user-click1,#clip-click1,#music-click1").removeClass('icon-color');
        $("#place-search1,#people-search1,#music-search1,#link-search1").removeClass("display-text");

    });

    $('#map-click1').click(function(e){
        e.preventDefault();
        $("#place-search1").addClass("display-text");
        $("#map-click1").addClass("icon-color");
        $("#file-click1,#user-click1,#music-click1,#clip-click1").removeClass('icon-color');
        $("#popup-textarea1,#people-search1,#music-search1,#link-search1").removeClass("display-text");

    });

    $('#user-click1').click(function(e){
        e.preventDefault();
        $("#people-search1").addClass("display-text");
        $("#user-click1").addClass("icon-color");
        $("#file-click1,#map-click1,#clip-click1,#music-click1").removeClass('icon-color');
        $("#popup-textarea1,#place-search1,#music-search1,#link-search1").removeClass("display-text");

    });

    $('#music-click1').click(function(e){
        e.preventDefault();
        $("#music-search1").addClass("display-text");
        $("#music-click1").addClass("icon-color");
        $("#file-click1,#map-click1,#clip-click1,#user-click1").removeClass('icon-color');
        $("#popup-textarea1,#place-search1,#people-search1,#link-search1").removeClass("display-text");

    });
    $('#clip-click1').click(function(e){
        e.preventDefault();
        $("#link-search1").addClass("display-text");
        $("#clip-click1").addClass("icon-color");
        $("#file-click1,#map-click1,#music-click1,#user-click1").removeClass('icon-color');
        $("#popup-textarea1,#place-search1,#people-search1,#music-search1").removeClass("display-text");

    });
    $(document).ready(function(){

        dpick('#year1','#month','#day',1);
        });
        
        function dpick(year,month,day,td){
        if(td==1){
        var today = new Date();
        $(year).val(today.getFullYear());
        $(month).val(today.getMonth());
        }
        $(year).change(function(){
        dpick(year,month,day);
        });
        $(month).change(function(){
        dpick(year,month,day);
        }); 
        var month_val = $(month).val();
        var i=0;
        $(day).empty();
        if(month_val=="1"){
        if($(year).val()%4 == 0){
        for(i=1;i<=29;i++){
            var x="0"
            if(i < 10){
                x=x+i;
        $(day).append($("<option></option>").attr("value", x).text(x));
            }
            else{
        $(day).append($("<option></option>").attr("value", i).text(i));
            }
        }
        }else{
        for(i=1;i<=28;i++){
                        var x="0";
            if(i < 10){
                x=x+i;
        $(day).append($("<option></option>").attr("value", x).text(x));
            }
            else{
        $(day).append($("<option></option>").attr("value", i).text(i));
            }
        }
        }
        }
        else if(month_val=="8" || month_val=="3" || month_val=="5" || month_val=="10"){
        for(i=1;i<=30;i++){
        var x="0"
            if(i < 10){
                x=x+i;
            
        $(day).append($("<option></option>").attr("value", x).text(X));

            }
            else{
            
        $(day).append($("<option></option>").attr("value", i).text(i));

            }
        }
        }
        else{
        for(i=1;i<=31;i++){
            var x="0"
            if(i < 10){
                x=x+i;
                $(day).append($("<option></option>").attr("value", x).text(x));
            }
            else{
                $(day).append($("<option></option>").attr("value", i).text(i));
            }

        }
        }
        if(td==1){
        $(day).val(today.getDate());
        }
        }

// new js code

$(document).ready(function(){

dpick('#year1','#month1','#day1',1);
});

function dpick(year,month,day,td){
if(td==1){
var today = new Date();
$(year).val(today.getFullYear());
$(month).val(today.getMonth());
}
$(year).change(function(){
dpick(year,month,day);
});
$(month).change(function(){
dpick(year,month,day);
}); 
var month_val = $(month).val();
var i=0;
$(day).empty();
if(month_val=="1"){
if($(year).val()%4 == 0){
for(i=1;i<=29;i++){
$(day).append($("<option></option>").attr("value", i).text(i));
}
}else{
for(i=1;i<=28;i++){
$(day).append($("<option></option>").attr("value", i).text(i));
}
}
}
else if(month_val=="8" || month_val=="3" || month_val=="5" || month_val=="10"){
for(i=1;i<=30;i++){
$(day).append($("<option></option>").attr("value", i).text(i));
}
}
else{
for(i=1;i<=31;i++){
$(day).append($("<option></option>").attr("value", i).text(i));
}
}
if(td==1){
$(day).val(today.getDate());
}
}

/////////////////////////////////////////////////




// $(document).ready(function(){
//   $("#nav-icon1").click(function(){
//     $(".header .secondry-container, .header .profile-section").Fadetoggle();
//   });
// });

$(document).ready(function () {
    $('#nav-icon1').click(function () {
        $('#profile-dropdown').fadeToggle();
    });
});

$(document).ready(function () {
    $('.open').click(function () {

       $('#open').toggle();
    })

})



$(document).ready(function () {
    $('.close').click(function () {

        $('#open').toggle();
    })

})

// $(document).ready(function () {
//     $('#profile-dot').click(function () {
//
//         $('#people-drop').toggle();
//     })
//
// })
//



// $(document).ready(function(){
//     $('s').click(function(){
//         $(this).toggleClass('open');
//     });
// });

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var getdiv = document.getElementById("icontext");
output.innerHTML = slider.value;

function clickfunction() {
    switch (output.innerHTML) {
        case '1998':
            var node = document.createElement("dv");
            var textnode = document.createTextNode("Water");
            node.appendChild(textnode);
            document.getElementById("create").appendChild(node);
            break;
        default:
            'not selected';
    }
}
slider.oninput = function() {
    output.innerHTML = this.value;
    console.log(output.innerHTML);
    if(output.innerHTML == ''){
        output.innerHTML = '1991';
    }
    else if(output.innerHTML == 2018){
        getdiv.style.right = '10px';
    }
    else if(output.innerHTML == 2017){
        getdiv.style.right = '23px';
    }
    else if(output.innerHTML == 2016){
        getdiv.style.right = '36px';
    }
    else if(output.innerHTML == 2015){
        getdiv.style.right = '49px';
    }
    else if(output.innerHTML == 2014){
        getdiv.style.right = '62px';
    }
    else if(output.innerHTML == 2013){
        getdiv.style.right = '75px';
    }
    else if(output.innerHTML == 2012){
        getdiv.style.right = '86px';
    }
    else if(output.innerHTML == 2011){
        getdiv.style.right = '99px';
    }
    else if(output.innerHTML == 2010){
        getdiv.style.right = '113px';
    }
    else if(output.innerHTML == 2009){
        getdiv.style.right = '126px';
    }
    else if(output.innerHTML == 2008){
        getdiv.style.right = '139px';
    }
    else if(output.innerHTML == 2007){
        getdiv.style.right = '152px';
    }
    else if(output.innerHTML == 2006){
        getdiv.style.right = '163px';
    }
    else if(output.innerHTML == 2005){
        getdiv.style.right = '176px';
    }
    else if(output.innerHTML == 2004){
        getdiv.style.right = '190px';
    }
    else if(output.innerHTML == 2003){
        getdiv.style.right = '203px';
    }
    else if(output.innerHTML == 2002){
        getdiv.style.right = '212px';
    }
    else if(output.innerHTML == 2001){
        getdiv.style.right = '228px';
    }
    else if(output.innerHTML == 2000){
        getdiv.style.right = '242px';
    }
    else if(output.innerHTML == 1999){
        getdiv.style.right = '253px';
    }
    else if(output.innerHTML == 1998){
        getdiv.style.right = '264px';
    }
    else if(output.innerHTML == 1997){
        getdiv.style.right = '278px';
    }
    else if(output.innerHTML == 1996){
        getdiv.style.right = '291px';
    }
    else if(output.innerHTML == 1995){
        getdiv.style.right = '303px';
    }
    else if(output.innerHTML == 1994){
        getdiv.style.right = '317px';
    }
    else if(output.innerHTML == 1993){
        getdiv.style.right = '329px';
    }
    else if(output.innerHTML == 1992){
        getdiv.style.right = '342px';
    }
    else if(output.innerHTML == 1991){
        getdiv.style.right = '354px';
    }
    else if(output.innerHTML == 1990){
        getdiv.style.right = '368px';
    }
    else if(output.innerHTML == 1989){
        getdiv.style.right = '383px';
    }
    else if(output.innerHTML == 1988){
        getdiv.style.right = '394px';
    }
    else if(output.innerHTML == 1987){
        getdiv.style.right = '409px';
    }
}
function PeopleFunction(val) {
    if (val === 1){
        $('#people-drop-1').toggle()
    }
    else if (val === 2){
        $('#people-drop-2').toggle()
    }
    else if (val === 3){
        $('#people-drop-3').toggle()
    }
    else if (val === 4){
        $('#people-drop-4').toggle()
    }
    else if (val === 5){
        $('#people-drop-5').toggle()
    }

    else if (val === 6){
        $('#people-drop-6').toggle()
    }
    else if (val === 7){
        $('#people-drop-7').toggle()
    }
    else if (val === 8){
        $('#people-drop-8').toggle()
    }
    else if (val === 9){
        $('#people-drop-9').toggle()
    }
    else if (val === 10){
        $('#people-drop-10').toggle()
    }

    else if (val === 11){
        $('#people-drop-11').toggle()
    }

    else if (val === 12){
        $('#people-drop-12').toggle()
    }
}
PeopleFunction(val);

function PlaceFunction(val) {
if (val === 1){
    $('#place-drop-1').toggle()
}
else if (val === 2){
    $('#place-drop-2').toggle()
}
else if (val === 3){
    $('#place-drop-3').toggle()
}
else if (val === 4){
    $('#place-drop-4').toggle()
}
else if (val === 5){
    $('#place-drop-5').toggle()
}

else if (val === 6){
    $('#place-drop-6').toggle()
}
else if (val === 7){
    $('#place-drop-7').toggle()
}
else if (val === 8){
    $('#place-drop-8').toggle()
}
else if (val === 9){
    $('#place-drop-9').toggle()
}
else if (val === 10){
    $('#place-drop-10').toggle()
}
else if (val === 11){
    $('#place-drop-11').toggle()
}
else if (val === 12){
    $('#place-drop-12').toggle()
}


}


PlaceFunction(val);
