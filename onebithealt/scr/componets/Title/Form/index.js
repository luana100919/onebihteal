import React  from "react";
import { View,Text,TextInput,Button} from "react-native";

export default function Form(){



    return(
        <view>
        <view>

            <text>ALTURA</text>
            <TextInput
            placeholder="Ex. 1.75"
            keyboardType="numeric"
         />

            <text>PESO</text>
            <TextInput
            placeholder="Ex. 75.365"
            keyboardType="numeric"
            />
            <Button title="Calcular IMC" />
        </view>
        <ResultImc messageResultImc={messageImc} resultImc={Imc}/>
        <view></view>
        </view>
    );
}