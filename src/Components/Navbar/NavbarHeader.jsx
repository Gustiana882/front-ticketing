import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container } from 'react-bootstrap';
import './style/NavbarHeader.scoped.scss';
import Tools from './Tools';
import MenusAfterLogin from './MenusAfterLogin';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Menus from './Menus';
import { useLocation } from 'react-router';

const NavbarHeader = () => {
	// const location = useLocation();
	// const { isAuth } = useSelector((state) => state.login);

	return (
		<div>
			<div className="navbar">
				<Navbar expand="lg">
					<Navbar.Brand className="brand">
						<img
							src="https://res.cloudinary.com/calvin-cloud/image/upload/v1629405150/Ankasa/logo_ankasa_xc7uai.svg"
							alt=""
						/>
						Ankasa
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="navbar-collapse" />
					<Container className="navbar-inside">
						<Navbar.Collapse className="basic-navbar" id="basic-navbar-nav">
							<Tools />
							<Menus />
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		</div>
	);
};

export default NavbarHeader;
