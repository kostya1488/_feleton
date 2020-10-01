$(document).ready(function() {
    $("#form_main").submit(() => {
        sendAjaxForm('form_main', '../php/formhandler_main.php');
        return false;
    });
    $("#form_callback").submit(() => {
        sendAjaxForm('form_callback', '../php/formhandler_callback.php');
        return false;
    });

    $response_true_html = "Заявка отправлена! <br> Наш менеджер свяжемся с вами в ближайшее время"
    $response_false_html = "Заявка не отправлена! <br> Произошла ошибка!"
});

function showResponseText(response_text) {
    $('form').css('opacity', 0);

    setTimeout(() => {
        $('form').hide();
        $('.response').html(response_text);
        $('.response').css({ 'opacity': '1', 'visibility': 'visible' });
    }, 1000)
}

function sendAjaxForm(form_id, url) {
    $.ajax({
        url: url,
        type: "POST",
        dataType: "html",
        data: $('#' + form_id).serialize(),
        success: function(response) {
            showResponseText($response_true_html)
        },
        error: function(response) {
            $('.response').css('color', 'red');
            showResponseText($response_false_html)
        }
    });
}