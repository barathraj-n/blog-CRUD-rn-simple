import React, {useContext} from 'react';
import {View, Text, FlatList, StyleSheet, Button, TouchableOpacity} from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import {Feather} from '@expo/vector-icons'

const BlogListScreen = ({navigation}) => {
    console.log(navigation)
    const {state, deleteBlogPost} = useContext(BlogContext);
    return(
        <>
            <FlatList
                data={state}
                keyExtractor={(blogPost)=>blogPost.title}
                renderItem={({item}) => {
                return(
                <TouchableOpacity onPress={() => navigation.navigate('Blog Detail', { id: item.id})}>
                    <View style={styles.rowStyle}>
                        <Text style={styles.titleStyle}>{item.title} - {item.id}</Text>
                        <TouchableOpacity onPress={() => {deleteBlogPost(item.id)}}>
                            <Feather style={styles.iconStyle} name='trash'/>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                );
                }}
            />
        </>
    );
}

BlogListScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Create a Blog')}>
              <Feather
                name='plus' 
                size={30}
              />
            </TouchableOpacity>
    }
}
const styles = StyleSheet.create({
    rowStyle: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-between',
        padding:10,
        borderWidth: 1,
        borderRadius: 10,
    },
    titleStyle:{
        fontSize: 20,
    },
    iconStyle: {
        fontSize: 24,
    }
});

export default BlogListScreen;