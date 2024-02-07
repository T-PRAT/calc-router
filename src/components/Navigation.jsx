import { NavLink } from "react-router-dom"
import calculator from "../assets/calculator.svg"

export function Navigation() {
	return (
		<ul className="w-full h-[10vh] bg-zinc-700 flex space-x-8 text-2xl p-4 text-center pl-8">
			<li className="my-auto pr-4">
				<NavLink to="/">
					<img src={calculator} alt="calculator" className="w-10 h-10" />
				</NavLink>
			</li>
			<li className="my-auto">
				<NavLink to="/">Home</NavLink>
			</li>
			<li className="my-auto">
				<NavLink to="/contact">Contact</NavLink>
			</li>
		</ul>
	)
}
