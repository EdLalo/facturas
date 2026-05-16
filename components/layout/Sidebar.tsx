import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LayoutDashboard, FileText } from 'lucide-react'

export function Sidebar() {
  return (
    <div className="w-64 bg-card border-r h-screen p-4 space-y-4">
      <h2 className="text-2xl font-bold">AutoFactura</h2>
      <nav className="space-y-2">
        <Link href="/dashboard" className="w-full justify-start inline-flex items-center rounded-none border border-transparent bg-clip-padding text-xs font-semibold tracking-widest whitespace-nowrap uppercase transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50 h-10 gap-1.5 px-6">
          <LayoutDashboard className="w-5 h-5 mr-3" />
          Dashboard
        </Link>
        <Link href="/facturas" className="w-full justify-start inline-flex items-center rounded-none border border-transparent bg-clip-padding text-xs font-semibold tracking-widest whitespace-nowrap uppercase transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50 h-10 gap-1.5 px-6">
          <FileText className="w-5 h-5 mr-3" />
          Facturas
        </Link>
      </nav>
    </div>
  )
}