export function CalcButton({ clicker, label }) {
	return (
		<button className="h-10 bg-zinc-400 w-10 text-zinc-950 font-bold border border-zinc-950" onClick={clicker}>{label}</button>
	)
}
