import React from "react";
import AppHeader from "../app-header";
import PostAddForm from "../post-add-form";
import PostList from "../post-list";
import PostStatusFilter from "../post-status-filter";
import SearchPanel from "../search-panel";

import './app.css'

const App = () => {

    const data = [
        {
            label: 'Going to learn React',
            important: true,
            id: 1
        },
        {
            label: 'Thats so good',
            important: false,
            id: 2
        },
        {
            label: 'I need a break...',
            important: false,
            id: 3
        }
    ]

    return (
    <div className='app'>
        <AppHeader />
        <div className='search-panel d-flex'>
            <SearchPanel />
            <PostStatusFilter/>
        </div>
        <PostList posts={data}/>
        <PostAddForm/>
    </div>)
}

export default App