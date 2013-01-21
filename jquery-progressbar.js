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
            var progressBarElement = $("body div.jq-progressbar");
            if (progressBarElement.length == 0) {
                $("body").append(htmlTemplate);
                progressBarElement = $("body div.jq-progressbar");
            }
            progressBarElement.show();
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


