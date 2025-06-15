// TRAER LOS REGISTROS DE USUARIOS DE LA BASE DE DATOS

export interface User{
    name?: string,
    lastName?: string,
    dni: string,
    email?: string,
    password: string,
    admin?: string
}