import React from 'react'
import Nav from '../components/Nav'
import Link from 'next/link'
import Stepper from '../components/Stepper'

const Descubre = () => {
	return (
		<>
			<Nav logoUrl="/images/logo2.png" contrast={false} />
			<section className="pageDescubre">
				<Stepper current={1} />
				<h1>DESCUBRE QUÉ CARRERA SE AJUSTA A TU PERSONALIDAD VOCACIONAL.</h1>
				<p>
          Identifícate respondiendo verdadero o falso a cada uno de los
          enunciados. Este test consta de 42 preguntas y te tomará
          aproximadamente 5 minutos completarlo.
				</p>
				<Link href="/test" passHref className="btn btn-primary">
          Iniciar test
				</Link>
				<div className="imgDescubre">
					<img src="/images/2.png" alt="imagenDescubre" />
				</div>
			</section>
		</>
	)
}

export default Descubre
