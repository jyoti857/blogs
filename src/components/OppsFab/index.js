import React, {useState} from 'react';
import {FAB, Portal, List} from 'react-native-paper';
import { View, Text} from 'react-native';
// import FontAwwesome5 from 'react-native-vector-icons/FontAwesome5Pro';
import {Ionicons, FontAwesome5, FontAwesome} from '@expo/vector-icons';

const OppsFab = props =>{

    const [oppsfabOpen, setOppsFabOpen] = useState(false);
    const OPPS = () => {
        return (<FontAwesome5 name = 'money-check-alt' size = {20} color = "green" light style={{paddingVertical: 3}} />)
    }
    const CHART = () => {
        return(<FontAwesome5 name = 'list-alt' size ={20} style = {{padding: 3, paddingLeft: 5}} light />)
    }
    const LIST = () => {
        return(<FontAwesome5 name = 'list-alt' size = {20} color = 'red' />)
    }
    const PLUS = () => {
        return (<FontAwesome5 name = 'plus' size ={20} color='purple' />)
    }
    return(
        <View>
            <Portal>
                <FAB.Group
                    open = {oppsfabOpen}
                    fabStyle={{left: 0, backgroundColor: oppsfabOpen ? "pink": 'blue'}}
                    icon= {oppsfabOpen?  OPPS: "add"}
                    style = {{paddingBottom: 10, color: 'purple', fontWeight: 'bold'}}
                    actions={[
                        {
                            icon: 'add',
                            label: "Create Opps",
                            style: {backgroundColor: "pink", color: 'red', fontWeight: 'bold'}
                        },
                        {
                            icon: CHART,
                            label: "Report",
                            style: {backgroundColor: 'pink', color: "red", fontWeight: 'bold'}
                        },
                        {
                            icon: LIST,
                            label: 'Opps list view',
                            style: {backgroundColor: 'pink', color: 'blue', fontWeight: "bold"}
                        }
                    ]}
                    onStateChange={({open}) => setOppsFabOpen(open)}
                    onPress = {() => !oppsfabOpen}
                    // <OPPS />
                    // <LIST />
                    // <PLUS />

                />
            </Portal>
         </View>
    )
}

export default OppsFab;