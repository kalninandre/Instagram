const getUserFromDb = () => {
	const user = {
		id: 45,
		name: 'André',
		password: 'abcdef',
		email: 'random@email.com',
		address: {
			street: 'random address',
			type: 'random type',
			number: 1000,
		},
	};
	return user;
};

const sendUser = () => {
	const { name, email } = getUserFromDb();

	console.log({
		name,
		email,
	});
};

sendUser();
