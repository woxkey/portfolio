import React from 'react';
import IPropsProjectItem from '../../interfaces/IPropsProjectItem';
import {AiFillGithub} from 'react-icons/ai';
import {MdLiveTv} from 'react-icons/md';

const ProjectItem: React.FC<IPropsProjectItem> = ({img, title}) => {
	return (
		<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
			<img
				src={img}
				alt={title}
				className="rounded-xl group-hover:opacity-10"
			/>
			<div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
				<h3 className="text-2xl font-bold text-white tracking-wider text-center">
					{title}
				</h3>
				<p className="pb-4 pt-2 text-white text-center">React TypeScript</p>
				<div className="flex gap-7 ">
					<a href="/">
						<p className="flex justify-center items-center hover:scale-110 ease-in duration-300 text-center w-40   rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg ">
							See Live
							<MdLiveTv />
						</p>
					</a>
					<a href="/">
						<p className="flex justify-center items-center hover:scale-110 ease-in duration-300 text-center w-40  rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
							GitHub
							<AiFillGithub />
						</p>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectItem;
