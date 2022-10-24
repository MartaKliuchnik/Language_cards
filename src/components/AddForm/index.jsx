import React from 'react';
import s from './index.module.sass';

export default function AddForm() {

    const submit = event => {
        event.preventDefault();
        const { ru, en } = event.target;
        console.log(ru.value, en.value);
        ru.value = '';
        en.value = '';
    }
    return (
        <form onSubmit={submit}
            className={['wrapper', s.add_form].join(' ')}>
            <div className={s.input_container}>
                <input type="text" name="ru" placeholder='Russian word' />
                <input type="text" name="en" placeholder='English word' />
            </div>
            <button>Added word</button>
        </form>
    )
}
