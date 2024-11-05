$(document).ready(function () {
    //ANIMATION
    function animation() {
        let  windowHeight = $(window).height();
        let scroll = $(window).scrollTop();
        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');

            if (position < windowHeight + scroll - 100) {
                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);
            }
        });
    }

    $(window).scroll(function () {
        animation();
    });
    animation();

    //team-slider

    if ($(".professionals-slider").length > 0) {
        $(".professionals-slider").owlCarousel({
            loop: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                768: {
                    items: 1,
                    margin: 30

                }
            }
        });
    }

    // Form Validation
    if ($('.contact-form').length > 0) {

        $('.contact-form').validate({

            highlight: function (element) {
                $(element).addClass('is-invalid').removeClass('is-valid');
            },
            unhighlight: function (element) {
                $(element).addClass('is-valid').removeClass('is-invalid');
            },
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                subject: {
                    required: true
                },
                message: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: 'This field is required'
                },
                email: {
                    required: 'The Email* field is required',
                    email: 'Please provide a valid email address'
                },
                subject: {
                    required: 'The subject* field is required'
                },
                message: {
                    required: 'The Message* field is required'
                }
            },

            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo(element.closest(".form-group").find(".error-msg"));
            }

        });

    }
});