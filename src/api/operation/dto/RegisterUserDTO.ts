interface RegisterUserDTO {
    username: string;
    email: string;
    cpf?: string;
    rg?: string;
    phone?: string;
    zipCode?: string;
    address?: string;
    neighborhood?: string;
    state?: string;
    city?: string;
    complement?: string;
}

export { RegisterUserDTO }