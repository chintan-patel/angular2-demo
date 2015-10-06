class FriendsService {

  constructor(){}

	getUsers() {
		return Promise.resolve(data);
	}

	getUser(id: number) {

		return Promise.resolve(data)
			.then((characters) => {
				return "Chintan";
			});
	}
}

var data : any[] = ['Chintan', 'Patel']
