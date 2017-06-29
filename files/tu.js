$(function() {
    if ( $('#navbar').find('ul li').length > 0 ) {
        $('#navbarButtonContainer').append('<button type="button" class="navbar-toggle limebutton collapsed" data-toggle="collapse"\n' +
            '                    data-target="#navbar" aria-expanded="false" aria-controls="navbar">\n' +
            '                <span class="sr-only">Toggle navigation</span>\n' +
            '                <span class="icon-bar"></span>\n' +
            '                <span class="icon-bar"></span>\n' +
            '                <span class="icon-bar"></span>\n' +
            '            </button>');
    }

    $('#footer').prepend('<a class="floatLeft" target="_blank" href="mail' + 'to:' + ['hiwis', 'ips.cs.tu-bs.de'].join('@') + '"\'>' +
        'Kontakt: ' + ['hiwis', 'ips.cs.tu-bs.de'].join('@') + '</' + 'a>');
});