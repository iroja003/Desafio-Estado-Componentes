import React, { useState } from 'react';
//import { RegExp } from 'react';

const Formulario = () => {
  const [usuario,setUsuario] = useState(""); // seteo input usuario
  const [clave  ,setClave  ] = useState(""); // seteo input clave
  
  const [error  ,setError  ] = useState(false);// seteo error

  /* validarInput : Validar username que cumpla el patron */
  const validarInput = (e) =>{
  let regex = new RegExp("^[a-zA-Z0-9]+");      
  e.preventDefault();
  for (let i = 0; i < usuario.length; i++) {
    let element = usuario[i];
    if (!regex.test(element) || element ==='') {
      setError(true);
      return;
    };
    // Borra mensaje de error
     setError(false);
    };
  };

  return (
    <div className='formulario'>
       <form action='https://www.google.com/'  onSubmit={validarInput} >
       <div className='form-group'>
           {error ? <p className='perror'> Debe ingresar Nombre de usuario valido, solo letras y numeros.</p>: null}
           <label> Username </label>
           <input className='form-control' type="text" name='Usuario' 
                  placeholder='Ingresa Nombre de usuario' 
                  onChange={(e) => setUsuario(e.target.value)} value={usuario}>
           </input>
           <label> Password </label>
           <input className='form-control' type="password" name='Clave' 
                  placeholder='Ingresa una Password' 
                  onChange={(e)=>setClave(e.target.value)} value={clave}></input>
       </div>
       <div className='btn-inisec'>
           {clave==='252525' ? <button className='btn btn-primary' type='submit'> Iniciar Session</button> : null}
       </div>
       </form>
    </div>
  )
}

export default Formulario;