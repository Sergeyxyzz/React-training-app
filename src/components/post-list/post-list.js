import React from "react";
import { ListGroup } from "reactstrap";
import PostListItem from "../post-list-item";
import './post-list.css'

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    let elements = posts.map(it => {
        const {id, ...itemProps} = it
        return (
            <div key={it.id} className='list-group-item'>
                <PostListItem 
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}
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