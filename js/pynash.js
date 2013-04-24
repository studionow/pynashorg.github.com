$(document).ready( function() {
    $('#map-container').hide();

    $('#event-button').on('click', function(event) {
        if ($.event_map) {
            $('#map-container').html($.event_map).show();
        }
    } );
} );
