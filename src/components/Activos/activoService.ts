import axios from "axios";
import { Activo } from "./Activo";
import config from '../../config'

const API = config.API_HOST

export const createActivo = async (activo:Activo, token:string) => {

    return await axios.post(`${API}/activos`, {activo, token})
}
export const getActivos = async () => {
    return await axios.get(`${API}/activos`)
}
export const getActivo = async (id: string) => {
    return await axios.get<Activo>(`${API}/activos/${id}`)
}
export const updateActivo = async (id: string, activo:Activo) => {
    return await axios.put(`${API}/activos/${id}/`, activo)
}
export const deleteActivo = async (id: string, token:any) => {
    return await axios.delete<Activo>(`${API}/activos/${id}/${token}`)
}