/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native'

import MealsNavigator from './src/navigation/MealsNavigator';

//This third party package is optional. this is not standalone and works with 
//react-navigation. this package increses the performace by use native navigation

const App = () => {
  return (
    <Fragment>
      <SafeAreaView style={styles.body}>
        <MealsNavigator />
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
  }
});

export default App;
