function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validMail() {
    var mail1 = $('#register_email').val();
    var mail2 = $('#register_email2').val();
    var firstname = $('#register_firstname').val();
    var lastname = $('#register_lastname').val();

    if (validateEmail(mail1) && mail1 === mail2 && firstname.length > 0 && lastname.length > 0) {
        $('#register').attr("disabled", false);
    } else {
        $('#register').attr("disabled", true);
    }
}

function check(id, valid) {
    console.log(id);
    var value = $(id).val();
    console.log(value);
    if (valid(value)) {
        $(id).addClass('valid');
        $(id).removeClass('invalid');
    } else {
        $(id).addClass('invalid');
        $(id).removeClass('valid');
    }
}

function hasInput(value) {
    return value.length > 0;
}

$(function () {
    $('#register_email').parent().after('<div class="form-group">\n' +
        '                            <label for="register_email2">E-Mail-Adresse wiederholen</label>\n' +
        '                            <input id="register_email2" class="form-control" type="text" value="" name="register_email2">\n' +
        '                        </div>');
    $('#register').attr("disabled", true);
    $('#register_email').on('keyup paste', function() {
        validMail();
        check('#register_email', validateEmail);
    });
    $('#register_email2').on('keyup paste', function() {
        validMail();
        check('#register_email2', validateEmail);
    });
    $('#register_firstname').on('keyup paste', function() {
        validMail();
        check('#register_firstname', hasInput);
    });
    $('#register_lastname').on('keyup paste', function() {
        validMail();
        check('#register_lastname', hasInput);
    });
});