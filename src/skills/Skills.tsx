import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Skill from './skill/Skill';

export const descriptionExample1 = 'Lorem ipsum dolor sit amet, consectetur'
export const descriptionExample2 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'
export const descriptionExample3 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor '

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Скиллы</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={descriptionExample1}/>
                    <Skill title={'CSS'} description={descriptionExample2}/>
                    <Skill title={'React'} description={descriptionExample3}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;