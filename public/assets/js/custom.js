$(document).ready(function() {
    $(document).on('click', '.toggler', function(evt) {
        var groupName = $(this).data('group');

        if (groupName) {
            $("[data-group='" + groupName + "'").removeClass('selected');
            $(this).addClass('selected');
        } else {
            $(this).toggleClass('selected');
        }
    });
});
