export interface Details {
    accessToken: string,
    expiresIn: Date,
    user: User
}

interface User {
    idUser: string,
    idPersonType: string,
    email: string,
    nome: string
}
