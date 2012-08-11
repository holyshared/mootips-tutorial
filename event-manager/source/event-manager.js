/*
---
name: EventManager

description: 

license: MIT-style

authors:
- Noritaka Horio

requires:
  - Core/Function

provides:
  - EventManager
...
*/

(function(global){

if (('mootips' in global) === false){
	global.mootips = {}; 
}

function EventManager(){
	this.listeners = [];
}

EventManager.implement({
	
	listen: function(){
	},

	ignore: function(){
	},

	notify: function(){
	}
	
});

global.mootips.EventManager = EventManager;

}(window));




