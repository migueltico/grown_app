'use client'
import { useEffect, useState } from 'react'
import riasec from '@/app/data/riasec.json'
import letterData from '@/app/data/letterData.json'
import carreras from '@/app/data/carreras.json'
import Stepper from './Stepper'
import Link from 'next/link'

function Test() {
	const [score, setScore] = useState({ R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 })
	const [filterCarreras, setFilterCarreras] = useState([])
	const [currentIndex, setCurrentIndex] = useState(0)
	const [lettersDefinitions, setLettersDefinitions] = useState([])
	const [selectedLetters, setSelectedLetters] = useState([])
	const handleAnswer = (answer) => {
		const currentLetter = riasec[currentIndex].clasificacion
		if (answer === true) {
			setScore((prevScore) => ({
				...prevScore,
				[currentLetter]: prevScore[currentLetter] + 1,
			}))
		}

		// Avanzar al siguiente ítem
		setCurrentIndex((prevIndex) => prevIndex + 1)
	}

	const handleReset = () => {
		setScore({ R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 })
		setCurrentIndex(0)
	}

	const selectCarreras = () => {
		const sortedLetters = Object.keys(score).sort(
			(a, b) => score[b] - score[a]
		)
		// console.log(score)
		const topTwoLetters = sortedLetters.slice(0, 2)
		console.log(topTwoLetters)

		const remainingLetters = sortedLetters.slice(2)

		//find in score remainingLetters that it is equal to score of topTwoLetters

		const extraMaxLetters = []
		topTwoLetters.forEach((topLetter) => {
			remainingLetters.forEach((remainingLetter) => {
				if (score[topLetter] == score[remainingLetter])
					extraMaxLetters.push(remainingLetter)
			})
		})
		//add extraMaxLetters to topTwoLetters
		const topTwoLettersWithExtra = topTwoLetters.concat(extraMaxLetters)

		const selectedLetters = topTwoLettersWithExtra
		const filterCarreras1 = carreras.filter((carrera) =>
			selectedLetters.includes(carrera.clasificacion)
		)
		const sorteByClasificacion = filterCarreras1.sort((a, b) =>
			a.clasificacion.localeCompare(b.clasificacion)
		)
		setFilterCarreras(sorteByClasificacion)
		setSelectedLetters(selectedLetters)
		console.log(selectedLetters)
		getDefinitionByClasificacion()
	}
	const getDefinitionByClasificacion = () => {
		const lettersDefinitions = selectedLetters.map((letter) => {
			const letterDefinition = letterData.find(
				(letterData) => letterData.clasificacion === letter
			)
			return letterDefinition
		})
		console.log(lettersDefinitions)
		setLettersDefinitions(lettersDefinitions)
	}
	useEffect(() => {
		selectCarreras()
	}, [currentIndex])

	const isLastQuestion = currentIndex == riasec.length
	// Comprobar si se ha alcanzado el final del cuestionario

	return (
		<div>
			<Stepper current={2} />
			{isLastQuestion ? (
				<div className="testResultContainer">
					<h1>Resultados</h1>
					<h2>
            Gracias por completar nuestro test vocacional.
						<br />
            Tu perfil es:{' '}
						{lettersDefinitions.map((letterDefinition, index) => {
							console.log(lettersDefinitions.length)

							return (
								<span key={letterDefinition.clasificacion + index * 10}>
                  ({letterDefinition.clasificacion}){' '}
									{letterDefinition.definition}
									{index !== lettersDefinitions.length - 1 ? ', ' : ''}
								</span>
							)
						})}
					</h2>
					<div className="clasificacionContainer">
						{lettersDefinitions.map((letterDefinition, index) => {
							let definitionLetter = carreras.filter(
								(carrera) =>
									carrera.clasificacion == letterDefinition.clasificacion
							)
							return (
								<div
									key={letterDefinition.clasificacion + index * 7}
									className="card"
								>
									<h3>{letterDefinition.definition}</h3>
									<p>{definitionLetter[0].definicionLetra}</p>
								</div>
							)
						})}
					</div>
					<p>
            A continuación las areas de alta demanda laboral relacionadas a tu
            personalidad vocacional. Dale click a tu carrera de interes para
            conocer mas informacion al respecto.
					</p>
					<div className="carrerasContainer">
						{selectedLetters.map((letters, index) => {
							let carrerasByLetter = filterCarreras.filter(
								(carrera) => carrera.clasificacion == letters
							)
							return (
								<div key={index * 11}>
									{carrerasByLetter.map((carrera, index) => {
										return (
											<div className="card" key={index}>
												<Link
													href={
														'/carrera/' + carrera.id + '/' + carrera.carrera
													}
												>
													{carrera.carrera}
												</Link>
											</div>
										)
									})}
								</div>
							)
						})}
					</div>
				</div>
			) : (
				<div className="testContainer">
					<h2>
            Pregunta {currentIndex + 1} de {riasec.length}
					</h2>
					<p>{riasec[currentIndex].descripcion}</p>
					<div>
						<button
							className="btn btn-primary btn-lg"
							onClick={() => handleAnswer(true)}
						>
              Si
						</button>
						<button
							className="btn btn-primary btn-lg"
							onClick={() => handleAnswer(false)}
						>
              No
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default Test
