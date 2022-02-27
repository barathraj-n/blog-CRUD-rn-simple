import React, {useState} from 'react';
import { Button } from 'react-native';
import FieldComponent from './FieldComponent';

const BlogPostForm = ({
    onSubmit, 
    initialValues = {
        title: '',
        content: '',
    }
}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    return(
        <>
            <FieldComponent fieldName='Enter Title:' term={title} onTermChange={setTitle}/>
            <FieldComponent fieldName='Enter Content:' term={content} onTermChange={setContent}/>
            <Button title='Save Blog Post' 
                onPress={() => onSubmit(title, content)}
            />
        </>
    )
}

export default BlogPostForm;