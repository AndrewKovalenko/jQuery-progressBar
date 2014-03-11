jquery-progressBar
==================

Very small and lightweight jquery plugin to show (and hide :-)) screen-blocker

Using:

    <script type="text/javascript" src="http://code.jquery.com/jquery-1.9.0.min.js"></script>
    <script type="text/javascript" src="jquery-progressbar.js"></script>`
    <script type="text/javascript">
        (function () {
            $(function () {
                $.progressBar();
                setTimeout(function () {
                    $.progressBar('hide');
                }, 5000);
            })
        })();
    </script>
    <link type="text/css" rel="stylesheet" href="jquery-progress.css"></link>
