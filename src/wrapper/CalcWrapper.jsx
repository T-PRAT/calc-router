export function CalcWrapper({ children }) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 pt-12 mx-auto max-w-2xl space-x-2 rounded-lg">
			{children}
		</div>
	)
}
