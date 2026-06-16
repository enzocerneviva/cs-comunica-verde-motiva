import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import NewOccurrenceScreen from '../screens/NewOccurrenceScreen';
import OccurrenceDetailsScreen from '../screens/OccurrenceDetailsScreen';

export type RootStackParamList = {
    Home: undefined;
    New: undefined;
    Details: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="New" component={NewOccurrenceScreen} />
            <Stack.Screen name="Details" component={OccurrenceDetailsScreen} />
        </Stack.Navigator>
    );
}
