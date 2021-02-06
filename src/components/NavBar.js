import { Link } from 'react-router-dom';
const NavBar = () => {
	return (
		<div className=''>
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark nav-height '>
				<div className='container'>
					<Link className='navbar-brand ' to='/'>
						<i className='fas fa-newspaper'></i> Hamara News
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse  ' id='navbarNav'>
						<ul className='navbar-nav'>
							<li className='nav-item '>
								<Link className='nav-link' to='/'>
									Home
								</Link>
							</li>

							<li className='nav-item'>
								<Link className='nav-link' to='/about'>
									About
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link ' to='/contact'>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
