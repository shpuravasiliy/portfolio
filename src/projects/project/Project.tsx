import React, {FC} from 'react';
import style from './Project.module.css';

type ProjectPropsType = {
    image: string
    title: string
    description: string
}

const Project: FC<ProjectPropsType> = (props) => {
    return (
        <div className={style.project}>
            <div className={style.imageBlock} style={{backgroundImage: `url(${props.image})`}}>
                <a>Смотреть</a>
            </div>
                <h3 className={style.title}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
        </div>
    );
};

export default Project;