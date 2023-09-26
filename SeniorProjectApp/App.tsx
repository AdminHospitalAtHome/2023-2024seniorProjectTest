/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
<script src="http://locralhost:8097" />;
import React from 'react';
import Login from './Login';
import PatientMainPage from './Pages/Patient/PatientMainPage';
import {View} from 'react-native'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PatientWeightPage from './Pages/Patient/PatientWeightPage';
import PatientBloodPressurePage from './Pages/Patient/PatientBloodPressurePage';
import PatientHeartRatePage from './Pages/Patient/PatientHeartRatePage';

const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
      //<View/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'home'} component={Login} />
        <Stack.Screen name={'patientMain'} component={PatientMainPage} />
        <Stack.Screen name={'patientWeightPage'} component={PatientWeightPage} />
        <Stack.Screen name={'patientBloodPressurePage'} component={PatientBloodPressurePage} />
        <Stack.Screen name={'patientHeartRatePage'} component={PatientHeartRatePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
