$(document).ready(function(){

    $('#menu-toggle').click(function(e){
        e.preventDefault();

        $('#content-wrapper').toggleClass('toggled')
    });
});