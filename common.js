$(document).ready(function()
{
    $(document).popover({
        selector: '[data-toggle=popover]',
        trigger: 'focus',
        html : true,
        container: 'body',
        placement: 'right'
    });
})// JavaScript Document