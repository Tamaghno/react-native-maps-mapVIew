import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
//import { Colors } from 'react-native/Libraries/NewAppScreen';
import a from "../assets/a.jpg";
class Home extends React.Component{
    constructor(props)
    {
        super(props)
    this.state={
        bool:false
    };
    }
    
    press=()=>{
        if(!this.state.bool)
        this.setState({bool:true});
        else
        this.setState({bool:false});
    }
    render()
    {
        return(
        <View style = {styles.container}>
        <Text style = {styles.Text}>Hello World !</Text>
        <Image style = {styles.Image} source={{uri:'https://cdn.vox-cdn.com/thumbor/HuJ4807J3vcVYQAPFBh_nHjIEP4=/0x0:1255x591/1200x800/filters:focal(493x281:693x481)/cdn.vox-cdn.com/uploads/chorus_image/image/62281193/Screen_Shot_2018_11_12_at_12.24.40_PM.0.png'}}/>
        <Image style = {styles.Image} source={a}/>
        <TouchableOpacity style= {styles.button} >
        <Text style = {styles.buttonText} onPress={this.press}> Submit </Text>
        
        </TouchableOpacity>
        {this.state.bool && <Text style = {styles.Text}> tamaghno </Text>}
        </View>
        
    );
    } 
}
const styles={
    container:{
        display:'flex',
        flex:1,
        borderColor:'black',
        borderWidth:10
    },
    Text:{
        fontSize:50,
        color:'red'
    },
    Image:{
        width:200,
        height:200
    },
    button:{
        width:80,
        height:50,
        borderColor:'blue',
        borderWidth:1
    },
    buttonText:{
        color:'red'

    }
}

export default Home;