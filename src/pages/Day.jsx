import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Calc from "../components/Calc.jsx"


export function Day() {
	const { dayId } = useParams()
	const days = ["", "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
	if (days?.[parseInt(dayId, 10)] === undefined) {
		return (
			<Layout>
				{"Le jour n'a pas été trouvé"}
			</Layout>
		)
	}
	return (
		<Layout>
			<h3 className="text-xl pb-4">Calcul du {days[parseInt(dayId, 10)]}</h3>
			<Calc />
		</Layout>
	)
}
