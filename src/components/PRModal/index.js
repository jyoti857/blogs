import React, {useState} from 'react';
import {  Portal, Button } from 'react-native-paper';
import {Modal, Alert} from 'react-native';
import { Text, View, IconButton } from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';
import { Grid, Col} from 'react-native-easy-grid'; 
import {Ionicons, FontAwesome5, FontAwesome} from '@expo/vector-icons';

const PRModal  = ({children}, props) => {
    const [visible, setVisible] = useState(false);
    const _showModal = () =>{
        setVisible(true);
    }
    const _hideModal = () => setVisible(false);
    return(
        <Portal>
            <Modal
                animationType = "slide" 
                transparent={false}
                visible = {visible} 
                onDismiss = {_hideModal}
                onRequestClose = {
                    // () => {Alert.alert("Modal has been closed!")}
                    _hideModal
                }
                >
                {/* <View style = {{  flex: 1, alignItems: 'center', justifyContent: 'center'}}> */}
                <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}
                style ={{padding: 15, alignItems: 'center', borderRadius: 5}}>
                <Grid>
                    <Col style = {{marginBottom : 10}}>
                        <IconButton 
                            icon = {() => (
                                <FontAwesome5 name = 'times-circle'
                                color = "#ffff"
                                size = {25}
                                solid
                                />
                            )}
                            color = '#fff'
                            onPress = {_hideModal}
                            />
                    </Col>
                    <Col style = {{flexDirection: 'row', alignItems: 'center', justifyContent: "flex-end", marginEnd: 10 }}>
                       <IconButton icon = {() => (
                           <FontAwesome5 name = 'check'
                           color = "#fff"
                           size = {25}
                           solid
                           />
                           )}
                           onPress = {_hideModal}
                       />
                    </Col>
                </Grid>
                <Text style ={{backgroundColor: 'transparent', fontSize: 15, color: '#fff'}}>
                    Signin with Facebook
                </Text>
                </LinearGradient>
                {/* </View> */}
                <Text>Example modal</Text>
            </Modal>
            <Button onPress = {_showModal} style = {{marginTop: 40}}>
                show
            </Button>
            {children}
        </Portal>
    )
}

export default PRModal;

