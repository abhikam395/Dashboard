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
            <Route 
                exact path="/" 
                render={() => <BlogDashboardPage 
                    category="DASHBOARD" 
                    title="Blog Overview"/>}
                />
            <Route  path="/blog-posts" 
                    render={() => <BlogPostPage 
                    category="COMPONENTS" 
                    title="Blog Posts"/>}
                />
            <Route  path="/new-post" 
                    render={() => <AddNewPostPage 
                    category="BLOG POSTS" 
                    title="Add New Post"/>}
                />
            <Route path="/form-components" 
                    render={() => <FormComponentPage 
                    category="OVERVIEW" 
                    title="Forms & Components"/>}
                />
            <Route path="/tables" 
                    render={() => <TablesPage 
                    category="OVERVIEW" 
                    title="Data Tables"/>}
                />
            <Route path="/user-profile" 
                    render={() => <UserProfilePage 
                    category="OVERVIEW" 
                    title="User Profile"/>}
                />
            <Route path="/errors" component={ErrorsPage} />
        </Switch>
    )
}