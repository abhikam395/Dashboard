import React from 'react';
import {
    Switch, 
    Route
} from 'react-router-dom';
import AddNewPostPage from './../pages/AddNewPostPage';
import BlogDashboardPage from './../pages/BlogDashboardPage';
import BlogPostPage from './../pages/BlogPostsPage';
import ErrorsPage from './../pages/ErrorsPage';
import FormComponentPage from './../pages/FormComponentPage';
import TablesPage from './../pages/TablesPage';
import UserProfilePage from './../pages/UserProfilePage';

export default function router(){
    return (
        <Switch>
            <Route exact path="/" component={BlogDashboardPage} />
            <Route path="/blog-posts" component={BlogPostPage} />
            <Route path="/new-post" component={AddNewPostPage} />
            <Route path="/form-components" component={FormComponentPage} />
            <Route path="/tables" component={TablesPage} />
            <Route path="/user-profile" component={UserProfilePage} />
            <Route path="/errors" component={ErrorsPage} />
        </Switch>
    )
}