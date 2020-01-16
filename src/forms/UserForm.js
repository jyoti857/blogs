import React, { useState } from 'react';
import { Field, reduxForm} from 'redux-form';
import {Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView} from 'react-native';
import PRModal from "../components/PRModal";

const MyTextInput = field => {
    const { input, meta, ...inputProps} = field
    const formStates = ['active', 'autofilled', 'asyncValidating', 'dirty', 
    'pristine', 'valid', 'invalid', 'submit', 'submitSucceeded', 'submitFailed', 'visited', 'touched'];
    const [value, onChageText] = useState('useless placeholders');
    return <View>
    <TextInput
        {...inputProps}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, alignSelf: 'center', margin: 20 }}
        // value = {value}
        // onChangeText = {text => onChageText(text)}
        onChangeText = {input.onChange}
        onBlur = {input.onBlur}
        onFocus= {input.onFocus}
        value = {input.value}
        />

        <Text>The {input.name} text is </Text>
        {
            formStates.filter(state => meta[state]).map(state => <Text key={state}> - {state}</Text>)
        }

    </View>
}

const Userform = props => {
    const {handleSubmit, reset} = props;
    const formStates = ['active', 'autofilled', 'asyncValidating', 'dirty', 
    'pristine', 'valid', 'invalid', 'submit', 'submitSucceeded', 'submitFailed', 'visited', 'touched'];
    const submit = values =>{
        alert(JSON.stringify(values, null, 2));
    }
    return(
        <ScrollView contentContainerStyle= {{borderWidth: 8, borderColor: 'green', paddingVertical:20}}> 
        <PRModal />
         {/* <View style = {{borderWidth: 8, borderColor: "red"}}>       */}
           {/* <form onSubmit = {handleSubmit}> */}
           <KeyboardAvoidingView enabled behavior="padding">

            <Field name = "firstname" placeholder = 'First name' component = {MyTextInput} />
            <Field name = "lastname" placeholder = 'Last name' component = {MyTextInput} />
            <Field name = "email" placeholder = 'Email' component = {MyTextInput} />

            <Field name = "firstname" placeholder = 'First name' component = {MyTextInput} />
            <Field name = "lastname" placeholder = 'Last name' component = {MyTextInput} />
            <Field name = "email" placeholder = 'Email' component = {MyTextInput} />

            <Field name = "firstname" placeholder = 'First name' component = {MyTextInput} />
            <Field name = "lastname" placeholder = 'Last name' component = {MyTextInput} />
            <Field name = "email" placeholder = 'Email' component = {MyTextInput} />
            <Text>And the text is: </Text>
            {
                formStates.filter(state => props[state]).map(state => {
                    return <Text key = {state}>- {state}</Text>
                })
            }
            <TouchableOpacity onPress = {handleSubmit(submit)} style = {{alignSelf: 'center', backgroundColor: 'transparent', 
            color: "blue", width: 100, borderRadius: 30, borderWidth: 2, alignItems: "center", marginBottom: 30}}> 
                <Text>Submit!</Text>
                </TouchableOpacity>
            <TouchableOpacity onPress = {reset} style = {{alignSelf: 'center', backgroundColor: 'transparent', 
            color: "blue", width: 100, borderRadius: 30, borderWidth: 2, alignItems: "center"}}> 
                <Text>Clear!</Text>
                </TouchableOpacity>
            {/* </form> */}
      
        {/* <form onSubmit = {handleSubmit}>
            <View>
            <Text>First name</Text>
            <Field component= 'input' type = 'text' name = 'firstname' placeholder = 'First name' />
            <Text>Last name</Text>
            <Field component= 'input' type = 'text' name = 'lastname' placeholder = 'Last name' />
            <Text>Email</Text>
            <Field component= 'input' type = 'email' name = 'email' placeholder = 'Email' />
            <Text>Sex</Text>
            <div>
            <View>
            <Field component= 'input' type = 'radio' name = 'gender' value = 'male' />
            <Text>Male</Text>
            </View>
            </div>
            <div>
            <View>
            <Field component= 'input' type = 'radio' name = 'gender' value = 'female' />
            <Text>Female</Text>
            </View>
            </div>
            <div>
            <View>
            <Field component= 'input' type = 'radio' name = 'gender' value = 'other' />
            <Text>Other</Text>
            </View>
            </div>
            <div>
            <Text>favourite color</Text>
            <div>
            <Field name = 'favourite color' component = 'select'>
            <option />
            <option vlaue = 'ff0000'>red</option>
            <option vlaue = '00ff00'>blue</option>
            <option vlaue = '0000ff'>green</option>
            </Field>
            </div>
            
            </div> 
            <button>submit</button>
            <button>clear values</button>
            </View>
        </form> */}
             {/* </View> */}
             </KeyboardAvoidingView>
        {/* </PRModal> */}
            </ScrollView>
    )
}


export default reduxForm({
    form: "userCustomName"
})(Userform)