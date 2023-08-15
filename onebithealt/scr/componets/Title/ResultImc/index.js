import React {useState} from "react";
import { View ,Text } from "react-native";
import ResultImc from "./ResultImc"

export default function ResultImc(props){
    return(
        <view>
            <Text>esse e um teste</Text>
            <Text>(props.ResultImc)</Text>
            <Text>(props.messageResultImc)</Text>
        </view>
    );
}