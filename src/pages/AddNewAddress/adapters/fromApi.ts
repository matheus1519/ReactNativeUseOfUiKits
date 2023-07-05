interface AddressFromApi {
  logradouro: string
  uf: string
  localidade: string
  bairro: string
  cep: string
  complemento: string
  ddd: string
  gia: string
  ibge: string
  siafi: string
}

export const addressFromApi = (data: AddressFromApi) => {
  const addressMapped = {
    street: data.logradouro,
    state: data.uf,
    city: data.localidade,
    neighborhood: data.bairro
  }

  return addressMapped
}
