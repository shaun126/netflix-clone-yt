import React from 'react';
import { BellIcon, SearchIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useScrolled } from '../customHooks/useScrolled';
import useAuth from '../customHooks/useAuth';
const Header = () => {
	const [isScrolled] = useScrolled();
	const { logOut } = useAuth();

	return (
		<header className={`${isScrolled && 'bg-red-900'}`}>
			<div className='flex items-center space-x-2 md:space-x-10'>
				<img className='cursor-pointer object-contain' src='https://rb.gy/ulxxee' width={100} height={100} alt='' />

				<ul className='hidden space-x-4 md:flex headerLink '>
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

				{/* <Link href='/account'> */}
				<img onClick={logOut} src='https://rb.gy/g1pwyx' alt='icon' className='cursor-pointer rounded' />
				{/* </Link> */}
			</div>
		</header>
	);
};

export default Header;
