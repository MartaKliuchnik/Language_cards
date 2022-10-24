import React from 'react';
import s from './index.module.sass'

export default function LanguageCard({ rus, eng, type }) {
    
    return (
        <div className={s.card}>
            { type === 'ru'
                ? <p style={{backgroundColor: 'white', color: '#2980b9'}}>{rus}</p>
                : <p style={{backgroundColor: '#2980b9', color: '#white'}}>{eng}</p>
            }
        </div>
    )
}
