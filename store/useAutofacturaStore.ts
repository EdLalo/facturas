import { create } from 'zustand'
import { Compra } from '@/types'

interface FacturaGenerada {
  folio: string
  uuid: string
  total?: number
}

interface AutofacturaState {
  compra: Compra | null
  facturaGenerada: FacturaGenerada | null
  setCompra: (compra: Compra) => void
  setFacturaGenerada: (factura: FacturaGenerada) => void
  reset: () => void
}

export const useAutofacturaStore = create<AutofacturaState>((set) => ({
  compra: null,
  facturaGenerada: null,
  setCompra: (compra) => set({ compra }),
  setFacturaGenerada: (factura) => set({ facturaGenerada: factura }),
  reset: () => set({ compra: null, facturaGenerada: null })
}))