import { useNavigate } from "react-router-dom";
import { Theme } from "../../components/Theme_Layout";
import * as C from "./styles"
import { FormActions, useForm } from "../../contexts/FormContext";
import { useEffect } from "react";
import { SelectOption } from "../../components/SelectOption";

export const FormStep2 = ()=>{
    const navigate = useNavigate();
    const {state, dispatch} = useForm();

    useEffect(()=>{
        if(state.name === ''){ //não deixar ir para o passo 2 sem nome de jeito nenhum
            navigate('/');
        } else {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
        })
            }
    }, []);

    const handleNextStep = ()=>{
        if(state.name !== ''){
            navigate('/passo3');
        } else {
            alert('Por favor, insira o seu nome')
        }
    }

    const handlePreviousStep = ()=>{
        navigate('/');
    }

    const setLevel = (level: number)=>{
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }



    return(
        <Theme>
            <C.Container>
                 <p>Passo 2 de 3</p>
                <h1>{state.name}, qual é o seu nível?</h1>
                <p>Escolha a opção que condiz com o seu nível atual</p>
                 <hr />
                
                <SelectOption
                    title='Sou iniciante'
                    description='Programo há menos de 2 anos'
                    icon='🤓'
                    selected={state.level === 0}
                    onClick={()=>setLevel(0)}
                />

                <SelectOption
                    title='Sou programador'
                    description='Programo há pelo menos 2 anos'
                    icon='😎'
                    selected={state.level === 1}
                    onClick={()=>setLevel(1)}
                />
                <button onClick={handlePreviousStep}>Voltar</button>
                 <button onClick={handleNextStep}>Avançar</button>

            </C.Container>
        </Theme>
    )
}