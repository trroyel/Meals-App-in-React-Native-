import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Colors from '../constants/Colors';
import FiltersScreen from '../screens/FiltersScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
    headerTitle: 'A Screen'
};

const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen
        },
        CategoryMeals: {
            screen: CategoryMealsScreen
        },
        MealDetail: MealDetailScreen
    },
    {
        // initialRouteName: 'Categories',
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const FavNavigator = createStackNavigator(
    {
        Favorites: FavoritesScreen,
        MealDetail: MealDetailScreen
    },
    {
        // initialRouteName: 'Categories',
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                    <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
                );
            },
            tabBarColor: Colors.primary
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
            },
            tabBarColor: Colors.accent
        }
    }
};

const MealsFavTabNavigator =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(tabScreenConfig, {
            activeTintColor: 'white',
            shifting: true,
            barStyle: {
                backgroundColor: Colors.primary
            }
        })
        : createBottomTabNavigator(tabScreenConfig, {
            tabBarOptions: {
                activeTintColor: Colors.accent
            }
        });

const FiltersNavigator = createStackNavigator(
    {
        Filters: FiltersScreen
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const MainNavigator = createDrawerNavigator(
    {
        MealsFavs: {
            screen: MealsFavTabNavigator,
            navigationOptions: {
                drawerLabel: 'Meals'
            }
        },
        Filters: FiltersNavigator,
    },
    {
        contentOptions: {
            activeTintColor: Colors.accent,
            // labelStyle: {
            //     fontFamily: 'open-sans-bold'
            // }
        }
    }
);

export default createAppContainer(MainNavigator);