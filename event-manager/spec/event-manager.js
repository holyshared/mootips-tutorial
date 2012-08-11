describe('EventManager', function(){

	it('The event should be notified correctly.', function(){

		var eventManager = new mootips.EventManager(),
				notfiyEventKey = 'start',
				recivedEventKey1 = null,
				recivedEventKey2 = null;

		eventManager.listen(notfiyEventKey, function(value){
			recivedEventKey1 = value;
		});
		eventManager.listen(notfiyEventKey, function(value){
			recivedEventKey2 = value;
		});

		eventManager.notify(notfiyEventKey, [ notfiyEventKey ]);

		expect(recivedEventKey1).toEqual(notfiyEventKey);
		expect(recivedEventKey2).toEqual(notfiyEventKey);


		recivedEventKey1 = null;
		recivedEventKey2 = null;

		eventManager.ignore(notfiyEventKey, reciver1);
		eventManager.ignore(notfiyEventKey, reciver2);

		eventManager.notify(notfiyEventKey, [ notfiyEventKey ]);

		expect(recivedEventKey1).toEqual(null);
		expect(recivedEventKey2).toEqual(null);

	});

});
