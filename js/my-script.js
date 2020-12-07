

$(function () {

    let list = $('.list');
    let items = $('.list li:odd');

    list.css({ 'list-style': 'none', 'padding': '0' });

    items.css('padding', '20px');

    items.css('background-color', 'lightyellow');

    $('.list li:contains("привет")').css('background-color', 'darkred');
    $('.list li:empty').remove();

    $('.list').children().addClass('item');

    $('.list').prev().css({
        'color': 'green',
        'margin-bottom': '1.5rem'
    });

    $('.list').next().css({
        'width': '80%',
        'padding': '20px',
        'border': '3px dotted gold',
        'margin': 'auto',
        'background-color': 'lightgreen'
    });

    $('.list').parent().css({ 'background-image': 'linear-gradient(lightblue, lightyellow)' });

});