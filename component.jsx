var React = require('react');
var AppStore = require('../stores/app_store');
var EventsNames = require('./constants/events_names');
module.exports = React.createClass({

    componentDidMount: function() {
        //Subscribe to events example
        AppStore.addEventListener(EventsNames.RESET_FILTER, (params)=>{alert(params.msg)});
        AppStore.addEventListener(EventsNames.RESET_MAP, ()=>{alert('RESET_MAP fired')});
    },
    //...
});
