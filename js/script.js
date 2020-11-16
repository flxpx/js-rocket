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