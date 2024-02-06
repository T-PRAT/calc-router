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
		<ul className="bg-zinc-800 flex space-x-4 p-4">
			{days.map((day) => (
				<li key={day.id}>
					<NavLink to={`/day/${day.id}`}>{day.id}. {day.day}</NavLink>
				</li>
			))}
		</ul>
	)
}
