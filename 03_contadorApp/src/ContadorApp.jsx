//Hook de REACT para mantener el estado de los componentes
import { useState } from "react"

//{para que se utilice JS}
export const ContadorApp = ({valor}) => {

  const [contador, setContador] = useState(valor);
  
  //c => c callBack (función simplificada)
  const contadorSuma = () => setContador(c => c + 2);
  
  return <>
    <h2>El valor del Contador es {contador} </h2>
    <button onClick={contadorSuma}>Incrementar contador + 2 </button>

  </>
}
