import axios from "axios";
import { Photo } from "./Photo";
import config from '../../config'

const API = config.API_HOST

export const createPhoto = async (photo:Photo) => {
    return await axios.post(`${API}/photos`, photo)
}
export const getPhotos = async () => {
    return await axios.get(`${API}/photos`)
}
export const getPhoto = async (id: string) => {
    return await axios.get<Photo>(`${API}/photos/${id}`)
}
export const updatePhoto = async (id: string, photo:Photo) => {
    return await axios.put<Photo>(`${API}/photos`)
}
export const deletePhoto = async (id: string, token:string) => {
    return await axios.delete<Photo>(`${API}/photos/${id}/${token}`)
}