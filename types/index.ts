export interface Factura {
  id: string;
  folio: string;
  cliente: string;
  rfc: string;
  total: number;
  fecha: string;
  estado: 'generada' | 'timbrada' | 'cancelada' | 'pendiente';
}

export interface Rfc {
  id: string;
  rfc: string;
  razonSocial: string;
  regimenFiscal: string;
  codigoPostal: string;
  usoCfdi: string;
  facturasEmitidas: number;
  usoMensual: number;
  activo: boolean;
  createdAt: string;
}

export interface Compra {
  id: string;
  folioCompra: string;
  clienteRfc: string;
  productos: Producto[];
  subtotal: number;
  iva: number;
  total: number;
  fecha: string;
}

export interface Producto {
  nombre: string;
  cantidad: number;
  precioUnitario: number;
  importe: number;
}

export interface Kpi {
  label: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down';
}

export interface Certificado {
  id: string;
  rfcAsociado: string;
  tipo: 'cer' | 'key';
  nombreArchivo: string;
  fechaVencimiento: string;
  activo: boolean;
}