declare namespace User {
  interface LoginFormData {
      email: string
      password: string
  }

  interface IUser {
    id?: number
    name?: string
    email: string
  }
}