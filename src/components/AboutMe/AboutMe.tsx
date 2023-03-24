import React from 'react';

const AboutMe = () => {
	return (
		<div
			id="about-me"
			className="max-w-[1040px] m-auto flex justify-center  flex-col h-screen px-20"
		>
			<h1 className="text-4xl font-bold text-center text-[#001b5e">About Me</h1>
			<div className="flex justify-center items-center gap-10  mt-10 flex-col md:flex-row text-center md:text-left">
				<img
					className="rounded-xl w-80 h-80 object-cover"
					src="https://images.unsplash.com/photo-1628875986840-b6f3791d8edc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdoaXRlJTIwZ3V5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
					alt=""
				/>
				<p className="text-base md:text-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. A, nulla aut
					in porro iusto consequatur non voluptatum eaque! Error dolorum
					aliquam, vel nulla unde rerum dignissimos velit neque a cupiditate,
					esse totam iure quam labore. Ullam quos eius veritatis deserunt sint
					error voluptatum dolorem ducimus impedit quae. Necessitatibus placeat
					recusandae voluptas et nisi rerum, mollitia sapiente? Aut alias
					numquam quam commodi sint, reprehenderit error quasi incidunt
					consectetur magnam sed corrupti molestias, delectus officia fugit
					officiis cupiditate harum doloribus? Omnis repellendus dolores illum
					facilis maxime culpa a, voluptatibus eius! Autem voluptate repellendus
					illo, perferendis sapiente laborum reprehenderit explicabo mollitia
					corporis blanditiis.
				</p>
			</div>
		</div>
	);
};

export default AboutMe;
