import { Factura, Rfc, Compra } from '@/types'

export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const generarFacturaMock = async (datos: any): Promise<{uuid: string; folio: string}> => {
  await delay(2000)
  return {
    uuid: 'mock-uuid-1234',
    folio: `FAC-${Date.now()}`
  }
}

export const subirCertificadoMock = async (formData: FormData) => {
  await delay(1500)
  return { success: true, id: 'cert-123' }
}

export const getFacturasMock = async (): Promise<Factura[]> => {
  await delay(1000)
  return [
    // retornar mock data
  ]
}