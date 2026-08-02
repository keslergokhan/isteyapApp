import { useContext } from "react";
import { DefaultLayoutContext } from "../layouts/detailLayout/contexts/DefaultLayoutContext";



export default function useHeader():{setTitle:(title:string)=>void}{
    const defaultLayoutContext = useContext(DefaultLayoutContext);
    return {setTitle: defaultLayoutContext.setTitle}
}