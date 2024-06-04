import { useNavigate } from "react-router-dom"
import { Theme } from "../../components/Theme_Layout"
import * as C from "./styles"
import { FormActions, useForm } from "../../contexts/FormContext";
import { ChangeEvent, useEffect } from "react";

export const FormStep3 = ()=>{
    const navigate = useNavigate();
    const {state, dispatch} = useForm();

    useEffect(()=>{
        if(state.name === ''){ 
            navigate('/');
        } else {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        })
            }
    }, []);

    const handleFinishStep = ()=>{
        if(state.email !== '' && state.github !== '' ){
            console.log(state);
            alert('Cadastro finalizado! Os dados para o Back-End estão no console 😉!');
        } else {
            alert('Por favor, preencha ambos os campos');
        }
    }

    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement> )=>{
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }

    const handleChangeGithub = (e: ChangeEvent<HTMLInputElement> )=>{
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        })
    }

    const handlePreviousStep = ()=>{
        navigate('/passo2');
    }

    return(
        <Theme>
            <C.Container>
                 <p>Passo 3 de 3</p>
                 <h1>Muito bem {state.name}, aonde podemos te encontrar?</h1>
                 <p>Preencha os campos abaixos para conseguirmos entrar em contato com você.</p>

                 <hr />

                 <label>
                    Seu email:
                    <input 
                    type="email"
                    value={state.email}
                    onChange={handleChangeEmail}
                    />
                 </label>

                 <label>
                    Seu GitHub:
                    <input 
                    type="url"
                    value={state.github}
                    onChange={handleChangeGithub}
                    />
                 </label>
                 <button onClick={handlePreviousStep}>Voltar</button>
                 <button onClick={handleFinishStep}>Finalizar Cadastro</button>

            </C.Container>
        </Theme>
    )
}