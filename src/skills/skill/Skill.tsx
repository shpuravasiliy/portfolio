import React, {FC} from 'react';
import style from './Skill.module.scss';

type SkillPropsType = {
    icon?: string
    title: string
    description: string
}

const Skill: FC<SkillPropsType> = (props) => {
    return (
        <div className={style.skill}>
            <div className={`${style.icon} ${props.icon}`}></div>
            <div className={style.infoBlock}>
                <h3 className={style.title}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
};

export default Skill;