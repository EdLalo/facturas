import { Factura, Rfc, Compra, Kpi, Certificado } from '@/types'

export const mockKpis: Kpi[] = [
  {
    label: 'Facturas Generadas',
    value: '1,234',
    change: 12,
    trend: 'up'
  },
  {
    label: 'Timbres Consumidos',
    value: '892',
    change: -3,
    trend: 'down'
  },
  {
    label: 'RFCs Activos',
    value: '45',
    change: 5,
    trend: 'up'
  },
  {
    label: 'Ingresos Mes',
    value: '$245,670',
    change: 18,
    trend: 'up'
  }
]

export const mockFacturas: Factura[] = [
  {
    id: '1',
    folio: 'FAC-2024-0001',
    cliente: 'Comercializadora ABC SA de CV',
    rfc: 'ABCD123456DEF',
    total: 12500.50,
    fecha: '2024-12-01',
    estado: 'timbrada'
  },
  // ... más datos mock
]

export const mockRfc: Rfc[] = [
  {
    id: '1',
    rfc: 'ABCD123456DEF',
    razonSocial: 'Comercializadora ABC SA de CV',
    regimenFiscal: '601 - General de Ley Personas Morales',
    codigoPostal: '01210',
    usoCfdi: 'G03 - Gastos en general',
    facturasEmitidas: 45,
    usoMensual: 120,
    activo: true,
    createdAt: '2024-01-15'
  },
  // ... más datos
]

export const mockCompraActual: Compra = {
  id: 'compra-1',
  folioCompra: 'COMP-2024-0456',
  clienteRfc: 'XJKL789012MNO',
  productos: [
    {
      nombre: 'Laptop Dell XPS 13',
      cantidad: 2,
      precioUnitario: 25000,
      importe: 50000
    },
    {
      nombre: 'Monitor 27"',
      cantidad: 1,
      precioUnitario: 8000,
      importe: 8000
    }
  ],
  subtotal: 58000,
  iva: 9280,
  total: 67280,
  fecha: '2024-12-05'
}