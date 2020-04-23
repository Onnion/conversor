$(document).ready(function () {
    $(".form__input.currency").maskMoney({
        prefix: "R$ ",
        decimal: ",",
        thousands: "."
    });

    $('.form__submit__button').click(function() {
        const value = $(".form__input.currency").val();
        const price =  value.replace('R$ ', '').replace(',', '.');
        const hb_value = 44;

        console.log(price);
        $('.result h1').text((price / hb_value).toFixed(1));
    });

});