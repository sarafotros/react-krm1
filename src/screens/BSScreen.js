import React, {useState} from 'react'
import { Button, Container, Nav, Navbar, NavDropdown, FormControl, Form, Row, Col, Modal} from 'react-bootstrap'
import MyCheckBox from '../components/MyCheckBox'


export default function BSScreen() {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
 return (
		<Container style={{ backgroundColor: '#e1e1e1', minHeight: '100vh' }}>
			<Row>
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
							<Button variant="outline-success" onClick={setShow}>
								Sign In
							</Button>
						</Form>
					</Navbar.Collapse>
				</Navbar>
			</Row>
			<Row style={{ backgroundColor: '#B2DFDB' }}>
				<Col
					xs={12}
					sm={6}
					md={3}
					style={{ height: 250, backgroundColor: '#B2DFDB' }}
				></Col>
				<Col
					xs={12}
					sm={6}
					md={9}
					style={{ height: 250, backgroundColor: 'grey' }}
				></Col>
			</Row>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
						{/* <Form.Group controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Check me out" />
						</Form.Group> */}
                     <MyCheckBox/>
						<Button block variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</Container>
 );
}
