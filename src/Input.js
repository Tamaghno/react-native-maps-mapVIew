import React from 'react';
import { View, Text, Image, TouchableOpacity, Button, ScrollView, Alert, StyleSheet, TextInput} from 'react-native';


const styles= StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        padding:10
    },
    inputView:{
        width:"100%",
        height:40,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'


    },
    input:{
        flex:1,
        height:50,
        borderColor:'black',
        borderWidth:1,
        

    },
    button:{
        width:80,
        height:40,
        alignItems:'center',
        display:'flex',
        justifyContent:'center',
       
        backgroundColor:'purple'
    },
    buttonText:{
        color:'white'
    }
});


class Input extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name:""
        };
    }

    setName=(text)=>{
        this.setState({name:text});
    };
    onShow=()=>{
        Alert.alert(this.state.name);
    };
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.inputView}>
                     <TextInput onChangeText={this.setName} value={this.state.name} placeholder='enter name' style={styles.input}/>
                     <TouchableOpacity style={styles.button} onPress={this.onShow}>
                        <Text style={styles.buttonText} >ADD</Text>
                     </TouchableOpacity>
                </View>
            </View>

        );
    }
}
export default Input;