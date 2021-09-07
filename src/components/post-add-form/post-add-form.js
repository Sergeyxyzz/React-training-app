import React from "react";
import './post-add-form.css'

const PostAddForm = () => {
    return (<div>
        <form className='bottom-panel d-flex'>
            <input
                type='text'
                placeholder='О чем Вы думаете сейчас?'
                className='form-control new-post-label'
            />
            <button
                type='submit'
                className='btn btn-outline-secondary'>
                    Добавить
            </button>
        </form>
    </div>)
}

export default PostAddForm