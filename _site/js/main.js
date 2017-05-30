$(document).ready(function () {
    function show_job(job_class) {
        $('.instruction').hide();
        $('#job-details').html($('#' + job_class).html());
    }

    function hide_job(job_class) {
        $('.instruction').show();
        $('#job-details').html('');
    }

    $('.big-milestone, .small-milestone').hover(
        function() {
            var job_class = $(this).attr('class').split(' ')[1];
            show_job(job_class);
        },
        function() {
            var job_class = $(this).attr('class').split(' ')[1];
            hide_job(job_class);
        }
    );
});
