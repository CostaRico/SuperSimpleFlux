var AppActions = require('./app_actions');
var EventsNames = require('./events_names');
//Fire events everything we want to.
$(document).ready(function () {
    $('#reset-map').click(()=>{
        AppActions.fireEvent(EventsNames.RESET_MAP);
    })
    $('#reset-filter').click(()=>{
        AppActions.fireEvent(EventsNames.RESET_FILTER, {msg: 'TEST MESSAGE'});
    })
});
