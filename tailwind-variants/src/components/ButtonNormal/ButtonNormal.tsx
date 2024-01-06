import React from 'react';

import './buton-normal.css';

type ButtonType = React.HTMLAttributes<HTMLButtonElement> & {
	sizing?: 'sm' | 'md';
	color?: 'default' | 'green';

	children: React.ReactNode;
};

const ButtonWithTailwindVariants = ({ color = 'default', sizing = 'md', className, children, ...rest }: ButtonType) => {
	return (
		<button className={`button ${className} ${color} ${sizing}`} {...rest}>
			{children}
		</button>
	);
};

export default ButtonWithTailwindVariants;
