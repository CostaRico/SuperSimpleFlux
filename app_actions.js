//Don't change anything here
var AppDispatcher = require('../app_dispatcher');
var AppActions = {
    fireEvent(eventName, params){
        AppDispatcher.dispatch({
            actionType: eventName,
            data: params
        });
    }
};
module.exports = AppActions;
