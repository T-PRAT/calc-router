import { useReducer } from "react";
import { CalcButton } from "./CalcButton.jsx";
import { reducer, initialState } from "../reducer/calc.jsx";
import localforage from "localforage";

export default function Calc({dayId}) {
	const [state, dispatch] = useReducer(reducer, initialState)

	const handleClickSymbol = (value) => () => {
		dispatch({ type: "ADD_SYMBOL", value: value })
	}

	const handleClickOperation = (type) => () => {
		dispatch({ type: type })
	}

	return (
		<>
			<h1>Calculator</h1>
			{state.message && <p>{state.message}</p>}
			<p>{state.current}</p>
			<div className="calc-numbers-list grid grid-cols-[40px_40px_40px_40px]">
				{state.symbols.map(s => <CalcButton key={s} clicker={handleClickSymbol(s)} label={s} />)}

				<CalcButton clicker={() => dispatch({ type: "EQUALS", dayId: dayId })} label={"="} />
				<CalcButton clicker={handleClickOperation("CLEAR")} label={"C"} />
			</div>
		</>
	)
}
