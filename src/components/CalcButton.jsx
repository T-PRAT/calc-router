export function CalcButton({ clicker, label }) {
	return (
		<button className="h-14 bg-zinc-400 w-14 text-zinc-950 font-bold rounded hover:bg-zinc-500 active:bg-zinc-600" onClick={clicker}>{label}</button>
	)
}
