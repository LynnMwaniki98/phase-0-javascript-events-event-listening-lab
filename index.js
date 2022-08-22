function addingEventListener() {  

  //First, we grab the element that we want to add the event listener to and save a reference to it in the input variable.
const input = document.getElementById('button');

//Next, we call addEventListener() on that element to tell JavaScript to listen for the event. We pass two arguments to addEventListener(): the name of the event to listen for (in this case, click) and a callback function that will be executed when the event is "heard."
input.addEventListener('click', function() {
  alert("binds an event listener in addingEventListener()");
})
}
addingEventListener();