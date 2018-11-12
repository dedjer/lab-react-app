import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App.js";
import Homepage from "./Home.js";
import Parent from "./Parent.js";
import Fetch from "./Fetch";

const Routes = () => (
	<App>
		<Switch>
			<Route exact path="/" component={Homepage} />
			<Route exact path="/Parent" component={Parent} />
			<Route exact path="/Fetch" component={Fetch} />
		</Switch>
	</App>
);

export default Routes;
