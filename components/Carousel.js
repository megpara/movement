"use client"

import { useEffect, useRef } from "react"

export default function FlickableCarousel({ media = [] }) {
  const containerRef = useRef(null)
  const velocity = useRef(0)
  const drift = useRef(0)
  const isInteracting = useRef(false)

  if (!media.length) return null

  // Triple duplicate for infinite scrolling
  const loopMedia = [...media, ...media, ...media]

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const baseSpeed = 0.5
    const friction = 0.95

    const animate = () => {
      const current = container.scrollLeft

      // Blend drift
      const targetDrift = isInteracting.current ? baseSpeed * 0.3 : baseSpeed
      drift.current += (targetDrift - drift.current) * 0.05

      const movement = drift.current + velocity.current
      const next = current + movement

      velocity.current *= friction

      const oneSetWidth = container.scrollWidth / 3
      const leftBoundary = oneSetWidth * 0.5
      const rightBoundary = oneSetWidth * 1.5

      // Only reposition if actually leaving the middle set
      if (next <= leftBoundary) {
        container.scrollLeft = next + oneSetWidth
      } else if (next >= rightBoundary) {
        container.scrollLeft = next - oneSetWidth
      } else {
        container.scrollLeft = next
      }

      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let wheelTimeout
    const handleWheel = (e) => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return
      e.preventDefault()

      isInteracting.current = true
      velocity.current += e.deltaX * 0.04 // scale flicks

      clearTimeout(wheelTimeout)
      wheelTimeout = setTimeout(() => {
        isInteracting.current = false
      }, 150)
    }

    container.addEventListener("wheel", handleWheel, { passive: false })
    return () => container.removeEventListener("wheel", handleWheel)
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex overflow-hidden touch-none"
    >
      {loopMedia.map((src, i) => (
        <div key={i} className="h-full flex-shrink-0">
          <img
            src={src}
            draggable={false}
            className="h-full w-auto object-cover pointer-events-none select-none"
          />
        </div>
      ))}
    </div>
  )
}