import localforage from "localforage"

export const initialState = {
	current: "",
	message: "",
	symbols: ["7", "8", "9", "+", "4", "5", "6", "*", "1", "2", "3", "", "0", "."],
	clearable: false,
	fetchData: true
}

export const reducer = (state, action) => {
	let result = 0;
	let reg = /^$/i
	switch (action.type) {
		case "ADD_SYMBOL":
			if (state.clearable) {
				return {
					...state,
					...(["+", "*", "."].includes(action.value) ? { current: "", message: "Invalid symbol to start the expression" } : { current: action.value, message: "" }),
					clearable: false,
				}
			}
			reg = /^\d*(?:\d\.\d*)?(?:\d(?:\+|\*)\d*(?:\d\.\d*)?)*$/i		// Test of validity of the expression
			if (!reg.test(`${state.current}${action.value}`)) return { ...state, message: "Invalid symbol" }
			return { ...state, current: state.current + action.value, message: "" }
		case "EQUALS":
			reg = /^\d+(?:\.\d+)?(?:(?:\+|\*)\d+(?:\.\d+)?)*$/i
			if (!reg.test(state.current)) return { ...state, message: "Invalid expression" }
			result = calc(state.current);
			save(action.dayId, state.current, result)
			return { ...state, current: result, message: "", clearable: true, fetchData: true }
		case "CLEAR":
			return { ...state, current: "", message: "", clearable: false }
		case "FETCHED":
			return { ...state, fetchData: false }
		case "RESET":
			return { ...state, ...initialState }
		default:
			throw ("ERROR_CALC")
	}
}

function save(dayId, expression, result) {
	localforage.getItem(dayId).then((day) => {
		const newExpr = expression.split("+").join(" + ").split("*").join(" * ")
		localforage.setItem(dayId, [...(day === null ? [] : day), [newExpr, result]])
	}).catch((err) => {
		console.log(err)
	})
}

function calc(expression) {
	const added = expression.split("+")
	const multiplied = added.map(s => s.split("*").map(Number).reduce((a, b) => a * b))
	return multiplied.reduce((a, b) => a + b) + ""
}
