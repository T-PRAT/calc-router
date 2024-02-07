import localforage from "localforage"

export const initialState = {
	current: "",
	message: "",
	symbols: ["7", "8", "9", "+", "4", "5", "6", "*", "1", "2", "3", "", "0", "."],
	clearable: false
}

export const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_SYMBOL":
			if(state.clearable) {
				return { 
					...state, 
					...(["+", "*", "."].includes(action.value)? {current: "", message: "Invalid symbol to start the expression"} : {current: action.value, message: ""}), 
					clearable: false, 
				}
			}
			const reg = /^\d*(?:\d\.\d*)?(?:\d(?:\+|\*)\d*(?:\d\.\d*)?)*$/i		// Test of validity of the expression
			if (!reg.test(`${state.current}${action.value}`)) return { ...state, message: "Invalid symbol" }
			return { ...state, current: state.current + action.value, message: "" }
		case "EQUALS":
			const regEquals = /^\d+(?:\.\d+)?(?:(?:\+|\*)\d+(?:\.\d+)?)*$/i
			if (!regEquals.test(state.current)) return { ...state, message: "Invalid expression"}
			const result = calc(state.current);
			save(action.dayId, state.current, result)
			return { ...state, current: result, message: "", clearable: true}
		case "CLEAR":
			return { ...state, current: "", message: "", clearable: false }
	}
	Math.eval()
}

function save(dayId, expression, result) {
	localforage.getItem(dayId).then((day) => {
		console.log(day, expression, result, dayId)
		localforage.setItem(dayId, [ ...(day === null ? [] : day), [expression, result] ])
	}).catch((err) => {
		console.log(err)
	})
}

function calc(expression) {
	console.log(expression)
	const added = expression.split("+")
	const multiplied = added.map(s => s.split("*").map(Number).reduce((a, b) => a * b))
	return multiplied.reduce((a, b) => a + b) + ""
}