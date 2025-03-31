"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/app/_components/theme-toggler"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { name: "About", href: "about" },
  { name: "Projects", href: "projects" },
  { name: "Blog", href: "blog" },
  { name: "Contact", href: "contact" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    handleNavClick(e, sectionId)
    setSheetOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border/40"
          : "bg-background"
      )}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-xl font-bold text-transparent">
              &#60;evan.rosa/&#62;
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-blue-600",
                    pathname === `/#${item.href}`
                      ? "text-blue-600"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center md:hidden space-x-2">
            <ThemeToggle />
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/20"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
                <nav className="flex flex-col gap-4 p-6">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.href}
                      whileHover={{ x: 5, scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Link
                        href={`#${item.href}`}
                        onClick={(e) => handleMobileNavClick(e, item.href)}
                        className={cn(
                          "flex items-center py-2 text-base font-medium transition-colors hover:text-blue-600",
                          pathname === `/#${item.href}`
                            ? "text-blue-600"
                            : "text-muted-foreground"
                        )}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

