To create an event:
1. Go to events_names and make a name for the event.
module.exports = keyMirror({
    EVENT_NAME: null
});

2. Go to place where you want to react to the event and subscribe: (component.jsx)
AppStore.addEventListener(EventsNames.RESET_MAP, ()=>{alert('RESET_MAP fired')});

3. Go to place where you want to fire event (global.js):
$('#reset-map').click(()=>{
    AppActions.fireEvent(EventsNames.RESET_MAP);
})
