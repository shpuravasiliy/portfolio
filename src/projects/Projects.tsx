import React, {FC} from 'react';
import style from './Projects.module.sass';
import styleContainer from '../common/styles/Container.module.css';
import Project from './project/Project';
import {SectionType, projectsType} from '../content/contentData';
import {Title} from '../common/components/Title/Title';

type ProjectsPropsType = {
    projects: SectionType<projectsType[]>
}

const Projects: FC<ProjectsPropsType> = ({projects}) => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title
                    title={projects.title}
                    description={projects.titleDescription}
                />
                <div className={style.projects}>
                    {projects.data.map(p => <Project
                        key={p.title}
                        image={p.image}
                        title={p.title}
                        description={p.description}
                    />)}
                </div>
            </div>
        </div>
    );
};

export default Projects;