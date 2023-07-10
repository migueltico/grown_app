'use client'
import React from 'react'
import Nav from '../components/Nav'
import Link from 'next/link'
import Stepper from '../components/Stepper'
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
