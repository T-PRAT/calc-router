import { Navigation } from "./Navigation.jsx";
import { DaysList } from "./DaysList.jsx";

function Layout({ children }) {
	return (
		<div className="">
			<Navigation />
			<div className="flex">
				<DaysList />
				<main className="p-8 text-center w-full">
					{children}
				</main>
			</div>
		</div>
	)
}

export default Layout;
