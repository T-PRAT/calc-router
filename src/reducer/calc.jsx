export const initialState = {
	current: "",
	past: "",
	operation: ""
}

export const reducer = (state, action) => {
	console.log(eval("12+3+2"))
	switch (action.type) {
		case "ADD_SYMBOL":
			return { ...state, current: state.current + action.value }
		case "ADD_OPERATION":
			return { ...state, past: parseFloat(state.current) + parseFloat(state.past || "0"), current: "" }
		case "MULTIPLY_OPERATION":
			return { ...state, past: parseFloat(state.current) * parseFloat(state.past || "0"), current: "" }
		case "ADD_POINT":
			if (state.current.includes(".")) return { ...state };
			return { ...state, current: state.current + "." }
		case "EQUALS":
			return { ...state }
	}
}
