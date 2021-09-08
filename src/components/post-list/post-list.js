import React from "react";
import PostListItem from "../post-list-item";
import './post-list.css'

const PostList = ({posts}) => {

    let elements = posts.map(it => {
        return (
            <div key={it.id} className='list-group-item'>
                <PostListItem 
                    label={it.label} 
                    important={it.important}
                />
            </div>
        )
    })

    return (<div>
        <ul className='app-list list-group'>
            {elements}
        </ul>
    </div>)
}

export default PostList