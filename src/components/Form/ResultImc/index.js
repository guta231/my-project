import React from "react";
import {View, Text} from "react-native";

const ResultImc = (props) => {
    return(
        <View>
            <Text>{props.messageResultImc}</Text>
            <Text>{props.resultImc}</Text>
        </View>
    );
}

export default ResultImc;