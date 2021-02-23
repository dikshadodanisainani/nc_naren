import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity , Image } from 'react-native';

export default class Prevention extends Component{

    render(){
        return(
            <View style = {{flex:1,justifyContent:"center",alignItems:"center" }}>
                                 <Image source = {require("../assets/logo.jpg")} style={{width : 100 , height : 100}}/>
                <Text style={{textAlign:"center",fontSize:30,fontFamily:"san-serif",color:"red"}}>
                    Prevent Corruption
                </Text>
                <Text style={{textAlign:"center",fontSize:20,fontFamily:"san-serif",color:"red"}}>
                According to the amended Klitgaard equation,
                [25] limitation of monopoly and regulator discretion of individuals and a 
                high degree of transparency through independent oversight by non-governmental
                 organisations (NGOs) and the media plus public access to reliable information 
                 could reduce the problem. Djankov and other researchers[105] have independently 
                 addressed the role information plays in fighting corruption with evidence from both 
                 developing and developed countries. Disclosing financial information of government 
                 officials to the public is associated with improving institutional accountability 
                 and eliminating misbehavior such as vote buying. The effect is specifically 
                 remarkable when the disclosures concern politicians' income sources, liabilities 
                 and asset level instead of just income level. Any extrinsic aspects that might reduce 
                 morality should be eliminated. Additionally, a country should establish a culture of 
                 ethical conduct in society with the government setting the good example in order to
                  enhance the intrinsic morality.
                </Text>

                <TouchableOpacity 
                style={{width: 100 ,height:50 , borderWidth : 1 ,marginTop :30 , 
                    paddingTop: 10 , borderRadius : 7,backgroundColor : "green" }}>
                    <Text style={{textAlign:"center",fontSize:20,fontFamily:"san-serif",
                    color:"red"}}>
                        Next
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}

