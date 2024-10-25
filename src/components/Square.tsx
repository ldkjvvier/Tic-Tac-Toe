import PropTypes from 'prop-types'
import '../Board.css'
export const Square = ({ children, updateBoard, index }) => {
	const handleClick = () => {
		updateBoard(index)
	}

	return (
		<div
			className={`flex items-center justify-center w-[85px] h-[85px] xs:w-[110px] xs:h-[110px] md:w-[160px] md:h-[160px] font-bold text-6xl md:text-8xl square-${index}`}
			onClick={handleClick}
		>
			{children}
		</div>
	)
}

Square.propTypes = {
	children: PropTypes.element.isRequired,
	updateBoard: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
}