import React from 'react';
import {ScrollView,View,TextInput,TouchableOpacity,Image,StyleSheet,Text,Alert,Vibration} from 'react-native';
import Sound from 'react-native-sound';
const styles=StyleSheet.create({
    container:{
        display:"flex",
        flex:1,
        padding:5,
        backgroundColor:'lightyellow',
        justifyContent:"center",

    },
    container1:{
        display:"flex",
        flex:1,
        padding:10,
        justifyContent:"center",
        backgroundColor:'lightyellow',
        alignItems:'flex-start',
        flexDirection:'row',
        marginTop:20
        
    },
    container2:{
        display:"flex",
        flex:1,
        padding:7,
        justifyContent:"center",
        backgroundColor:'lightyellow',
        alignItems:'flex-start',
        flexDirection:'row',
        marginTop:20

    },
    button:{
        width:85,
        height:85,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'lightblue',
        elevation:40,
        borderRadius:100,
        marginTop:10,
        marginLeft:20,
        marginRight:30,
        justifyContent:"space-around",
 
    },
    
    button2:{
        width:90,
        height:90,
        backgroundColor:"lightblue",
        elevation:40,
        borderRadius:100,
        top:20,
        left:50


    },
    textView:{
        fontFamily:'LiuJianMaoCao-Regular',
        fontSize:40,
        marginLeft:90
    },
text:{
        fontSize:15
    }
})


class Fun extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={bool:false}
    }
    
    playbagsound=()=>
    {

        const Sound1=new Sound('bagpipe.mp3', null, (error) => {
            if (error) {
              // do something
              console.log('failed',error);
              return;  
              }
              else 
              
              {Sound1.play()}
            });
    }
    playkaharwasound=()=>
    {
        const Sound3=new Sound('tabla_kaharwa.mp3', null, (error) => {
            if (error) {
              // do something
              console.log('failed',error);
              return;  
              }
            else
            //while(true)
            {Sound3.play()}
            });
    }
    playtabla6sound=()=>
    {
        const Sound4=new Sound('tabla_6sec.mp3', null, (error) => {
            if (error) {
              // do something
              console.log('failed',error);
              return;  
              }
            else
            //while(true)
            {Sound4.play()}
            });
    }
    playbellsound=()=>
    {
        const Sound4=new Sound('bell.mp3', null, (error) => {
            if (error) {
              // do something
              console.log('failed',error);
              return;  
              }
            else{Sound4.play()}
            });
    }
    render()
    {
        return(
            <View style={styles.container}>
            <Text style={styles.textView}>{"let that music roll"}</Text>
            
              
            <View style={styles.container2}>
               
                <TouchableOpacity onPress={this.playbagsound} style={styles.button}><Text style={styles.text}>bagpipers</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.playkaharwasound} style={styles.button}><Text style={styles.text}>tabla kaharwa loop</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.playtabla6sound} style={styles.button}><Text style={styles.text}>tabla beat loop</Text></TouchableOpacity>
                
                
                
            </View>
            <View style={styles.container2}>
               
                <TouchableOpacity onPress={this.playbagsound} style={styles.button}><Text style={styles.text}>emotional wave</Text></TouchableOpacity>
               
                <TouchableOpacity onPress={this.playbagsound} style={styles.button}><Text style={styles.text}>Scream 2</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.playbagsound} style={styles.button}><Text style={styles.text}>Scream 2</Text></TouchableOpacity>
                
                
            </View>
            <View style={styles.container2}>
               
                <TouchableOpacity onPress={this.playbagsound} style={styles.button}><Text style={styles.text}>emotional wave</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.playbagsound} style={styles.button}><Text style={styles.text}>emotional wave</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.playpokersound} style={styles.button}><Text style={styles.text}>poker coins</Text></TouchableOpacity>
                
                
                
            </View>
           
            
            
            </View>
        )
    }
}
export default Fun;