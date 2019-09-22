import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Colors from '../constants/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
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

const bottomTabnavigatorConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        }
    },
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            tabBarIcon: tabInfo => <Ionicons name="ios-heart" size={25} color={tabInfo.tintColor} />
        }
    }
};


const MealsFabTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(
        bottomTabnavigatorConfig, {
        activeTintColor: Colors.accent,
        shifting: true
    })
    : createBottomTabNavigator(
        bottomTabnavigatorConfig, {
        tabBarOptions: {
            activeTintColor: Colors.accent
        }
    });

export default createAppContainer(MealsFabTabNavigator);