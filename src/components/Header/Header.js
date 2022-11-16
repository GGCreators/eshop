import React from "react"
import "./Header.css"
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import Storefront from '@mui/icons-material/Storefront';
import Search from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'
import { useStateValue } from '../../StateProvider'

function Header() {
	const [{ basket }, dispatch] = useStateValue()
	return (
		<div className="header">
			<Link to="/" style={{ textDecoration: "none" }}>
				<div className="header__logo">
					<Storefront fontSize="large" className="header__logoImage" />
					<h2 className="header__logoTitle">eSHop</h2>
				</div>
			</Link>

			<div className="header__search">
				<input type="text" className='header__searchInput' />
				<Search className="header__searchIcon" />
			</div>

			<div className="header__nav">
				<Link to="/login" style={{ textDecoration: "none" }}>
					<div className="nav__item">
						<span className="nav__itemLineOne">Hello Guest</span>
						<span className="nav__itemLineTwo">Sign In</span>
					</div>
				</Link>
				<div className="nav__item">
					<span className="nav__itemLineOne">Your</span>
					<span className="nav__itemLineTwo">Shop</span>
				</div>
				<Link to="/checkout" style={{ textDecoration: "none" }}>
					<div className="nav__itemBasket">
						<ShoppingBasket fontSize="large" />
						<span className="nav__itemLineTwo nav_basketCount">{basket.length}</span>
					</div>
				</Link>

			</div>
		</div>
	)
}

export default Header