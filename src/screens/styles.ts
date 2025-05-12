import { DefaultTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const AppTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#EF506B',
        border: '#ccc'
    },
};

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 48,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: AppTheme.colors.primary,
        marginBottom: 24,
        marginTop: 72,
    },
    input: {
        borderColor: AppTheme.colors.border,
        borderWidth: 1,
        width: '100%',
        marginTop: 12,
        borderRadius: 10,
        paddingLeft: 12,
    },
    button: {
        backgroundColor: AppTheme.colors.primary,
        borderRadius: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        marginTop: 16,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
    result: {
        marginTop: 14,
        fontSize: 16,
    },
    normalText:  {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    erorrText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red',
    }
});