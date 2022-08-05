import React, { useEffect, useState } from 'react';
import { Movie } from '../typing';
import { baseUrl } from '../constants/movie';
import Image from 'next/image';
import { InformationCircleIcon, PlayIcon } from '@heroicons/react/outline';

interface Props {
	netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
	const [movie, setMovie] = useState<Movie | null>(null);

	useEffect(() => {
		setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]);
	}, [netflixOriginals]);

	return (
		<div className=' flex flex-col pt-20 space-y-2 md:space-y-4 lg:h-[75vh] lg:justify-end '>
			<div className='absolute top-0 left-0 h-[95vh] -z-10 w-screen'>
				<Image priority src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} layout='fill' objectFit='cover' />
			</div>
			<h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>{movie?.title || movie?.name || movie?.original_name}</h1>

			<p className='text-shadow-md max-w-xs text-sm md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>{movie?.overview.substring(0, 200)}.....</p>

			<div className='bannerButton flex space-x-3'>
				<button className='bg-white text-black'>
					{' '}
					<PlayIcon className='w-7 h-7' /> Play
				</button>
				<button className='bg-[gray]/70'>
					{' '}
					More Info <InformationCircleIcon className='h-7 w-7 md:h-8 md:w-8' />{' '}
				</button>
			</div>
		</div>
	);
};

export default Banner;
