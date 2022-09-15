import React, {FC} from 'react';
import style from './Title.module.scss';

type TitlePropsType = {
    title: string
    description: string
}

export const Title: FC<TitlePropsType> = ({title, description}) => {
    return (
        <div className={style.titleBlock}>
            <h2 className={style.title}>{title}</h2>
            <h5 className={style.titleDescription}>{description}</h5>
        </div>
    )
}