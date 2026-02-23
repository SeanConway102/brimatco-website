"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import Image from "next/image"
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react"

interface ImageLightboxProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

const ZOOM_LEVELS = [1, 1.5, 2, 3, 4]

export function ImageLightbox({
  src,
  alt,
  width,
  height,
  className,
}: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [zoomIndex, setZoomIndex] = useState(0)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef({ x: 0, y: 0 })
  const posStart = useRef({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const zoom = ZOOM_LEVELS[zoomIndex]

  const open = useCallback(() => {
    setIsOpen(true)
    setZoomIndex(0)
    setPosition({ x: 0, y: 0 })
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    setZoomIndex(0)
    setPosition({ x: 0, y: 0 })
  }, [])

  const zoomIn = useCallback(() => {
    setZoomIndex((i) => Math.min(i + 1, ZOOM_LEVELS.length - 1))
  }, [])

  const zoomOut = useCallback(() => {
    setZoomIndex((i) => {
      const next = Math.max(i - 1, 0)
      if (next === 0) setPosition({ x: 0, y: 0 })
      return next
    })
  }, [])

  const resetZoom = useCallback(() => {
    setZoomIndex(0)
    setPosition({ x: 0, y: 0 })
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "+" || e.key === "=") zoomIn()
      if (e.key === "-") zoomOut()
      if (e.key === "0") resetZoom()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKey)
    }
  }, [isOpen, close, zoomIn, zoomOut, resetZoom])

  // Mouse wheel zoom
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault()
      if (e.deltaY < 0) zoomIn()
      else zoomOut()
    },
    [zoomIn, zoomOut]
  )

  // Drag to pan
  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (zoom <= 1) return
      setIsDragging(true)
      dragStart.current = { x: e.clientX, y: e.clientY }
      posStart.current = { ...position }
      ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
    },
    [zoom, position]
  )

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return
      const dx = e.clientX - dragStart.current.x
      const dy = e.clientY - dragStart.current.y
      setPosition({
        x: posStart.current.x + dx,
        y: posStart.current.y + dy,
      })
    },
    [isDragging]
  )

  const handlePointerUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Double-click to toggle zoom
  const handleDoubleClick = useCallback(() => {
    if (zoomIndex === 0) {
      setZoomIndex(2) // jump to 2x
    } else {
      resetZoom()
    }
  }, [zoomIndex, resetZoom])

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="group relative block w-full cursor-zoom-in"
        aria-label={`Zoom in on ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
        <span className="absolute bottom-3 right-3 flex items-center gap-1.5 border border-border bg-card/90 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-drafting-grey opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
          <ZoomIn className="h-3 w-3" />
          Click to enlarge
        </span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-cast-iron/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged view of ${alt}`}
        >
          {/* Toolbar */}
          <div className="flex items-center justify-between border-b border-vellum/10 px-4 py-3">
            <span className="font-mono text-xs tracking-wider text-vellum/60">
              {Math.round(zoom * 100)}% {zoom > 1 && "- Drag to pan"}
            </span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={zoomOut}
                disabled={zoomIndex === 0}
                className="flex h-9 w-9 items-center justify-center text-vellum/70 transition-colors hover:bg-vellum/10 hover:text-vellum disabled:opacity-30 disabled:hover:bg-transparent"
                aria-label="Zoom out"
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={zoomIn}
                disabled={zoomIndex === ZOOM_LEVELS.length - 1}
                className="flex h-9 w-9 items-center justify-center text-vellum/70 transition-colors hover:bg-vellum/10 hover:text-vellum disabled:opacity-30 disabled:hover:bg-transparent"
                aria-label="Zoom in"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={resetZoom}
                className="flex h-9 w-9 items-center justify-center text-vellum/70 transition-colors hover:bg-vellum/10 hover:text-vellum"
                aria-label="Reset zoom"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <div className="mx-2 h-5 w-px bg-vellum/20" />
              <button
                type="button"
                onClick={close}
                className="flex h-9 w-9 items-center justify-center text-vellum/70 transition-colors hover:bg-ruby hover:text-vellum"
                aria-label="Close enlarged view"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Image viewport */}
          <div
            ref={containerRef}
            className="relative flex-1 overflow-hidden"
            onWheel={handleWheel}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onDoubleClick={handleDoubleClick}
            style={{ cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-in" }}
          >
            {/* Clickable backdrop to close */}
            <div className="absolute inset-0" onClick={close} />

            <div
              className="absolute left-1/2 top-1/2 transition-transform duration-150 ease-out"
              style={{
                transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                transformOrigin: "center center",
                willChange: isDragging ? "transform" : "auto",
                transitionDuration: isDragging ? "0ms" : "150ms",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={src}
                alt={alt}
                width={width * 3}
                height={height * 3}
                className="max-h-[85vh] w-auto select-none object-contain"
                style={{ pointerEvents: "none" }}
                quality={100}
                priority
                draggable={false}
              />
            </div>
          </div>

          {/* Hint bar */}
          <div className="border-t border-vellum/10 px-4 py-2 text-center">
            <span className="font-mono text-[10px] tracking-wider text-vellum/40">
              Scroll to zoom / Double-click to toggle / Drag to pan / ESC to close
            </span>
          </div>
        </div>
      )}
    </>
  )
}
