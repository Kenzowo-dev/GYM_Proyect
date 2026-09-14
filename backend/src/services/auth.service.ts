export interface RegisterData {
  fullName: string;
  email: string;
  password: string;
  phone: string;
  birthDate: string;
  gender: string;
}

export const registerUser = (data: RegisterData) => {
  return {
    message: "Usuario recibido correctamente",
    user: data,
  };
};