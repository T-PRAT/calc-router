import { Navigation } from "./Navigation.jsx";
import { DaysList } from "./DaysList.jsx";

function Layout({ children }) {
	return (
		<div className="">
			<Navigation />
			<DaysList />
			<main className="p-8">
				{children}
			</main>
		</div>
	)
}

export default Layout;
