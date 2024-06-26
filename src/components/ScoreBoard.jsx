import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

export const ScoreBoard = ({ children }) => {
	const user = useSelector((state) => state.user)

	return (
		<>
			<section className="grid grid-cols-3 justify-items-center md:text-2xl mt-12 md:max-w-[65%] ">
				<div className="text-center">
					<p>JUGADOR (x)</p>
					<span>{user.Xwinner}</span>
				</div>
				<div>
					<p>-</p>
					<span>{user.draw}</span>
				</div>
				<div className="text-center">
					<p>JUGADOR (O)</p>
					<span>{user.Owinner}</span>
				</div>
			</section>
			<section className="flex justify-center gap-3 mt-6">
				{children}
			</section>
		</>
	)
}

ScoreBoard.propTypes = {
	winner: PropTypes.string,
	children: PropTypes.node,
}
