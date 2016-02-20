var AppDispatcher = require('../app_dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

//Dont change anything
var AppStore = assign({}, EventEmitter.prototype, {
    emitEvent(eventName, params){
        this.emit(eventName, params);
    },
    addEventListener(eventName, callback){
        this.on(eventName, callback);
    },
    removeEventListener(eventName, callback){
        this.removeListener(eventName, callback);
    }
});

AppDispatcher.register(function (action) {
    AppStore.emitEvent(action.actionType, action.data);
});

module.exports = AppStore;
