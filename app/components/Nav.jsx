import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Nav = ({logoUrl,contrast, color=''}) => {
	const newColor = 'navHeader ' + color
	return (
		<div className={newColor} >
			<div>
				<Link href="/" passHref>
					<img src={logoUrl} alt=""/>
				</Link>
			</div>
			<ul>
				<li>
					<a href="/" className={contrast ? 'white': 'a'}>Nuestra historia</a>
				</li>
				<li>
					<a href="/about" className={contrast ? 'white': 'a'}>Recursos</a>
				</li>
				<li>
					<a href="/contact" className={contrast ? 'white': 'a'}>Contactos</a>
				</li>
			</ul>
		</div>
	)
}

export default Nav
