import React, {useContext, useState} from 'react';
import BlogPostForm from '../component/BlogPostForm';
import { Context as BlogContext } from '../context/BlogContext';

const BlogCreateScreen = ({navigation}) => {
    const {addBlogPost} = useContext(BlogContext);

    return(
        <>
        <BlogPostForm 
            onSubmit={(title, context) => {addBlogPost(title, context, () => {navigation.goBack()})}}/>
        </>
    )
}


export default BlogCreateScreen;