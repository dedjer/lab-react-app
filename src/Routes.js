import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App.js";
import Homepage from "./Home.js";
import Parent from "./Parent.js";
import Customer from "./Customer.js";
import Vehicle from "./Vehicle.js";
import Fetch from "./Fetch";

const Routes = () => (
	<App>
		<Switch>
			<Route exact path="/" component={Homepage} />
			<Route path="/Customer" component={Customer} />
			<Route path="/Vehicle" component={Vehicle} />
			<Route path="/Parent" component={Parent} />
			<Route path="/Fetch" component={Fetch} />
		</Switch>
	</App>
);

export default Routes;
