const convertion = function () {
    const value = $(".form__input.currency").val();
    const price = value.replace('R$ ', '').replace(/\./g, "").replace(',', '.');
    const hb_value = 44;

    $('.result h1').text((price / hb_value).toFixed(1));
};

$(document).ready(function () {
    $(".form__input.currency").maskMoney({
        prefix: "R$ ",
        decimal: ",",
        thousands: "."
    });

    $('.form__submit__button').click(function () {
        convertion();
    });

    $(".form__input.currency").on("keyup", function (event) {
        if (event.keyCode === 13) {
            convertion();
        }
    });

});