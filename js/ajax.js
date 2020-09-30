$(document).ready(function() {
    // $("#ajax_form").submit(
    //     function() {
    //         sendAjaxForm('ajax_form', 'php/formhandler.php');
    //         return false;
    //     }
    // );
    $response_html = "Заявка отправлена! <br> Наш менеджер свяжемся с вами в ближайшее время."

    $('.form_button').click(function(e) {
        e.preventDefault();

        $('.form').css('opacity', 0);

        setTimeout(
            () => {
                $('.form').hide();
                $('.response').html($response_html);
                $('.response').css({ 'opacity': '1', 'visibility': 'visible' });

            }, 1000
        )

        return false
    });
});

function sendAjaxForm(ajax_form, url) {
    $.ajax({
        url: url,
        type: "POST",
        dataType: "html",
        data: $("#" + ajax_form).serialize(),
        success: function(response) {
            result = $.parseJSON(response);
            alert("Well done");
        },
        error: function(response) {
            alert("error");

        }
    });

}