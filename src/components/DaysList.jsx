import { NavLink } from "react-router-dom"
export function DaysList() {
	const days = [
		{ id: 2, day: "Lundi" },
		{ id: 3, day: "Mardi" },
		{ id: 4, day: "Mercredi" },
		{ id: 5, day: "Jeudi" },
		{ id: 6, day: "Vendredi" },
		{ id: 7, day: "Samedi" },
		{ id: 1, day: "Dimanche" },
	]

	return (
		<div className="bg-zinc-800 flex flex-col p-6 w-1/6 h-[90vh]">
			{days.map((day) => (
				<NavLink key={day} to={`/day/${day.id}`} className={({ isActive }) => isActive ? "bg-zinc-700 p-4 w-full hover:bg-zinc-700 rounded-lg my-1" : "bg-zinc-800 p-4 hover:bg-zinc-700 w-full rounded-lg my-1"}>{day.day}</NavLink>
			))}
		</div>
	)
}
