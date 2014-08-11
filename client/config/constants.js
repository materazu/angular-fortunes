'use strict';

var viewPathFortunes = 'views/fortunes/';

app
    .constant('pathConstant', {
        'views': {
            'fortunes': {
                'list': viewPathFortunes + 'list.html',
                'add': viewPathFortunes + 'add.html'
            }
        }
    })
    .constant('configConstant', {
        'apiBaseUrl': 'http://localhost:3333'
    })
;