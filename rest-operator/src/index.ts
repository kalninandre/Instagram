const transaction1 = {
	description: 'Pagamento conta de água',
	money: 400,
	owner: 'João',
	type: 'boleto',
};

const transaction2 = { ...transaction1 };
transaction2.description = 'Conta de luz';

console.log(transaction1);
console.log(transaction2);
