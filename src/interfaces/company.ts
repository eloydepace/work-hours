// TRAER LOS REGISTROS DE EMPRESAS DE LA BASE DE DATOS

export interface Company{
    id: number
    companyName: string,
    cif: string,
    logo?: string
}

export interface CompanyCreate extends Omit<Company, 'id'>{
    name: string,
    lastName: string,
    dni: string,
    password: string,
    email: string,
    admin: string,
}