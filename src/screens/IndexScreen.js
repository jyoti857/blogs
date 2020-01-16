import React, {useContext} from 'react';
import { View, Text, FlatList, Button} from 'react-native'
import OppsFab from '../components/OppsFab';
import {Ionicons} from '@expo/vector-icons';
import PRModal from '../components/PRModal'
import UserForm from '../forms/UserForm';
import {Context} from '../../../blog/src/context/BlogContext';



// this is a demo code to check the Modal and redux form in this screens 
// class IndexScreen extends React.Component{
//     render(){
//         return(
//             <View>
//                 <Text>
//                     This is an Index screen
//                 </Text>
//                 <OppsFab />
//                 <PRModal />
//                 <UserForm />
//                 {/* <Ionicons name = 'md-check-circle' /> */}
//             </View>
//         )
//     }
// }

// code for this project
const IndexScreen = () =>{
    const {state, addBlogpost} = useContext(Context);
        return(
            <View>
                <Text style = {{fontSize: 30}}>This is the Index screen </Text>
                <Button title = "add blogpost" onPress = {addBlogpost}/>
                <FlatList 
                    data = {state}
                    keyExtractor = {blogPost => blogPost.title}
                    renderItem = {({item}) => <Text>{item.title}</Text>}
                />
            </View>
        )
}


// not correct need to check more on static thing
// class IndexScreen extends React.Component{
//     static contextType = BlogContext;
//     render(){
//         // console.log("this is context type", this.contextType )
//         return(
//             <View>
//                  <Text style = {{fontSize: 40}}>This is the Index screen </Text>
//                  <Text style = {{fontSize: 40}}>{this.contextType.value}</Text>
//              </View>
//         )
//     }
// }

export default IndexScreen;