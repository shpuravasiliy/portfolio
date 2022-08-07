import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Project from './project/Project';
import img1 from '../common/images/p2-2.png'
import img2 from '../common/images/p4-4.png'
import img3 from '../common/images/p3-3.png'
import {descriptionExample1, descriptionExample2, descriptionExample3} from '../skills/Skills';

// const img1 = url('../common/images/p2-2.jpg')


const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project image={img1} title={'Social network'} description={descriptionExample1}/>
                    <Project image={img2} title={'Todolist'} description={descriptionExample2}/>
                    <Project image={img3} title={'Some project'} description={descriptionExample3}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;