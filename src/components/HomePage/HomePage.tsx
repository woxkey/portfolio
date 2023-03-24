import React from 'react';
import {TypeAnimation} from 'react-type-animation';
import {FaLinkedinIn, FaTelegram} from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai';

const HomePage: React.FunctionComponent = (): React.ReactElement => {
	return (
		<div id="main">
			<img
				className="w-full h-screen object-cover object-left scale-x-[-1]"
				src="https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000"
				alt="background"
			/>
			<div className="w-full h-screen absolute top-0 left-0 bg-white/50">
				<div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center  items-center">
					<h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
						I'm Alen Bolatov
					</h1>
					<h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
						I'm a
						<TypeAnimation
							sequence={[
								'Developer',
								2000,
								'Coder',
								2000,
								'Tech Enthusiast',
								2000,
							]}
							wrapper="div"
							cursor={true}
							repeat={Infinity}
							style={{fontSize: '1em', paddingLeft: '5px'}}
						/>
					</h2>
					<div className="flex justify-evenly pt-6 max-w-[200px] w-full">
						<a
							className="hover:scale-125 ease-in duration-300"
							href="https://www.linkedin.com/in/alen-bolatov-74b485268/"
							target="_blank"
						>
							<FaLinkedinIn className="cursor-pointer" size={20} />
						</a>
						<a
							className="hover:scale-125 ease-in duration-300"
							href="https://t.me/bolatovalen"
							target="_blank"
						>
							<FaTelegram className="cursor-pointer" size={20} />
						</a>
						<a
							className="hover:scale-125 ease-in duration-300"
							href="https://github.com/woxkey "
							target="_blank"
						>
							<AiFillGithub className="cursor-pointer" size={20} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
