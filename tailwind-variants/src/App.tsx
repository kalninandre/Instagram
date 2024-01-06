import ButtonWithTailwindVariants from '@components/ButtonWithTailwindVariants';
import ButtonNormal from '@components/ButtonNormal/ButtonNormal';

function App() {
	return (
		<main className='flex items-center min-w-[100vw] min-h-[100vh]'>
			<div className='flex flex-col gap-4 justify-center items-center w-full'>
				<p>
					Variações de botão com <span className='text-blue-500 font-bold'>tailwind-variants</span>
				</p>

				<div className='flex items-center gap-4'>
					<div className='flex flex-col gap-4'>
						<ButtonWithTailwindVariants>Tailwind Variants</ButtonWithTailwindVariants>
						<ButtonWithTailwindVariants color='green' sizing='sm'>
							Tailwind Variants
						</ButtonWithTailwindVariants>
					</div>
					<div className='h-[120px] w-[1px] bg-black'></div>

					<div className='flex flex-col gap-3'>
						<ButtonNormal>Sem Variants</ButtonNormal>
						<ButtonNormal color='green' sizing='sm'>
							Sem Variants
						</ButtonNormal>
					</div>
				</div>
			</div>
		</main>
	);
}

export default App;
