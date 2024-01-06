const payments = {
	a: 'ted',
	b: 'tef',
	c: 'pix',
} as const;

const calculate = (type: 'pix') => {
	console.log(type);
};

calculate(payments.c);
