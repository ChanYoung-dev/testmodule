Module.register("MMM-Test", {
    defaults: {
            foo: "I'm alive!"
    },
<<<<<<< HEAD
    start: function () {
        this.count = 0
    },
=======
    start: function () {},
>>>>>>> parent of 71cf797... start&getDOM
    getDom: function() {
        var element = document.createElement("div")
        element.className = "myContent"
        element.innerHTML = "Hello, World!" + this.config.foo
        return element
    },
    notificationReceived: function(notification, payload, sender) {
        switch(notification){
            case "DOM_OBJECTS_CREATED":
                var timer = setInterval(()=>{
                    this.updateDom()
                    this.count++
                }, 1000)
                break
            }
    },
    
    
    socketNotificationReceived: function() {},
  })