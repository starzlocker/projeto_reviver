import './FunctionalManualSection.css';
import { useState, useRef } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6';

const FunctionManualSection = () => {
	return (
		<section className="reviver-section">
			<div className="manual-steps-title">
				<p>E é por isso que juntos vamos montar o seu:</p>
				<h3>MANUAL DE FUNCIONAMENTO</h3>
			</div>
			<ManualSteps />
		</section>
	);
};

const ManualStep = ({ number, title, description, width }) => {
	return (
		<div className="manual-step" style={{ width: `${width}px` }}>
			<div className="step-number">{number}</div>
			<h4>{title}</h4>
			<p>{description}</p>
		</div>
	);
};

const ManualSteps = () => {
	const [curOffset, setCurOffset] = useState(0);
	const touchStartX = useRef(null);

	const stepWidth = 200;
	const gap = 6;
	const data = [
		{
			number: '1',
			title: 'Identidade Verdadeira',
			description: 'Respeitando-se como um ser trino: Corpo + Alma + Espírito',
		},
		{
			number: '2',
			title: 'Olhar honesto para a sua História',
			description:
				'Livrar-se de culpas, medos, exercitar o perdão',
		},
		{
			number: '3',
			title: 'Armadilhas Emocionais',
			description:
				'Identificando o que te paralisa e te impede de viver o novo, repetindo ciclos',
		},
		{
			number: '4',
			title: 'As Forças de Caráter',
			description:
				'Reconhecendo suas forças e como coloca-las em ação',
		},
		{
			number: '5',
			title: 'Propósito e Direção',
			description:
				'Descobrindo seu verdadeiro propósito e traçando um caminho claro para o futuro',
		},
	];

	const moveRight = () => {
		const manualStepsWrapper = document.querySelector(
			'.manual-steps-wrapper'
		); // div wrapper, ela serve pra limitar o manual-steps com overflow hidden, pois ele tem width equivalente ao número de cards
		const manualStepsElement = document.querySelector('.manual-steps'); // o elemento com os cards
		const manualSteps = document.querySelectorAll('.manual-step'); // os cards

		const wrapperW = manualStepsWrapper.clientWidth;

		//
		let newOffset = null;

		for (let i = 0; i < manualSteps.length; i++) {
			const node = manualSteps[i];
			let currentOffset = manualSteps[curOffset].offsetLeft; // Pega a posição atual (setada previamente ou 0 default) -- o offsetLeft me diz quando esse elemento está deslocado RELATIVO ao parent
			let currentWrapperRange = currentOffset + wrapperW;

			if (
				!newOffset && // Garante que é o primeiro cara que eu encontrar que vai definir o novo offset
				node.offsetLeft > currentWrapperRange - node.clientWidth // Significa que o card não tem cabe no meu espaço atual
			) {
				newOffset = node.offsetLeft; // pego o deslocamento para setar
				setCurOffset(i); // determino esse cara como novo ponto de partida
				manualStepsElement.style.transform = `translateX(-${newOffset}px)`; // desloco o elemento pra direita
			}

			currentWrapperRange = newOffset + wrapperW;

			if (
				i == manualSteps.length - 1 && // sou o último elemento
				newOffset &&
				node.offsetLeft <= currentWrapperRange - node.clientWidth // Se eu tiver encontrado uma nova posição inicial e os cards que vem depois CABEM todos dentro da nova exibição sem sobra
			) {
				disableChevronRight();
			}
		}
	};

	const disableChevronRight = () => {
		document
			.querySelector('#manual_steps_container .chevron-r')
			.classList.add('disabled');
	};

	const moveLeft = () => {
		const manualStepsWrapper = document.querySelector(
			'.manual-steps-wrapper'
		);
		const manualStepsElement = document.querySelector('.manual-steps');
		const manualSteps = document.querySelectorAll('.manual-step');
		const wrapperW = manualStepsWrapper.clientWidth;

		const chevronRight = document.querySelector(
			'#manual_steps_container .chevron-r'
		);
		chevronRight.classList.remove('disabled');

		let curWidth = 0;
		let currentOffset = manualSteps[curOffset].offsetLeft; // Acho meu ponto de inicio
		if (currentOffset) {
			for (let i = curOffset - 1; i >= 0; i--) {
				// começo da posição anterior ao meu ponto de inicio
				const node = manualSteps[i];
				const width = currentOffset - node.offsetLeft; // eu pego o offset menor e subtraio ele do meu ponto de inicio que é sempre maior, assim eu obtenho a distância entre eles
				if (
					i != 0 &&
					curWidth + width < wrapperW // enquanto eu não for o último ou minha distância for menor que o tamanho do wrapper
				) {
					curWidth += width;
				} else {
					// Quando eu encontrar um card cujo o offset esteja fora do meu espaço disponível, ai a gente desloca
					setCurOffset(i);
					manualStepsElement.style.transform = `translateX(-${node.offsetLeft}px)`;
					break;
				}
			}
		}
	};

	const onTouchStart = (e) => {
		touchStartX.current = e.touches[0].clientX;
	};

	const onTouchEnd = (e) => {
		const start = touchStartX.current;
		if (start == null) return;
		const dx = e.changedTouches[0].clientX - start;
		if (Math.abs(dx) > 45) {
			dx < 0 ? moveRight() : moveLeft();
		}
		touchStartX.current = null;
	};

	return (
		<div
			id="manual_steps_container"
			onTouchStart={onTouchStart}
			onTouchEnd={onTouchEnd}
		>
			<FaChevronLeft
				fontSize="18px"
				className={`chevron chevron-l ${
					curOffset === 0 ? 'disabled' : ''
				}`}
				onClick={moveLeft}
			/>
			<div className="manual-steps-wrapper">
				<div
					className="manual-steps"
					style={{
						width: `${(stepWidth + gap) * data.length}px`,
					}}
				>
					{data.map((item) => (
						<ManualStep
							key={item.number}
							title={item.title}
							number={item.number}
							description={item.description}
							width={stepWidth}
							margin={gap}
						/>
					))}
				</div>
			</div>
			<FaChevronRight
				fontSize="18px"
				className={`chevron chevron-r `}
				onClick={moveRight}
			/>
		</div>
	);
};

export default FunctionManualSection;
