import { NavLink } from "react-router-dom"

export function Navigation() {
	return (
		<ul className="w-full h-24 bg-zinc-700 flex space-x-4 text-2xl p-4 text-center">
			<li className="my-auto">
				<NavLink to="/">Home</NavLink>
			</li>
			<li className="my-auto">
				<NavLink to="/contact">Contact</NavLink>
			</li>
		</ul>
	)
}
