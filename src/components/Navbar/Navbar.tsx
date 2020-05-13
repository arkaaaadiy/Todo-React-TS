import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
	return (
		<div>
			<nav>
				<div className='nav-wrapper px-1'>
					<a href='/' className='brand-logo'>
						Список задач
					</a>
					<ul id='nav-mobile' className='right hide-on-med-and-down'>						
						<li>
							<NavLink to='/'>Задачи</NavLink>
						</li>
						<li>
							<NavLink to='/about'>Информации</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
