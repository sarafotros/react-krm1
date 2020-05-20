import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown, FormControl, Form, Row} from 'react-bootstrap'

export default function BSScreen() {
 return (
		<Container style={{ backgroundColor: '#e1e1e1', minHeight: '100vh' }}>
			<Row >
				<Navbar
					variant="dark"
					expand="lg"
					style={{ backgroundColor: '#455A64', width: '100%' }}
				>
					<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#link">Link</Nav.Link>
							<Nav.Link href="#about">About Us</Nav.Link>
							<Nav.Link href="#contact">Contact Us</Nav.Link>
							<NavDropdown title="Dropdown" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">
									Something
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">
									Separated link
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Form inline>
							<FormControl
								type="text"
								placeholder="Search"
								className="mr-sm-2"
							/>
							<Button variant="outline-success">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Navbar>
			</Row>
			<Row style={{ backgroundColor: '#B2DFDB', height: 250 }}></Row>
		</Container>
 );
}
