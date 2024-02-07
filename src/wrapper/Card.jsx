export function Card({ relative, children }) {
	return (
		<div className={`${relative === true ? "relative " : ""}bg-zinc-800 px-12 py-6 rounded-lg`}>
			{children}
		</div>
	)
}
