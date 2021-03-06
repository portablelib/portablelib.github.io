
(function ($) {
    "use strict";

    $(".normalfeather").attr('title', 'Normal Feather');
    $(".studentfeather").attr('title', 'Student Feather');
    $(".premiumfeather").attr('title', 'Premium Feather');
    $(".ultrapremiumfeather").attr('title', 'Ultra premium Feather');
    $(".partnerfeather").attr('title', 'Partner Feather');
    
    $(document).ready(() => {
        

        $(".btn .fa-play-circle-o").on('click', () => {
            $(".fa-play-circle-o").hide();
            $(".fa-pause-circle-o").fadeIn();
            $("#bgm")[0].play();
        });

        $(".btn .fa-pause-circle-o").on('click', () => {
            $(".fa-pause-circle-o").hide();
            $(".fa-play-circle-o").fadeIn();
            $("#bgm")[0].pause();
        });


    })
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }
        if(check){
                
            swal({
            title: "Congratulations!",
            text: "You are now connect with Portablelib",
            type: "success",
            }, function(){ 
                document.getElementById('form').submit()
            })
        check=true;
    }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

    
    

})(jQuery);