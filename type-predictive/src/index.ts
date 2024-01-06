interface AccountInterface {
	value: number;
}

interface PhysicPersonInterface extends AccountInterface {
	name: string;
	cpf: string;
}

interface JuridicPersonInterface extends AccountInterface {
	company_name: string;
	cnpj: string;
}

const isPhysicPerson = (account: AccountInterface): account is PhysicPersonInterface => {
	return 'cpj' in account;
};

const accountHandler = (account: PhysicPersonInterface | JuridicPersonInterface) => {
	if (isPhysicPerson(account)) {
		console.log(account.name);
	} else {
		console.log(account.company_name);
	}
};
