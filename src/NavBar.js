import React from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";
import { LinkContainer } from "react-router-bootstrap";

export default class NavBar extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<div>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">reactstrap</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<LinkContainer to="/">
									<NavLink>Home</NavLink>
								</LinkContainer>
							</NavItem>
							<NavItem>
								<LinkContainer to="/Customer">
									<NavLink>Customer</NavLink>
								</LinkContainer>
							</NavItem>
							<NavItem>
								<LinkContainer to="/Vehicle">
									<NavLink>Vehicle</NavLink>
								</LinkContainer>
							</NavItem>
							<NavItem>
								<LinkContainer to="/Parent">
									<NavLink>Parent</NavLink>
								</LinkContainer>
							</NavItem>
							<NavItem>
								<LinkContainer to="/Fetch">
									<NavLink>Fetch</NavLink>
								</LinkContainer>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Options
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>Option 1</DropdownItem>
									<DropdownItem>Option 2</DropdownItem>
									<DropdownItem divider />
									<DropdownItem>Reset</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}
