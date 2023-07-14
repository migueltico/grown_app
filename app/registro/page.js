import React from 'react'
import Nav from '../components/Nav'
import Link from 'next/link'

const Registro = () => {
	return (
		<>
			<Nav logoUrl="/images/logo2.png" contrast={false} />
			<section className="pageRegistro">
				<article>
					<p>
            ¿Ya tienes una cuenta?
						<Link href="/sign-up" passHref>
              Inicia Sesión
						</Link>
					</p>
					<form>
						<div className="form-group">
							<label className="labelBlack">Ingresa tu nombre</label>
							<input type="email" />
						</div>
						<div className="form-group">
							<label className="labelBlack">Ingresa tu correo</label>
							<input type="email" />
						</div>
						<div className="form-group">
							<label className="labelBlack">
                Ingresa tu número de teléfono
							</label>
							<input type="tel" />
						</div>
						<div className="form-group">
							<label className="labelBlack">
                Ingresa tu fecha de nacimiento
							</label>
							<input type="date" />
						</div>
						<div className="form-group">
							<label className="labelBlack">
                Cuál es tu objetivo en esta aplicación?
							</label>
							<textarea type="text" />
						</div>
						<Link href="/descubre" passHref className='btn btn-primary'>
              Crear cuenta
						</Link>
					</form>
				</article>
				<article></article>
			</section>
		</>
	)
}

export default Registro
