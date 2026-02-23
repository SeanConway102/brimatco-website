"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"

const navItems = [
  {
    label: "PRODUCTS",
    href: "/products",
    hasDropdown: true,
    items: [
      { label: "All Products", href: "/products" },
      { label: "QCL Light Duty", href: "/products/qcl" },
      { label: "QCM Medium Duty", href: "/products/qcm" },
      { label: "QCH Heavy Duty", href: "/products/qch" },
      { label: "QCEH Extra Heavy", href: "/products/qceh" },
      { label: "QCEH-SP Special", href: "/products/qceh-sp" },
      { label: "Tube Nut Series", href: "/products/tube-nut" },
    ],
  },
  {
    label: "DRIVES",
    href: "/drives",
    hasDropdown: true,
    items: [
      { label: "Internal & External Drives", href: "/drives" },
      { label: "Gear Driven Blind Drives", href: "/drives#blind-drives" },
    ],
  },
  {
    label: "ABOUT",
    href: "/about",
    hasDropdown: true,
    items: [
      { label: "Quality & Service", href: "/about" },
      { label: "Flexible Adaptability", href: "/about#adaptability" },
      { label: '"B" Series Custom', href: "/about#b-series" },
      { label: "Contact Us", href: "/about#contact" },
    ],
  },
  { label: "CONTACT", href: "/about#contact", hasDropdown: false },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-cast-iron">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/images/brimatco-logo.png"
            alt="Brimatco"
            width={300}
            height={84}
            style={{ width: "300px", height: "84px" }}
            priority
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <div key={item.label} className="group relative">
              <a
                href={item.href}
                className="flex items-center gap-1.5 font-sans text-base font-semibold tracking-wider text-vellum/80 transition-colors hover:text-vellum"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </a>
              {item.hasDropdown && item.items && (
                <div className="invisible absolute left-0 top-full z-50 min-w-48 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  <div className="rounded-sm border border-drafting-grey/30 bg-cast-iron p-2 shadow-lg">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        className="block rounded-sm px-3 py-2 font-sans text-sm text-vellum/70 transition-colors hover:bg-drafting-grey/20 hover:text-vellum"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="text-vellum lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="border-t border-drafting-grey/30 bg-cast-iron px-6 pb-6 lg:hidden" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-drafting-grey/20 py-3">
              <a
                href={item.href}
                className="font-sans text-sm font-medium tracking-wider text-vellum"
              >
                {item.label}
              </a>
              {item.hasDropdown && item.items && (
                <div className="mt-2 flex flex-col gap-1 pl-4">
                  {item.items.map((subItem) => (
                    <a
                      key={subItem.label}
                      href={subItem.href}
                      className="font-sans text-sm text-vellum/60 transition-colors hover:text-vellum"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  )
}
