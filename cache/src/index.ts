var calls: number = 0;

const add = (a: number, b: number) => {
	calls++;
	return a + b;
};

function memorize(fn: (...args: any) => any) {
	var cache: Map<string, ReturnType<typeof fn>> = new Map();

	return function (...args: any) {
		const slug = JSON.stringify(args);

		if (cache.has(slug)) return cache.get(slug);
		else {
			const value = fn(args);
			cache.set(slug, value);
			return value;
		}
	};
}

const memorized = memorize(add);

memorized(1, 2);
memorized(1, 2);
memorized(1, 2);
memorized(1, 2);

console.log(calls);
