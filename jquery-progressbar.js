(function ($) {

    var htmlTemplate = '<div class="jq-progressbar"><img alt="progress"/></div>';

    $.progressBar = function (data) {
        if (typeof data === 'string' && methods[data]) {
            methods[data].call(this);
        } else if (data.imagePath) {
            methods.init.call(this, data.imagePath)
        } else{
            $.error('There is no method with name' + data + ' in jQuery.progressBar or wrong initial data format');
        }
    };

    var show = function (imagePath) {
        if (imagePath)
            this.init.call(this, imagePath);
        $("body div.jq-progressbar").show();
    };

    var methods = {
        init: function (imagePath) {
            var progressBarElement = $("body div.jq-progressbar");
            if (progressBarElement.length == 0) {
                $("body").append(htmlTemplate);
                progressBarElement = $("body div.jq-progressbar");
            }
            var imageTag = progressBarElement.find("img");
            imageTag.attr("src", imagePath);
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


