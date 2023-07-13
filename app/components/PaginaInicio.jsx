import '@/app/globals.css'
import '@/app/app.css'
import Link from 'next/link'
import React from 'react'
import Nav from './Nav'

const PaginaInicio = () => {
	return (
		<>
			<Nav logoUrl="/images/logo2.png"/>
			<section className="pageInicio">
				<article>
					<h2>Te acompañamos a elegir</h2>
					<h1>Una carrera a la medida de tus sueños</h1>
					<Link className="btn btn-primary" href="/sign-up">Empieza ya</Link>
				</article>
				<article></article>
			</section>
		</>
	)
}

export default PaginaInicio
