import { Square } from './Square'
import { useState } from 'react'
import { Turns, WINNING_COMBINATIONS } from '../utils/constants'
import { ScoreBoard } from './ScoreBoard'
import {
	incrementO,
	incrementX,
	incrementDraw,
	clearState
} from '../redux/userSlice'
import { useDispatch } from 'react-redux'
export const Board = () => {
	const dispatch = useDispatch()
	const [turn, setTurn] = useState(Turns.X)
	const [board, setBoard] = useState(Array(9).fill(null))
	const [winner, setWinner] = useState(null)
	const [isGameFinish, setIsGameFinish] = useState(false)

	const checkWinner = (newBoard) => {
		/* Si retorna null no hay ganador */
		for (let i in WINNING_COMBINATIONS) {
			const [a, b, c] = WINNING_COMBINATIONS[i]
			if (
				newBoard[a] &&
				newBoard[a] === newBoard[b] &&
				newBoard[a] === newBoard[c]
			) {
				return board[a]
			}
		}
		return null
	}
	const DispatchWinner = (winner) => {
		if (winner === 'X') {
			dispatch(incrementX())
			setIsGameFinish(true)
		} else if (winner === 'O') {
			dispatch(incrementO())
			setIsGameFinish(true)
		}

		
	}
	const updateBoard = (index) => {
		/* Si ya hay un ganador no se aplica */
		if (winner) return

		/* Si ya está ocupada la posicion no se aplica */
		if (board[index] !== null) return
		/* Actualiza el tablero con el turno */
		const newBoard = [...board]
		newBoard[index] = turn
		setBoard(newBoard)
		/* Cambia de turno */
		const newTurn = turn === Turns.X ? Turns.O : Turns.X
		setTurn(newTurn)
		/* Revisa si hay un ganador */
		setWinner(checkWinner(newBoard))

		/* Si hay empate lo guarda en la scoreboard */
		if (newBoard.every((square) => square !== null)) {
			dispatch(incrementDraw())
			setIsGameFinish(true)
		}
		/* Guarda el ganador en la scoreBoard */
		DispatchWinner(checkWinner(newBoard))
	}

	return (
		<>
			<main>
				<section className="mb-12 text-center md:text-5xl">
					<h1>Tic Tac Toe</h1>
				</section>
				<section>
					<div className="grid grid-cols-3 grid-rows-3">
						{board.map((_, index) => (
							<Square
								key={index}
								index={index}
								updateBoard={updateBoard}
								board={board}
								winner={winner}
								setWinner={setWinner}
								checkWinner={checkWinner}
							>
								<span>{board[index]}</span>
							</Square>
						))}
					</div>
				</section>
				<ScoreBoard winner={winner}>
					<>
						{isGameFinish ? (
							<button
								className="bg-transparent fixed h-screen w-screen top-0 left-0 bg-opacity-50"
								onClick={() => {
									setBoard(Array(9).fill(null))
									setTurn(Turns.X)
									setWinner(null)
									setIsGameFinish(false)
								}}
							></button>
						) : null}

						<button
							className="bg-blue-500 z-50 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
							onClick={() => {
								dispatch(clearState())
								setBoard(Array(9).fill(null))
								setTurn(Turns.X)
								setWinner(null)
								setIsGameFinish(false)
							}}
						>
							Reiniciar ScoreBoard
						</button>
					</>
				</ScoreBoard>
			</main>
		</>
	)
}
