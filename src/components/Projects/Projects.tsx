import React from 'react';
import ProjectItem from '../ProjectItem/ProjectItem';

const Projects = () => {
	return (
		<div id="projects" className="max-w-[1040px] m-auto md:px-20 p-4 py-16">
			<h1 className="text-4xl font-bold text-center text-[#001b5e]">
				Projects
			</h1>
			<p className="text-center py-8">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae porro
				atque provident dolorem recusandae repellat quas eaque nostrum hic
				molestiae. Earum, laboriosam quae? Esse, vitae cupiditate expedita quo
				accusamus facere?
			</p>
			<div className="grid sm:grid-cols-2 gap-12">
				<ProjectItem
					img={
						'https://media.istockphoto.com/id/980272768/photo/project-management-concept-chart-with-keywords-and-icons.jpg?s=612x612&w=0&k=20&c=OB3Lhh1-vD8ZU_07PM6F_vnN-hJTYhtWYID9UrFJRyU='
					}
					title="Crypto App"
				/>
				<ProjectItem
					img={
						'https://media.istockphoto.com/id/980272768/photo/project-management-concept-chart-with-keywords-and-icons.jpg?s=612x612&w=0&k=20&c=OB3Lhh1-vD8ZU_07PM6F_vnN-hJTYhtWYID9UrFJRyU='
					}
					title="Crypto App"
				/>
				<ProjectItem
					img={
						'https://media.istockphoto.com/id/980272768/photo/project-management-concept-chart-with-keywords-and-icons.jpg?s=612x612&w=0&k=20&c=OB3Lhh1-vD8ZU_07PM6F_vnN-hJTYhtWYID9UrFJRyU='
					}
					title="Crypto App"
				/>
				<ProjectItem
					img={
						'https://media.istockphoto.com/id/980272768/photo/project-management-concept-chart-with-keywords-and-icons.jpg?s=612x612&w=0&k=20&c=OB3Lhh1-vD8ZU_07PM6F_vnN-hJTYhtWYID9UrFJRyU='
					}
					title="Crypto App"
				/>
			</div>
		</div>
	);
};

export default Projects;
