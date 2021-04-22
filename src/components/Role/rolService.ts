import axios from "axios";
import { Role } from "./Role";

const API = 'http://localhost:4000'

export const getRole = async (id: string) => {
    return await axios.get<Role>(`${API}/roles/${id}`)
}
export const getRoles = async () => {
    return await axios.get(`${API}/roles/`)
}