"use client"
import { createContext, useState } from "react"

interface NavigationContextProps {
  isMobileNavOpen: boolean
  setIsMobileNavOpen: (open: boolean) => void
  closeMobileNav: () => void
}

export const NavigationContext = createContext<NavigationContextProps>({
  isMobileNavOpen: false,
  setIsMobileNavOpen: () => {},
  closeMobileNav: () => {},
})

export const NavigationProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const closeMobileNav = () => setIsMobileNavOpen(false)
  return (
    <NavigationContext.Provider
      value={{ isMobileNavOpen, setIsMobileNavOpen, closeMobileNav }}
    >
      {children}
    </NavigationContext.Provider>
  )
}
