import React from "react";
import './post-add-form.css'

const PostAddForm = ({onAdd}) => {
    return (<div>
        <div className='bottom-panel d-flex'>
            <input
                type='text'
                placeholder='О чем Вы думаете сейчас?'
                className='form-control new-post-label'
            />
            <button id='sss'
                type='submit'
                className='btn btn-outline-secondary'
                onClick={() => onAdd('hello')}>
                    Добавить
            </button>
        </div>
    </div>)
}

export default PostAddForm