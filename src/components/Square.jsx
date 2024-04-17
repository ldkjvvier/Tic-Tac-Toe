import PropTypes from 'prop-types'
import '../Board.css'
export const Square = ({ children, updateBoard, index }) => {
	const handleClick = () => {
		updateBoard(index)
	}

	return (
		<div
			className={`flex items-center justify-center w-[75px] h-[75px] md:w-[150px] md:h-[150px] font-bold md:text-8xl square-${index}`}
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