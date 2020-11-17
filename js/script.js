

setTimeout(function () {
	location.href = 'rocket.html';
}, 5000);

var doCoolStuff = function() {
	var currentClassName = document.getElementById('cool').className;
	//changing class name (or changing it back)
	if (currentClassName == 'cool') {
		document.getElementById('cool').className = 'cool red'
	} else {
		document.getElementById('cool').className = 'cool'
	};

}

var car = {
			make: 'VW',
			type: 'Polo',
			color: 'blue',
			isTurnedOn: false,
			numberOfWheels: 4,
			seats: [
				'seat1',
				'seat2',
				'seat3',
				'seat4'
			],

			turnOn: function () {
				this.isTurnedOn = true;
				console.log('done');
			},

			switchCar: function (isOn) {
				console.log('turn car '+isOn)
				if (isOn == true) {
					this.isTurnedOn = true;
				} else {
					this.isTurnedOn = false;
				}
			},

			fly: function() {
				alert('fly');
			}

		};

console.log('hello there friends!');