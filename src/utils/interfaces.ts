interface TableData {
  addCountry: boolean,
  city?: string,
  communication: string,
  confirmPassword: string
  country?: string,
  email: string,
  password: string,
  phone?: string,
  rememberMe: boolean,
  username: string,
  [key: string]: string | boolean | undefined,
}

export type TableDataInterface = TableData | null;