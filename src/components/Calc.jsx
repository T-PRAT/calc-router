import { useReducer, useEffect, useState } from "react";
import { CalcButton } from "./CalcButton.jsx";
import { reducer, initialState } from "../reducer/calc.jsx";
import localforage from "localforage";
import clear from "../assets/clear.svg";

export default function Calc({ dayId }) {
	const [state, dispatch] = useReducer(reducer, initialState)
	const [data, setData] = useState([])

	useEffect(() => {
		localforage.getItem(dayId).then((day) => {
			const d = day ?? []
			setData([...d])
			dispatch({ type: "FETCHED" })
		}).catch((err) => console.error(err))
	}, [state.fetchData, dayId])

	const handleClickSymbol = (value) => () => {
		dispatch({ type: "ADD_SYMBOL", value: value })
	}

	const handleClickOperation = (type) => () => {
		dispatch({ type: type })
	}

	const handleClickClearData = () => {
		setData([]);
		localforage.removeItem(dayId).catch(err => console.error(err))
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 pt-12 mx-auto max-w-2xl space-x-2 rounded-lg">
			<div className="bg-zinc-800 px-12 py-6 rounded-lg">
				{state.message && <p className="">{state.message}</p>}
				<p className="bg-zinc-600 w-full h-14 rounded text-right text-3xl mb-2 flex items-center justify-end pr-2 overflow-auto">{state.current}</p>
				<div className="calc-numbers-list grid grid-cols-4 gap-1">
					{state.symbols.map(s => <CalcButton key={s} clicker={handleClickSymbol(s)} label={s} />)}

					<CalcButton clicker={() => dispatch({ type: "EQUALS", dayId: dayId })} label={"="} />
					<CalcButton clicker={handleClickOperation("CLEAR")} label={"C"} />
				</div>
			</div>
			<div className="relative bg-zinc-800 px-12 py-6 rounded-lg">
				<button onClick={handleClickClearData}>
					<img src={clear} alt="clear" className="w-6 h-6 absolute top-2 right-2 " />
				</button>
				<h3 className="pb-4 font-bold">Précédents calculs : </h3>
				<ul className="text-left space-y-2">
					{data.map((d, i) => <li className="p" key={i}>{d[0]} = {d[1]}</li>)}
				</ul>
			</div>
		</div>
	)
}
