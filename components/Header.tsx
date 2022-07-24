import React, { useEffect, useState } from 'react';
import { BellIcon, SearchIcon } from '@heroicons/react/solid';
import Link from 'next/link';
const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className={`${isScrolled && 'bg-gray-900'}`}>
			<div className='flex items-center space-x-2 md:space-x-10'>
				<img className='cursor-pointer object-contain' src='https://rb.gy/ulxxee' width={100} height={100} alt='' />

				<ul className='hidden space-x-4 md:flex headerLink'>
					<li>Home</li>
					<li>TV Shows</li>
					<li>Movies</li>
					<li>New & Popular</li>
					<li>My List</li>
				</ul>
			</div>

			<div className='flex items-center space-x-4 text-sm font-light'>
				<SearchIcon className='hidden sm:inline h-6 w-6' />
				<p className='hidden  lg:inline'>Kids</p>

				<BellIcon className='h-6 w-6' />

				<Link href='/account'>
					<img src='https://rb.gy/g1pwyx' alt='icon' className='cursor-pointer rounded' />
				</Link>
			</div>
		</header>
	);
};

export default Header;
