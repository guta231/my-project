import React, {useState} from "react";
import {View, Text, TextInput, Button} from "react-native";
import ResultImc from "./ResultImc"

const Form = () =>{

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("preencha o peso e altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");

    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2));
    }

    function validationImc(){
        if (weight != null && height != null){
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu imc é igual: ");
            setTextButton("Calcular novamente");
            return
        }
        setImc(null);
        setTextButton("Calcular");
        setMessageImc("preencha o peso e altura");
    }
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput placeholder="Ex. 1.75" keyboardType="numeric" onChangeText={setHeight} value={height}></TextInput>
                <Text>Peso</Text>
                <TextInput placeholder="Ex. 60.335" keyboardType="numeric" onChangeText={setWeight} value={weight}></TextInput>
                <Button title={textButton} onPress={validationImc}></Button>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}

export default Form;