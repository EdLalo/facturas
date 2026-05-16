import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ShieldCheck, Zap, FileText, Clock, Download } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <Badge className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-lg mb-8 inline-flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" /> CFDI 4.0 SAT México
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6">
          AutoFactura
          <span className="block bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
            CFDI Instantáneo
          </span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          Genera facturas CFDI 4.0 de forma rápida, con timbrado y estandarización para México. Diseñado para
          empresas que necesitan velocidad y cumplimiento.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/portal/autofacturar"
            className="inline-flex items-center justify-center"
          >
            <Button className="h-12 w-full sm:w-auto px-8">
              <Zap className="w-5 h-5 mr-2" /> Probar ahora
            </Button>
          </Link>

          <Link
            href="/facturas"
            className="inline-flex items-center justify-center"
          >
            <Button
              variant="outline"
              className="h-12 w-full sm:w-auto px-8 bg-background/50"
            >
              <FileText className="w-5 h-5 mr-2" /> Ver demo
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-3">
                <FileText className="w-6 h-6 text-emerald-700" />
              </div>
              <CardTitle className="text-xl">Generación automática</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Crea tu CFDI 4.0 con campos clave y estructura lista para el SAT.
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-sky-700" />
              </div>
              <CardTitle className="text-xl">Rápido y consistente</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Flujo optimizado para reducir errores y acelerar la facturación.
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center mb-3">
                <Download className="w-6 h-6 text-purple-700" />
              </div>
              <CardTitle className="text-xl">Descarga y operación</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Mantén control de tus documentos y exporta cuando lo necesites.
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Cumplimiento CFDI 4.0</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Estructura pensada para soportar el proceso de timbrado y generación conforme a estándares actuales.
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Panel listo para operar</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Un dashboard con acciones rápidas para gestionar facturas y clientes.
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <p className="text-sm text-muted-foreground">
            Nota: esta es una interfaz inicial. Conecta tu backend y lógica de timbrado para producción.
          </p>
        </div>
      </div>
    </div>
  )
}

