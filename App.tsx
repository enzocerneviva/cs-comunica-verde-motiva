import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { OcorrenciasProvider } from './src/context/OcorrenciasContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
    return (
        <OcorrenciasProvider>
            <NavigationContainer>
                <AppNavigator />
            </NavigationContainer>
        </OcorrenciasProvider>
    );
}
