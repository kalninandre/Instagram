type UserType = {
	id: number;
	name: string;
	password: string;
	age: number;
};

const printUser1 = (): UserType => {
	const user: UserType = {
		id: 1,
		name: 'Pablo',
		password: 'Helicóptero',
		age: 40,
	};

	console.log(user);

	return user;
};

const printUser2 = (): Omit<UserType, 'password'> => {
	const user: Omit<UserType, 'password'> = {
		id: 1,
		name: 'Pablo',
		age: 40,
	};

	console.log(user);

	return user;
};

printUser1();

printUser2();
