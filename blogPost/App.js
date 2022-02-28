import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { Provider as BlogProvider } from './src/context/BlogContext';
import BlogListScreen from './src/screens/BlogListScreen';
import BlogDetailScreen from './src/screens/BlogDetailScreen';
import BlogCreateScreen from './src/screens/BlogCreateScreen';
import BlogEditScreen from './src/screens/BlogEditScreen';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Blog List' 
          screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen 
          name='Blog List' 
          component={BlogListScreen} 
          options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create a Blog')}>
              <Feather
                name='plus'
                size={30}
              />
            </TouchableOpacity>
          ),
        })}
        />
        <Stack.Screen 
          name='Blog Detail' 
          component={BlogDetailScreen}
          options={({ navigation, route }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Edit a Blog', {id: route.params.id})}>
                <Feather
                  name='edit-2'
                  size={30}
                />
              </TouchableOpacity>
            ),
          })}
          />
        <Stack.Screen 
          name='Create a Blog' 
          component={BlogCreateScreen}
          />
        <Stack.Screen 
          name='Edit a Blog' 
          component={BlogEditScreen}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <BlogProvider>
      <App/>
    </BlogProvider>
  );
}
