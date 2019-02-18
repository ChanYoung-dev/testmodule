Module.register("MMM-Test", {
  defaults: {},
  start: function (){},

getDom: function() {
  var element = document.createElement("div")
  element.className = "myContent"
  element.innerHTML = "Hello, World! " + this.config.foo
  var subElement = document.createElement("p")
  subElement.innerHTML = "Test" 
  subElement.id = "TEST"
  element.appendChild(subElement)
  return element
},


notificationReceived: function(notification, payload, sender) {
  switch(notification) {
    case "DOM_OBJECTS_CREATED":
    var elem = document.getElementById("TEST")
    elem.addEventListener("click", function(){
    elem.innerHTML = "TEST2"
    this.sendNotification('CHANGE_POSITIONS_DEFAULTS','')
    }) 
    this.sendNotification('CHANGE_POSITIONS', 
    modules = {
        'clock':{
            visible: 'true',
            position: 'top_left',
        },
    }
);
      break
  }
},
})