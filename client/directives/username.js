'use strict';

/**
 * This directive is used to colorize username
 */
app
    .directive('username', function () {
        return {
            restrict: 'E',
            link: function (scope, element) {
                var color = ['FF007F', '79ABFF', 'CFBFAD', 'A7EC21', 'C48CFF', '52E3F6', 'CC9900', 'FF007F', '79ABFF', 'CFBFAD', 'A7EC21', 'C48CFF', '52E3F6', 'CC9900', 'FF007F', '79ABFF', 'CFBFAD', 'A7EC21', 'C48CFF', '52E3F6', 'CC9900'].sort(function() {
                    return 0.5 - Math.random();
                });
                element.css('color', '#'+color[0]);
            }
        }
    })
;