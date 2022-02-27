import React, {useContext, useState} from 'react';
import {View, Text, Button} from 'react-native';
import FieldComponent from '../component/FieldComponent';
import { Context as BlogContext } from '../context/BlogContext';

const BlogCreateScreen = ({navigation}) => {

    const {addBlogPost} = useContext(BlogContext);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return(
        <>
        <FieldComponent fieldName='Enter Title:' term={title} onTermChange={setTitle}/>
        <FieldComponent fieldName='Enter Content:' term={content} onTermChange={setContent}/>
        <Button title='Add Blog Post' onPress={() => addBlogPost(title,content, () => { navigation.goBack()})}/>
        </>
    )
}


export default BlogCreateScreen;