import React from 'react';
import './Homepage.Styles.scss';

const Homepage = () => {
	return (
			<div className='homepage bg-light-green'>
				<h1 className='categories color black'>Book Categories</h1>
				<div className='directory-menu'>
					<div className='menu-item'>
						<div className='content grow'>
							<h1 className='title'>Technology</h1>
							<span className='subtitle'>Rent Now</span>
						</div>
					</div>
					<div className='menu-item'>
						<div className='content grow'>
							<h1 className='title'>Factasy</h1>
							<span className='subtitle'>Rent Now</span>
						</div>
					</div>
					<div className='menu-item'>
						<div className='content grow'>
							<h1 className='title'>Science Fiction</h1>
							<span className='subtitle'>Rent Now</span>
						</div>
					</div>
					<div className='menu-item'>
						<div className='content grow'>
							<h1 className='title'>Mystery</h1>
							<span className='subtitle'>Rent Now</span>
						</div>
					</div>
					<div className='menu-item'>
						<div className='content grow'>
							<h1 className='title'>Thriller</h1>
							<span className='subtitle'>Rent Now</span>
						</div>
					</div>
					<div className='menu-item'>
						<div className='content grow'>
							<h1 className='title'>Romance</h1>
							<span className='subtitle'>Rent Now</span>
						</div>
					</div>
				</div>
			</div>
		);
}

export default Homepage;