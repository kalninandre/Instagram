import React from 'react';

import { tv, VariantProps } from 'tailwind-variants';

export const button = tv({
	base: 'border rounded flex items-center justify-center whitespace-nowrap transition duration-300',
	variants: {
		sizing: {
			sm: 'px-2 py-1.5',
			md: 'px-3.5 py-1.5',
		},
		color: {
			default: 'text-slate-700 border-slate-700 hover:bg-slate-600 hover:border-slate-600 hover:text-white',
			green: 'text-green-600 border-green-600 hover:bg-green-700 hover:border-green-700 hover:text-white',
		},
	},
	defaultVariants: {
		sizing: 'md',
		color: 'default',
	},
});

type ButtonType = React.HTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof button> & {
		children: React.ReactNode;
	};

const ButtonWithTailwindVariants = ({ color, sizing, children, ...rest }: ButtonType) => {
	return (
		<button className={button({ color, sizing })} {...rest}>
			{children}
		</button>
	);
};

export default ButtonWithTailwindVariants;
