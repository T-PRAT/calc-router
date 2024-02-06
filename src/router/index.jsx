import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Contact } from "../pages/Contact.jsx";
import { Day } from "../pages/Day.jsx";

// import { UserProfile } from "../components/UserProfile.jsx";
// import { UserList } from "../components/UserList.jsx";
import ErrorPage from "../error-page.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/contact",
		element: <Contact />
	},
	{
		path: "/day/:dayId",
		element: <Day />
	}
])

export default router;
