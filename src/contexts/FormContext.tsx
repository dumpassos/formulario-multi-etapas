// 1 context, 2 reducer, 3 provider, 4 hook

import { ReactNode, createContext, useContext, useReducer } from "react";

type State = {
    currentStep: number;
    name: string;
    level: 0 | 1;
    email: string;
    github: string;
}
type Action = {
    type: FormActions;
    payload: any;
}
type ContextType = {
    state: State;
    dispatch: (action: Action) => void
}
type FormProviderProps = {
    children: ReactNode
}

const initialData: State = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: ''
}

//Criando o contexto

const FormContext = createContext<ContextType | undefined>(undefined);

//Criando o Reducer

export enum FormActions  {
    setCurrentStep, //passo atual
    setName, //nome do usuário
    setLevel, //nivel de programação
    setEmail, //email do usuario
    setGithub, //github do usuario
}

const formReducer = (state: State, action: Action)=>{
    switch(action.type){
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payload};
        case FormActions.setName:
            return {...state, name: action.payload};
        case FormActions.setLevel:
            return {...state, level: action.payload};
        case FormActions.setEmail:
            return {...state, email: action.payload};
        case FormActions.setGithub:
            return {...state, github: action.payload};
        default: //caso mande algo que não troca nada
            return state;
    }
}

//Criando o Provider

export const FormProvider = ({children}: FormProviderProps)=>{
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = {state, dispatch}
    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}


//Criando o hook

export const useForm = ()=>{
    const context = useContext(FormContext);
    if(context === undefined){
        //se o hook estiver sendo utilizado fora do provider
        throw new Error ('useForm tem que ser utilizado dentro do provider')
    }

    return context;
}

