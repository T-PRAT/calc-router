import { useReducer, useEffect, useState } from "react";
import { CalcButton } from "./CalcButton.jsx";
import { reducer, initialState } from "../reducer/calc.jsx";
import { Card } from "../wrapper/Card.jsx";
import { CalcEntry } from "../wrapper/CalcEntry.jsx";
import { CalcGrid } from "../wrapper/CalcGrid.jsx";
import { CalcWrapper } from "../wrapper/CalcWrapper.jsx";
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

	useEffect(() => {
		dispatch({ type: "RESET" })
	}, [dayId])

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
		<CalcWrapper>
			<Card relative={false}>
				{state.message && <p className="">{state.message}</p>}
				<CalcEntry>{state.current}</CalcEntry>
				<CalcGrid>
					{state.symbols.map(s => <CalcButton key={s} clicker={handleClickSymbol(s)} label={s} />)}

					<CalcButton clicker={() => dispatch({ type: "EQUALS", dayId: dayId })} label={"="} />
					<CalcButton clicker={handleClickOperation("CLEAR")} label={"C"} />
				</CalcGrid>
			</Card>
			<Card relative={true}>
				<button onClick={handleClickClearData}>
					<img src={clear} alt="clear" className="w-6 h-6 absolute top-2 right-2 " />
				</button>
				<h3 className="pb-4 font-bold">Précédents calculs : </h3>
				<ul className="text-left space-y-2">
					{data.map((d, i) => <li className="p" key={i}>{d[0]} = {d[1]}</li>)}
				</ul>
			</Card>
		</CalcWrapper>
	)
}
