import React from 'react'
import Nav from '@/app/components/Nav'
import carreras from '@/app/data/carreras.json'
import { BsFillTriangleFill as Flecha } from 'react-icons/bs'
import Link from 'next/link'
const Carrera = ({ params }) => {
	const { id, slug: carrera } = params
	const wordWithAccent = decodeURIComponent(carrera)

	const data = carreras.find((carrera) => carrera.id === id)
	const tags = data.nubeLetras.split(',')
	const convertToFormatCurrency = (number) => {
		return new Intl.NumberFormat('es-CR', {
			style: 'currency',
			currency: 'CRC',
		}).format(number)
	}

	return (
		<>
			<Nav logoUrl="/images/logo2.png" contrast={false} />
			<section className="pageCarrera">
				<article>
					<h1>
            Analisis de mercado laboral:{' '}
						<span className="color-purple">{wordWithAccent}</span>
					</h1>
					<img src={'/images/aml.png'} alt={data.imagen} height="650px" />

					<Link href="/universidades" className="btn btn-primary btn-sm bg-purple">
            Quieres saber cuales universidades imparten esta carrera?
					</Link>

					<Link href="/asesoria" className="btn btn-primary btn-sm bg-purple">
            Buscas asistencia personalizada para elegir tu carrera?
					</Link>
				</article>

				<article>
					<p>
            Se encontraron un total de <strong>{data.ofertas} ofertas </strong>
            de trabajo relacionadas a tu carrera universitaria de interes en la
            ultima semana
					</p>
					<p>
            Generalmente los puestos de trabajo relacionados a esta carrera
            tienen requisitos como:{' '}
					</p>
					<div className="nubePalabras">
						{tags.map((tag) => (
							<span key={tag} className="tags">
								{tag}
							</span>
						))}
					</div>
					<p>El rango salarial de puestos relacionados a esta carrera es de:</p>
					<div className="rangoSalarios">
						<div>
							<span>{convertToFormatCurrency(data.salarioMinimo)}</span>
							<Flecha />
						</div>
						<div>
							<span>{convertToFormatCurrency(data.salarioPromedio)}</span>
							<Flecha />
						</div>
						<div>
							<span>{convertToFormatCurrency(data.salarioMaximo)}</span>
							<Flecha />
						</div>
					</div>
				</article>
			</section>
			<section className="comentarios">
				<h2>Comentarios</h2>
				<div className="form-group">
					<label htmlFor="exampleFormControlTextarea1">
            Deja tu comentario
					</label>
					<textarea
						className="form-control"
						id="exampleFormControlTextarea1"
						rows="3"
					></textarea>
					<button className="btn btn-primary">Enviar</button>
				</div>
			</section>
		</>
	)
}

export default Carrera
