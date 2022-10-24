import React from 'react';
import s from './index.module.sass'

export default function LanguageCard({ rus, eng}) {
    return (
        <div className={s.card}>
            <p>{rus}</p>
            <p>{eng}</p>
        </div>
    )
}
