import React from 'react'

const Stepper = ({ current }) => {
	return (
		<div className="stepperContainer">
			<div className="stepper">
				<div className={current == 1 ? 'current': ''}>1</div>
				<div className={current == 2 ? 'current': ''}>2</div>
				{/* <div className={current == 3 ? 'current': ''}>3</div> */}
			</div>
		</div>
	)
}

export default Stepper
