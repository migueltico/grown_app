'use client'
import React from 'react'
import Nav from '../components/Nav'
import '@/app/globals.css'
import '@/app/app.css'
import { IoChevronBack } from 'react-icons/io5'

const Universidades = () => {
	const handleGoBack = () => {
		window.history.back()
	}
	return (
		<>
			<Nav logoUrl="/images/logo2.png" contrast={false} />
			<section className="universidadesImg">
				<button className="btn backBtn" onClick={()=>handleGoBack()}>
					<IoChevronBack />
				</button>
				<img src={'/images/universidades.png'} alt="universidades" />
				<section className="comentarios">
					<h2 className="white">Comentarios</h2>
					<div className="form-group">
						<label htmlFor="exampleFormControlTextarea1" className="white">
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
			</section>
		</>
	)
}

export default Universidades
