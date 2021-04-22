import React, { ChangeEvent, useEffect, useState } from "react";
import { Activo } from "./Activo";
import * as activoService from "./activoService";
import { BsTrash, BsPlusCircle } from 'react-icons/bs';
import { FiEdit, FiPlus } from 'react-icons/fi';
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const ActivoList = () => {
  const history = useHistory();
  const token = localStorage.getItem('loggedGreenUser')
  const [activos, setActivos] = useState<Activo[]>([]);
const [load, setLoad] = useState(true)
const [search, setSearch] = useState("")
  const loadActivos = async () => {
    const res = await activoService.getActivos();
    setActivos(res.data);
  };
 
  const handleDelete = async (id:string) => {
      if (window.confirm("¿Realmente desea eliminar este articulo?")) {
        await activoService.deleteActivo(id, `${token}`)
        toast.error("Articulo Eliminado correctamente")
          setLoad(!load)
      }
      
  }
  const handlerInputChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setSearch(e.target.value);
    setLoad(!load)
  };

  useEffect(() => {
    loadActivos();
  }, [load]);


  return (
    <div>
      <div
        className=" row p-5"
        style={{
          alignItems: "center",
          alignContent: "center",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <div className="form-group col-lg-1">
        
        </div>
        <div className="form-group col-lg-2">
        <label className="col-form-label" htmlFor="inputDefault">Buscar producto:  </label>
        </div>
         <div className="form-group col-lg-4">
        
        <input type="text" className="form-control" placeholder="Ingresar nombre de producto" id="inputDefault" onChange={handlerInputChange}/>
      </div>
      <div className="form-group col-lg-2"></div>
      <br/>
      <div className="form-group col-lg-3">
        <button type="button" onClick={()=>history.push("/activosform")} className="btn btn-primary" >Nuevo Producto <FiPlus/> </button>
      </div>
      <br/>
        <div className="card border-primary mb-3" style={{ width: 1000 }}>
          <div className="card-header">Inventario</div>
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Producto</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">... Opciones... </th>
                </tr>
              </thead>
              {activos.map((activo, index) => {
                if (!activo.name.indexOf(search)) {
                  return (
                    <tbody key={index}>
                      <tr>
                        <th scope="row">{index+1}</th>
                        <td>{activo.name}</td>
                        <td>{activo.description}</td>
                        <td>
                          <button className="btn btn-warning btn-sm" style={{marginRight: 5}}> <FiEdit style={{color: "#fff"}}/></button> 
                        <button onClick={()=>activo._id && handleDelete(activo._id)} style={{marginRight: 5}} className="btn btn-danger btn-sm"> <BsTrash/></button>
                        <button onClick={()=>history.push(`/new-entry/${activo._id}`)} style={{marginRight: 5}} className="btn btn-info btn-sm"> <BsPlusCircle/></button>
                          </td>
                      </tr>
                    </tbody>
                  );
                }
                  
                
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivoList;