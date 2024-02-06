import { useReducer } from "react";
import { CalcButton } from "./CalcButton.jsx";
import { reducer, initialState } from "../reducer/calc.jsx";

export default function Calc() {
	const [state, dispatch] = useReducer(reducer, initialState)

	const numbersRow1 = [7, 8, 9];
	const numbersRow2 = [4, 5, 6];
	const numbersRow3 = [1, 2, 3];
	console.log(state)

	const handleClickNumber = (value) => () => {
		dispatch({ type: "ADD_SYMBOL", value: value })
	}

	const handleClickOperation = (type) => () => {
		dispatch({ type: type })
	}

	return (
		<>
			<p>{state.current}</p>
			<div className="calc-numbers-list grid grid-cols-[40px_40px_40px_40px]">
				{numbersRow1.map(n => <CalcButton key={n} clicker={handleClickNumber(n)} label={n} />)}
				<CalcButton clicker={handleClickNumber("+")} label={"+"} />
				{numbersRow2.map(n => <CalcButton key={n} clicker={handleClickNumber(n)} label={n} />)}
				<CalcButton clicker={handleClickOperation("MULTIPLY_OPERATION")} label={"x"} />
				{numbersRow3.map(n => <CalcButton key={n} clicker={handleClickNumber(n)} label={n} />)}
				<div></div>
				<CalcButton clicker={handleClickNumber(0)} label={0} />
				<CalcButton clicker={handleClickOperation("ADD_POINT")} label={"."} />
				<CalcButton clicker={handleClickOperation("EQUALS")} label={"="} />
			</div>

		</>
	)
}
