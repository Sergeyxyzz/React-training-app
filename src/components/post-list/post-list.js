import React from "react";
import { ListGroup } from "reactstrap";
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

    return (<>
        <ListGroup className='app-list'>
            {elements}
        </ListGroup>
    </>)
}

export default PostList