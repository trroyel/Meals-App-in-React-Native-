import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Colors from '../constants/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Category'
        }
    },
    CategoryMeals: {
        //We can set navigation option here
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
},
    //Alternative option for pass default navigation option
    {
        defaultNavigationOptions: {
            headerTitle: 'A screen',
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primary : Colors.accent,
            },
            headerTintColor: Platform.OS === 'android' ? Colors.header : 'grey'
        }
    });

export default createAppContainer(MealsNavigator);