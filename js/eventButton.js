$('.js-buttons').mousedown(function () {
    $(this).addClass('buttons_scale ');
}).click(function () {
    return false;
}).mouseup(function () {
    $(this).removeClass('buttons_scale');
});