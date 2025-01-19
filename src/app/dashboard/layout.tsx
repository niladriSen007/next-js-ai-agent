"use client"
import Header from "@/components/shared/Header"
import Sidebar from "@/components/shared/Sidebar"
import { Authenticated } from "convex/react"

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className="flex h-screen">
      <Authenticated>
        <Sidebar />
      </Authenticated>

      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}
export default DashboardLayout
