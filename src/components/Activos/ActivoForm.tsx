import React, { ChangeEvent, FormEvent, useState } from "react";
import { Activo } from "./Activo";
import * as activoService from "./activoService"
import { toast } from "react-toastify";
import { useHistory, } from "react-router-dom";

export const ActivoForm = () => {
  const initialState = {
    name: "",
    description: "",
  };
  
  const history = useHistory();
  const token = localStorage.getItem('loggedGreenUser')

  const [activo, setActivo] = useState<Activo>(initialState);

  const handlerInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setActivo({ ...activo, [e.target.name]: e.target.value });
  };

  const handlSubmit = async (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    await activoService.createActivo(activo, `${token}`);
    toast.success('Articulo agregado satisfactoriamente')
    history.push('/activos')
  }

  return (
    <div
      className=" row p-5"
      style={{
        alignItems: "center",
        alignContent: "center",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <div className="card border-primary mb-3" style={{ width: 800 }}>
        <div className="card-header">Activos </div>
        <div className="card-body">
          <h4 className="card-title">Nuevo Activo</h4>

          <form onSubmit={handlSubmit} className="form-horizontal">
            <fieldset>
              <div className=" row form-group">
                <div className="col-lg-1"></div>
                <label className="col-lg-2 control-label">Nombre</label>
                <div className="col-lg-7">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Nombre"
                    onChange={handlerInputChange}
                  />
                </div>
              </div>
              <div className="row form-group">
                <div className="col-lg-1"></div>
                <label htmlFor="textArea" className="col-lg-2 control-label">
                  Descripción
                </label>
                <div className="col-lg-7">
                  <textarea
                    className="form-control"
                    rows={3}
                    name="description"
                    id="description"
                    defaultValue={""}
                    onChange={handlerInputChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-lg-10 col-lg-offset-2">
                  <button type="reset" className="btn btn-default">
                  </button>
                  <button  type="submit" className="btn btn-primary" >
                    Agregar
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};
