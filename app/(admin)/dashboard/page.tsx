import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BarChart3, FileText, Users, DollarSign } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
            <BarChart3 className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-muted-foreground">Resumen de facturación CFDI</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="hover:shadow-xl transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="text-3xl font-bold text-emerald-600">1,234</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Facturas generadas</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="text-3xl font-bold text-blue-600">$245,670</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Ingresos mes</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="text-3xl font-bold text-purple-600">45</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">RFCs activos</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="text-3xl font-bold text-orange-600">892</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Timbres consumidos</p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 shadow-2xl">
          <CardHeader>
            <CardTitle>Próximas acciones</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <Button className="w-full justify-start h-14">
              <FileText className="w-5 h-5 mr-3" />
              Gestionar Facturas
            </Button>
            <Button variant="outline" className="w-full justify-start h-14">
              <Users className="w-5 h-5 mr-3" />
              RFCs Clientes
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}