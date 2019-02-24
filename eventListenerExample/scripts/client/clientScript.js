let clientSystem = client.registerSystem(0, 0);

clientSystem.initialize = function() {
	this.listenForEvent("minecraft:client_entered_world", (eventData) => this.onClientJoined(eventData));
};

clientSystem.update = function() {
	// Update all the things here...
};

clientSystem.shutdown = function() {
	// Cleanup all the things here...
};

clientSystem.onClientJoined = function(eventData) {
	this.broadcastEvent("minecraft:display_chat_event", "This is a test message.");
}
