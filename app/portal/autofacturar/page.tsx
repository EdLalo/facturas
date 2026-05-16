'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { mockCompraActual } from '@/data/mock'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { 
  User, 
  Building, 
  MapPin, 
  Mail, 
  FileText,
  Loader2 
} from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import { useAutofacturaStore } from '@/store/useAutofacturaStore'
import { generarFacturaMock } from '@/services/mockApi'
import { toast } from 'react-hot-toast'

export default function AutofacturarPage() {
  const router = useRouter()
  const { compra, setFacturaGenerada, setCompra } = useAutofacturaStore()
  const [loading, setLoading] = useState(false)


  const [formData, setFormData] = useState({
    rfc: '',
    razonSocial: '',
    regimenFiscal: '',
    usoCfdi: '',
    codigoPostal: '',
    email: ''
  })

  const handleGenerarFactura = async () => {
    setLoading(true)
    try {
      await generarFacturaMock(formData)
      setFacturaGenerada({
        folio: `FAC-${Date.now()}`,
        uuid: 'mock-uuid-success',
        total: compra?.total ?? 0
      })
      toast.success('¡Factura generada exitosamente!')
      router.push('/portal/exito')
    } catch (error) {
      toast.error('Error al generar factura')
    } finally {
      setLoading(false)
    }
  }

  if (!compra) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-12 text-center">
              <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">No hay compra para facturar</h2>
              <p className="text-muted-foreground mb-8">
                Contacta al administrador para continuar con tu autofacturación
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Resumen Compra */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Resumen de tu compra
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-4">Productos</h3>
                <div className="space-y-3">
                  {compra.productos.map((producto, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-border/50">
                      <span>{producto.nombre}</span>
                      <span className="font-semibold">${producto.importe.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${compra.subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>IVA (16%)</span>
                    <span>${compra.iva.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t font-bold text-xl">
                    <span>Total</span>
                    <span>${compra.total.toLocaleString()}</span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>Folio de compra: <strong>{compra.folioCompra}</strong></div>
                  <div>Fecha: <strong>{new Date(compra.fecha).toLocaleDateString('es-MX')}</strong></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Formulario CFDI */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-6 h-6" />
              Datos fiscales para tu factura CFDI 4.0
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="rfc">RFC <span className="text-destructive">*</span></Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="rfc"
                    placeholder="ABC123456DEF"
                    className="pl-10"
                    value={formData.rfc}
                    onChange={(e) => setFormData({...formData, rfc: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="razonSocial">Razón Social <span className="text-destructive">*</span></Label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="razonSocial"
                    placeholder="Nombre completo o razón social"
                    className="pl-10"
                    value={formData.razonSocial}
                    onChange={(e) => setFormData({...formData, razonSocial: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="codigoPostal">Código Postal <span className="text-destructive">*</span></Label>
                <Input
                  id="codigoPostal"
                  placeholder="01210"
                  value={formData.codigoPostal}
                  onChange={(e) => setFormData({...formData, codigoPostal: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="factura@tucorreo.com"
                    className="pl-10"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="regimenFiscal">Régimen Fiscal</Label>
                <Input
                  id="regimenFiscal"
                  placeholder="601 - General de Ley Personas Morales"
                  value={formData.regimenFiscal}
                  onChange={(e) => setFormData({...formData, regimenFiscal: e.target.value})}
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="usoCfdi">Uso del CFDI</Label>
                <Input
                  id="usoCfdi"
                  placeholder="G03 - Gastos en general"
                  value={formData.usoCfdi}
                  onChange={(e) => setFormData({...formData, usoCfdi: e.target.value})}
                />
              </div>
            </form>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Button 
            size="lg" 
            className="flex-1 h-14 text-lg font-semibold"
            onClick={handleGenerarFactura}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Generando tu factura CFDI...
              </>
            ) : (
              'Generar mi Factura CFDI 4.0'
            )}
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="flex-1 h-14"
            onClick={() => router.back()}
          >
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  )
}