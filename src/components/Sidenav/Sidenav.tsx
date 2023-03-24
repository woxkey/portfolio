import React, {useState} from 'react';
import {
	AiOutlineMenu,
	AiOutlineHome,
	AiOutlineProject,
	AiOutlineMail,
} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';

const Sidenav: React.FunctionComponent = (): React.ReactElement => {
	const [nav, setNav] = useState<boolean>(false);

	const handleNav = (): void => {
		setNav(!nav);
	};
	return (
		<div>
			<AiOutlineMenu
				onClick={handleNav}
				className=" top-4 right-4 z-[99] md:hidden fixed"
			/>
			{nav ? (
				<div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 md:hidden ">
					<a
						href="#main"
						className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
					>
						<AiOutlineHome size={20} />
						<span className="pl-4 w-20">Home</span>
					</a>
					<a
						href="#about-me"
						className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
					>
						<BsPerson size={20} />
						<span className="pl-4 w-20">Resume</span>
					</a>

					<a
						href="#projects"
						className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
					>
						<AiOutlineProject size={20} />
						<span className="pl-4 w-20">Projects</span>
					</a>
					<a
						href="#contact"
						className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
					>
						<AiOutlineMail size={20} />
						<span className="pl-4 w-20">Contact</span>
					</a>
				</div>
			) : (
				''
			)}
			<div className="md:block hidden fixed top-[50%] z-10 translate-y-[-50%]">
				<div className="flex flex-col">
					<a
						href="#main"
						className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
					>
						<AiOutlineHome size={20} />
					</a>
					<a
						href="#about-me"
						className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
					>
						<BsPerson size={20} />
					</a>
					<a
						href="#projects"
						className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
					>
						<AiOutlineProject size={20} />
					</a>

					<a
						href="#contact"
						className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
					>
						<AiOutlineMail size={20} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Sidenav;
