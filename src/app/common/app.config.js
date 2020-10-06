function init(ParseProvider){
    Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
    Parse.initialize(
        '1Y1S64cOE5U6oKk5CULPGusmGAYUIRKx1su45yRQ', // This is your Application ID
        '03mXktwUJKuCFDYObdgNfcZrJXysMp6D3lgNoaaY' // This is your Javascript key
    );
}

angular
    .module('common')
    .config(init)
