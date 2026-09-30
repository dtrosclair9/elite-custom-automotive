'use client'

declare global {
  interface Window {
    AutoOps?: { show: () => void }
  }
}

// Opens the AutoOps scheduler (script loaded in layout.tsx). Falls back to the
// contact page if the AutoOps script hasn't loaded or was blocked.
export default function ScheduleButton({
  className = 'btn-outline text-base',
  children = 'Schedule Service',
}: {
  className?: string
  children?: React.ReactNode
}) {
  return (
    <a
      href="/contact"
      className={className}
      onClick={(e) => {
        if (typeof window.AutoOps?.show === 'function') {
          e.preventDefault()
          window.AutoOps.show()
        }
      }}
    >
      {children}
    </a>
  )
}
