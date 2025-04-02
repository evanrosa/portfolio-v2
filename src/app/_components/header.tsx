"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { sendGTMEvent } from '@next/third-parties/google'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/app/_components/theme-toggler"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { name: "About", href: "about", isSection: true },
  { name: "Projects", href: "projects", isSection: true },
  { name: "Blog", href: "/blog", isSection: false },
  { name: "Contact", href: "contact", isSection: true },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isAdminPage = pathname?.startsWith('/admin')
  const isHomePage = pathname === '/'

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    e.preventDefault()
    if (item.isSection) {
      if (!isHomePage) {
        router.push(`/#${item.href}`)
      } else {
        const element = document.getElementById(item.href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    } else {
      router.push(item.href)
    }
    sendGTMEvent({ event: 'nav_click', value: item.name })
  }

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    handleNavClick(e, item)
    setSheetOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border/40 dark:bg-slate-900/80 dark:border-slate-800/40"
          : "bg-background dark:bg-slate-900"
      )}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={() => sendGTMEvent({ event: 'nav_click', value: 'home' })}>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-yellow-500 dark:to-yellow-400 bg-clip-text text-xl font-bold text-transparent">
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
                  href={item.isSection ? `/#${item.href}` : item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-yellow-400",
                    (item.isSection && (pathname === `/#${item.href}` || (!isHomePage && pathname === `/${item.href}`))) ||
                      (!item.isSection && pathname === item.href)
                      ? "text-blue-600 dark:text-yellow-400"
                      : "text-muted-foreground dark:text-slate-300"
                  )}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <ThemeToggle />
            {isAdminPage && (
              <>
                <SignedOut>
                  <div className="flex items-center space-x-2">
                    <SignInButton mode="modal">
                      <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:text-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-700">
                        Sign In
                      </button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                        Sign Up
                      </button>
                    </SignUpButton>
                  </div>
                </SignedOut>
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
              </>
            )}
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center md:hidden space-x-2">
            <ThemeToggle />
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 dark:bg-slate-900 dark:border-slate-800">
                <nav className="flex flex-col gap-4 p-6">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.href}
                      whileHover={{ x: 5, scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Link
                        href={item.isSection ? `/#${item.href}` : item.href}
                        onClick={(e) => handleMobileNavClick(e, item)}
                        className={cn(
                          "flex items-center py-2 text-base font-medium transition-colors hover:text-blue-600 dark:hover:text-yellow-400",
                          (item.isSection && (pathname === `/#${item.href}` || (!isHomePage && pathname === `/${item.href}`))) ||
                            (!item.isSection && pathname === item.href)
                            ? "text-blue-600 dark:text-yellow-400"
                            : "text-muted-foreground dark:text-slate-300"
                        )}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  {isAdminPage && (
                    <>
                      <SignedOut>
                        <div className="flex flex-col space-y-2 pt-4">
                          <SignInButton mode="modal">
                            <button className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:text-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-700">
                              Sign In
                            </button>
                          </SignInButton>
                          <SignUpButton mode="modal">
                            <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                              Sign Up
                            </button>
                          </SignUpButton>
                        </div>
                      </SignedOut>
                      <SignedIn>
                        <div className="pt-4">
                          <UserButton afterSignOutUrl="/" />
                        </div>
                      </SignedIn>
                    </>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

