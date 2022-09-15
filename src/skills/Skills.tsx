import React, {FC} from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Skill from './skill/Skill';
import {SectionType, skillsType} from '../content/contentData';
import {Title} from '../common/components/Title/Title';

type SkillsPropsType = {
    skills: SectionType<skillsType[]>
}

const Skills: FC<SkillsPropsType> = ({skills}) => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title
                    title={skills.title}
                    description={skills.titleDescription}
                />
                <div className={style.skills}>
                    {skills.data.map(p => <Skill
                        key={p.title}
                        title={p.title}
                        description={p.description}
                    />)}
                </div>
            </div>
        </div>
    );
};

export default Skills;