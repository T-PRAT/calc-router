export function CalcGrid({ children }) {
	return (
		<div className="calc-numbers-list grid grid-cols-4 gap-1">
			{children}
		</div>
	)
}
