import Nav from '@/app/components/Nav'
import Link from 'next/link'

const SignUp = () => {
	return (
		<>
			<Nav logoUrl="/images/logo.png" contrast={true} color="terciario" />
			<section className="pageSignUp">
				<article></article>
				<article>
					<h1>Hola!<br/> Inicia sesión</h1>
					<form>
						<div className="form-group">
							<label className="labelWhite">Correo</label>
							<input type="email" />
						</div>
						<div className="form-group">
							<label className="labelWhite">Contraseña</label>
							<input type="password" />
						</div>
						<Link href="/test" className="btn btn-login">
              Iniciar Sesiȯn
						</Link>
					</form>
					<p>
            ¿No tienes cuenta?
						<Link href="/registro" passHref>
              Regístrate
						</Link>
					</p>
				</article>
			</section>
		</>
	)
}
export default SignUp
