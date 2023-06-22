import React from 'react';
import { Image, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import ErrorMessage from '../components/ErrorMessage';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {
    

    return (
       <Screen style={styles.container}>
        <Image 
            style={styles.logo}
            source={require("../assets/logo-red.png")} />

        <Formik
            initialValues={{ email: '', password: ''}}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}>

            { ({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                <>
                    <AppTextInput 
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        onBlur={() => setFieldTouched("email") }
                        onChangeText={handleChange("email")}
                        icon="email"
                        placeholder="Email"
                        textContentType="emailAddress" />

                    <ErrorMessage error={errors.email} visible={touched.email} />
                    

                    <AppTextInput 
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        onChangeText={handleChange("password")}
                        onBlur={() => setFieldTouched("password")}
                        placeholder="Password"
                        textContentType="password"
                        secureTextEntry />


                    <ErrorMessage error={errors.password} visible={touched.password}/>
                    
                    <AppButton 
                        title="Login"
                        onPress={handleSubmit}/>
                            </>
                        ) }
        </Formik>
        
       </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,

    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    }
})
export default LoginScreen;