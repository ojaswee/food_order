import logo from '../assets/logo.jpg';

export default function Header() {
	return (
		<header id="main-header">
			<div id ="title">
				<img src={logo} alt="Logo" />
				<h1>Delicious Food</h1>
			</div>
			<nav>
				<button className="btn">Cart(0)</button>
			</nav>
		</header>
	);
}