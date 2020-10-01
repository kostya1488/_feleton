$(document).ready(function() {
    $("form").submit(
        function() {
            sendAjaxForm('../php/formhandler.php');
            return false;
        }
    );


    $response_true_html = "Заявка отправлена! <br> Наш менеджер свяжемся с вами в ближайшее время"
    $response_false_html = "Заявка не отправлена! <br> Произошла ошибка!"
});

function showResponseText(response_text) {
    $('form').css('opacity', 0);

    setTimeout(
        () => {
            $('form').hide();
            $('.response').html(response_text);
            $('.response').css({ 'opacity': '1', 'visibility': 'visible' });

        }, 1000
    )
}

function sendAjaxForm(url) {
    $.ajax({
        url: url,
        type: "POST",
        dataType: "html",
        data: $('form').serialize(),
        success: function(response) {
            // result = $.parseJSON(response);
            showResponseText($response_true_html)
        },
        error: function(response) {
            $('.response').css('color', 'red');

            showResponseText($response_false_html)

        }
    });

}