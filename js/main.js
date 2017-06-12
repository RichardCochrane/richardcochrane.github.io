$(document).ready(function () {
    function show_misc_details(section) {
        $(section).siblings('div').show();
    }

    function hide_misc_details(section) {
        $(section).siblings('div').hide();
    }

    function highlight_skills(skills) {
        $('.bar').addClass('dampen');
        for (var skill_index in skills) {
            $('#' + skills[skill_index]).removeClass('dampen');
        }
    }

    function reset_skills_highlight() {
        $('.dampen').removeClass('dampen');
    }

    function show_job(job_class) {
        $('.instruction').hide();
        $('#job-details').html($('#' + job_class).html());

        var skills = $('#' + job_class + ' .description').data('skills').split(',');

        highlight_skills(skills);
    }

    function hide_job(job_class) {
        $('.instruction').show();
        $('#job-details').html('');

        reset_skills_highlight();
    }

    $('.misc-details header').hover(
        function() {
            show_misc_details(this);
        },
        function() {
            // hide_misc_details(this);
        }
    );

    $('.big-milestone, .small-milestone').hover(
        function() {
            var job_class = $(this).attr('class').split(' ')[1];
            if (job_class !== 'next') {
                show_job(job_class);
            }
        },
        function() {
            var job_class = $(this).attr('class').split(' ')[1];
            if (job_class !== 'next') {
                hide_job(job_class);
            }
        }
    );
});
