
// Community POPUP
$(document).ready(function(){
   $('.community ul.community-menu li a').click(function(){
    $('#community').modal('hide');
   });
}); 


/// Community POPUP show div first time
var isshow = localStorage.getItem('isshow');
if (isshow== null) {
localStorage.setItem('isshow', 1);
// Show popup here
setTimeout(function(){
jQuery('#community').modal('show');
});
}


// Add Address
$(document).ready(function(){
    $('#community .addAddressBtn').click(function(){
        $('#community').modal('hide');
    });
    $('#addAddress .btncancel').click(function(){
        $('#addAddress').modal('hide');
    })
});


// Login Popup
$('#loginNext').click(function(){
    $('#otpModal').modal('show');
    $('#loginModal').modal('hide');
});

$('#otpNext').click(function(){
    $('#yourAddressModal').modal('show');
    $('#otpModal').modal('hide');
});

$('#addAddressNext').click(function(){
    $('#regThanqModal').modal('show');
    $('#addAddress').modal('hide');
});

$('#yourAddressNext').click(function(){
    $('#successModal').modal('show');
    $('#yourAddressModal').modal('hide');
});


// OTP
$('.digit-group').find('input').each(function() {
    $(this).attr('maxlength', 1);
    $(this).on('keyup', function(e) {
        var parent = $($(this).parent());
        
        if(e.keyCode === 8 || e.keyCode === 37) {
            var prev = parent.find('input#' + $(this).data('previous'));
            
            if(prev.length) {
                $(prev).select();
            }
        } else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
            var next = parent.find('input#' + $(this).data('next'));
            
            if(next.length) {
                $(next).select();
            } else {
                if(parent.data('autosubmit')) {
                    parent.submit();
                }
            }
        }
    });
});






// STICKY HEADER

    var prevScrollpos = window.pageYOffset;
    // $(window).on('load scroll resize orientationchange', function () {
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        $(".header").removeClass("sticky");
      } else{
        $(".header").addClass("sticky");
      }
      prevScrollpos = currentScrollPos;
    }




// SEARCH
$(document).ready(function(e){
  "use strict";
  $('.selectpanel').each( function() {
    var to = $(this).data('search').toString();
    var text = $(this).find('[data-search="' + to + '"]').html();
    $(this).find('button span.search_by').html(text);
  });
  
  $('.selectpanel li a').on('click', function(e){
    var sp = $(this).closest('.selectpanel');
    var to = $(this).html();
    var text = $(this).html();
    sp.data('search', to);
    console.log(sp.find('.search_by'));
    sp.find('button span.search_by').html(text);
  });
});


// CART +/-
jQuery(document).ready(function(){


    // This button will increment the value
    $('.qtyplus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }

        
    });

});


// PRODUCT ADD TO CART
$(document).ready(function(){
    $('#probox1 .addbtn').click(function(){
        $('#probox1 .plusminus .cartform').addClass('active');
        $('#probox1 .addbtn').hide();
    })
})



$(document).ready(function() {

    fieldName = $('.qty').attr('field');
    // Get its current value
    var currentVal = parseInt($('input[name='+fieldName+']').val());

    if (currentVal < 1){
            console.log("Hiii");
            $('.cartform').hide();
            $('.addbtn').show();
        }
});




// CART SIDEBAR
// $( ".addbtn" ).click(function(){
//     $(".quickcart").addClass("show");
// });
$( ".quickcart .closebtn" ).click(function(){
    $(".quickcart").toggleClass("show");
});
$(".btncart").click(function(){
    $(".quickcart").toggleClass("show");
});



// ADDCART Button
$(document).ready(function(){
    $('.detbutton button.addcart').click(function(){
        $(this).addClass('selected');

        if($(this).hasClass("selected")){
            $('.detbutton button.selected span').text("Added");
        }else{
            $('.detbutton button.selected span').text("Add to Cart");
        }
    })
})

