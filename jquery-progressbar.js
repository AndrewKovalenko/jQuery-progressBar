(function ($) {

    var htmlTemplate = '<div class="jq-progressbar"><div class="progressImage"/></div>';

    $.progressBar = function (method) {
        if (typeof method === 'string' && methods[method]) {
            methods[method].call(this);
        } else if(!method){
            methods.init.call(this);
        } else{
            $.error('There is no method with name' + method + ' in jQuery.progressBar');
        }
    };

    var methods = {
        init: function () {
            var progresBarTag = $("body div.jq-progressbar");
            if (progresBarTag.length == 0) {
                $("body").append(htmlTemplate);
                progresBarTag = $("body div.jq-progressbar");
            }
            
            var imageTag = progresBarTag.find('div.progressImage');
            var screenHeight = $(document).height();

            imageTag.css('margin-top', (screenHeight - imageTag.height()) / 2);
            progresBarTag.css('height', screenHeight);
            progresBarTag.show();
        },

        hide: function () {
            var progresBarTag = $("body div.jq-progressbar");
            if (progresBarTag) {
                progresBarTag.hide();
            }
        }
    };
}
)(jQuery)


