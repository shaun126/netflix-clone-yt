import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import useAuth from '../customHooks/useAuth';

type Inputs = {
	email: string;
	password: string;
};

const Login = () => {
	const [login, setLogin] = useState(false);
	const { signUp, signIn } = useAuth();
	const [loading, setLoading] = useState(false);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
		if (login) {
			setLoading(true);
			await signIn(email, password);
			setLoading(false);
		} else {
			setLoading(true);
			await signUp(email, password);
			setLoading(false);
		}
	};

	return (
		<div className='relative h-screen w-screen flex md:items-center md:justify-center md:bg-transparent'>
			<Head>
				<title>Netflix</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Image src='https://rb.gy/p2hphi' className='-z-10 opacity-60 !hidden sm:!inline' layout='fill' objectFit='cover' />

			<img
				src='https://rb.gy/ulxxee'
				className='absolute top-4 left-4  cursor-pointer object-contain md:top-10 md:left-6'
				alt='netflix'
				width={150}
				height={150}
			/>

			<form onSubmit={handleSubmit(onSubmit)} className='relative m-auto mt-24 space-y-8 rounded sm:bg-black/75 py-10 px-6  md:max-w-md md:px-14 '>
				<h1 className='text-4xl font-semibold'>Sign In</h1>
				<div className='space-y-4'>
					<label className='inline-block w-full'>
						<input type='email' placeholder='Email' className='input' {...register('email', { required: true })} />
						{errors.email && <p className='p-1 text-sm font-semibold text-orange-500'>This field is required</p>}
					</label>
					<label className='inline-block w-full'>
						<input type='password' placeholder='Password' className='input' {...register('password', { required: true })} />
						{errors.password && <p className='p-1 text-sm font-semibold text-orange-500'>This field is required</p>}
					</label>
				</div>

				<button
					type='submit'
					className={`w-full ${loading ? 'bg-gray-500' : 'bg-[#e50914]'} rounded py-3 font-semibold`}
					onClick={() => setLogin(true)}
					disabled={loading === true}
				>
					{`${!loading ? 'Sign In' : 'Wait plz....'}`}
				</button>

				<div className='text-[gray]'>
					New to Netflix?{' '}
					<button className={`text-white hover:underline`} type='submit' onClick={() => setLogin(false)}>
						Sign up now
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
