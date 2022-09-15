import React, {FC} from 'react';
import style from './Project.module.scss';

type ProjectPropsType = {
    image: string
    title: string
    description: string
}

const Project: FC<ProjectPropsType> = ({image, title, description}) => {

    const bgImage = {
        backgroundImage: `url(${image})`
    }

    return (
        <div className={style.project}>
            <div className={style.imageBlock} style={bgImage}>
                <a href="" className={style.viewBtn}>Смотреть</a>
            </div>
            <div className={style.infoBlock}>
                <h3 className={style.title}>{title}</h3>
                <p className={style.description}>{description}</p>
            </div>
        </div>
    );
};

export default Project;