import { ReactNode } from "react"
import * as C from "./styles"
import { Header } from "../Header";
import { SidebarItem } from "../SidebarItem";
import { useForm } from "../../contexts/FormContext";

type Props = {
    children: ReactNode;
}

export const Theme = ({children}: Props)=>{

    const {state} = useForm();

    return(
        <C.Container>
            <C.Area>
                <Header/> {/*Componente*/ }

                <C.Steps>
                    <C.Sidebar>

                        <SidebarItem
                            title="Pessoal"
                            description="Identifique-se"
                            icon="🧑"
                            path="/"
                            active={state.currentStep === 1}
                        />
                        <SidebarItem
                            title="Profissional"
                            description="Informe seu nível"
                            icon="💻"
                            path="/passo2"
                            active={state.currentStep === 2}
                        />
                        <SidebarItem
                            title="Contatos"
                            description="Como achar você"
                            icon="📧"
                            path="/passo3"
                            active={state.currentStep === 3}
                        />

                    </C.Sidebar>
                    <C.Page>
                        {children} {/*Páginas do site*/}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}