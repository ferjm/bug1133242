dump('SW!\n');
var receiver = new BroadcastChannel('channel');

receiver.onmessage = function(e) {
  console.log("message ", e);
};

var sender = new BroadcastChannel('channel');

sender.postMessage("Yo");
