import React from 'react'
import Nav from '../components/Nav'
import Test from '../components/Test'
import '@/app/globals.css'
import '@/app/app.css'
const Descubre = () => {
	return (
		<>
			<Nav logoUrl="/images/logo2.png" contrast={false} />
			<section className="pageDescubre">				
				<Test />
			</section>
		</>
	)
}

export default Descubre
