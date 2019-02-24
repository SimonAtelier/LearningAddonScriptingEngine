let clientSystem = client.registerSystem(0, 0);
const displayChatEvent = "minecraft:display_chat_event";

clientSystem.initialize = function() {
	this.listenForEvent("minecraft:client_entered_world ", (eventData) => this.onClientEnteredWorld(eventData));
	this.listenForEvent("minecraft:hit_result_changed", (eventData) = > this.onHitResultChanged(eventData));
	this.listenForEvent("minecraft:hit_result_continuous", (eventData) => this.onHitResultContinuous(eventData));
	this.listenForEvent("minecraft:pick_hit_result_changed", (eventData) => this.onPickHitResultChanged(eventData));
	this.listenForEvent("minecraft:pick_hit_result_continuous", (eventData) => this.onPickHitResultContinuous(eventData));
};

clientSystem.update = function() {
	// Update all the things here...
};

clientSystem.shutdown = function() {
	// Cleanup all the things here...
};

clientSytem.onClientEnteredWorld = function(eventData) {
	this.broadcastEvent(displayChatEvent, "onClientEnteredWorld");
};

clientSystem.onHitResultChanged = function(eventData) {
	this.broadcastEvent(displayChatEvent, "onHitResultChanged");
};

clientSystem.onHitResultContinuous = function(eventData) {
	this.broadcastEvent(displayChatEvent, "onHitResultContinous");
};

clientSystem.onPickHitResultChanged = function(eventData) {
	this.broadcastEvent(displayChatEvent, "onPickHitResultChanged");
};

clientSystem.onPickHitResultContinuous = function(eventData) {
	this.broadcastEvent(displayChatEvent, "onPickHitResultContinuous");
};
