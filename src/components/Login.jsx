import { useEffect, useState } from "react";
function Login()
{
    return(
    <div className="" >
        <p className="text-start">Complete el formulario para Registrarce</p>
        <form className="row g-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded ">
            <div className="col-md-6">
                <label htmlFor="specificSizeInputName" className="form-label">Nombre Completo:</label>
                <input  type="text" className="form-control" id="specificSizeInputName" required />
            </div>
            <div className="col-md-6">
                <label className="form-label" htmlFor="specificSizeInputDNI">DNI:</label>
                <input type="text" className="form-control" id="specificSizeInputDNI" pattern="[0-9]{6,12}" required />
            </div>
            <div className="col-md-6">
                <label className="form-label" htmlFor="specificSizeInputTEL">Numero de telefono:</label>
                <input type="text" className="form-control" id="specificSizeInputTEL" pattern="[0-9]{10}" required />
            </div>
            <div className="col-md-6">
                <label className="form-label" htmlFor="specificSizeInputDate">Fecha de nacimiento:</label>
                <input type="date" className="form-control" id="specificSizeInputDate" required/>
            </div>
            <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label" >Email:</label>
                <input type="email" className="form-control" id="inputEmail4" required/>
            </div>
            <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label" >Contaseña:</label>
                <input type="password" className="form-control" id="inputPassword4" required/>
            </div>
            <div className="col-md-6">
                <label htmlFor="inputAddress" className="form-label" >Direccion:</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required/>
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">Direccion 2</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
             </div>
             <fieldset className="row mb-3">
                <legend className="col-form-label col-sm-2 pt-0">Terminos y condiciones</legend>
                <div className="col-sm-10">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="gridCheck" id="gridCheck1" required/>
                    <label className="form-check-label" htmlFor="gridCheck1">
                    Acepto terminos y condiciones
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="gridCheck" id="gridChec2" />
                    <label className="form-check-label" htmlFor="gridChecs2">
                    Recibir envios a domicilio
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="gridCheck" id="gridChec3"/>
                    <label className="form-check-label" htmlFor="gridChec3">
                    Recibir ofertas por correo
                    </label>
                </div>
                </div>
            </fieldset>
            <div className="col-12">
                <button type="submit" className="btn btn-success">Registrarce</button>
            </div>
        </form>
    </div>
    )

};
export default Login;