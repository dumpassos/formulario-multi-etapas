import { useNavigate } from "react-router-dom"
import { Theme } from "../../components/Theme_Layout"
import * as C from "./styles"
import { FormActions, useForm } from "../../contexts/FormContext";
import { ChangeEvent, useEffect } from "react";

export const FormStep1 = ()=>{
    const navigate = useNavigate();
    const {state, dispatch} = useForm();

    useEffect(()=>{
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }, []);

    const handleNextStep = ()=>{
        if(state.name !== ''){
            navigate('/passo2');
        } else {
            alert('Por favor, insira o seu nome')
        }
    }

    const handleChangeName = (e: ChangeEvent<HTMLInputElement> )=>{
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }

    return(
        <Theme>
            <C.Container>
                 <p>Passo 1 de 3</p>
                 <h1>Olá, vamos começar com o seu nome</h1>
                 <p>Preencha o campo abaixo com o seu nome e sobrenome.</p>

                 <hr />

                 <label>
                    Seu nome e sobrenome:
                    <input 
                    type="text"
                    autoFocus
                    value={state.name}
                    onChange={handleChangeName}

                    />
                 </label>

                 <button onClick={handleNextStep}>Avançar</button>

            </C.Container>
        </Theme>
    )
}