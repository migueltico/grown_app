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
			<section className="asesoriasImg">
				<button className="btn backBtn" onClick={()=>handleGoBack()}>
					<IoChevronBack />
				</button>
				<img src={'/images/asesoria.png'} alt="universidades" />
			</section>
		</>
	)
}

export default Universidades
