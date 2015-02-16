
var receiver = new BroadcastChannel('channel');

receiver.onmessage = (e) => {
  console.log("message ", e);
};

var sender = new BroadcastChannel('channel');

sender.postMessage("Yo");
