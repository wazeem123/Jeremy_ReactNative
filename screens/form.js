import React from 'react';
import { Text, View,StyleSheet,TextInput, Button } from 'react-native';
import {Formik} from "formik"

export default function Form({addReview}) {
    
    return(
        <View style={styles.container}>
            <Formik 
                initialValues={{title:""}}
                onSubmit={(values,actions)=>{
                    actions.resetForm();
                    addReview(values);
                }}
            >
                {(props)=>(
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="Type here"
                            onChangeText={props.handleChange("title")}
                            onBlur={props.handleBlur("title")}
                        />
                        
                        <Button title="submit" onPress={props.handleSubmit} />
                    </View>
                )}

            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

    },
    input:{
        borderWidth:1,
        borderRadius:5,
        marginBottom:10,
        width:150,
        height:40
    }
})