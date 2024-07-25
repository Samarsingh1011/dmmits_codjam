// $(document).ready(function() {
//     function checkInView() {
//         $('.card').each(function() {
//             var elementTop = $(this).offset().top;
//             var elementBottom = elementTop + $(this).outerHeight();
//             var viewportTop = $(window).scrollTop();
//             var viewportBottom = viewportTop + $(window).height();

//             if (elementBottom > viewportTop && elementTop < viewportBottom) {
//                 $(this).addClass('in-view');
//             } else {
//                 $(this).removeClass('in-view');
//             }
//         });
//     }

//     $(window).on('scroll resize', checkInView);
//     $(window).trigger('scroll');
// });
