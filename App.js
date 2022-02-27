import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { Provider as BlogProvider } from './src/context/BlogContext';
import BlogListScreen from './src/screens/BlogListScreen';
import BlogDetailScreen from './src/screens/BlogDetailScreen';
import BlogCreateScreen from './src/screens/BlogCreateScreen';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App = () => {

  // const navigation = useNavigation();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Blog List' screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name='Blog List' component={BlogListScreen} 
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
        <Stack.Screen name='Blog Detail' component={BlogDetailScreen}/>
        <Stack.Screen name='Create a Blog' component={BlogCreateScreen}/>
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
