'use client'

import Image, { getImageProps } from 'next/image'
import { useEffect, useRef, useState } from 'react'

/**
 * Decorative looping video that meets WCAG 2.2.2 Pause, Stop, Hide (Level A).
 *
 * A looping autoplay video is moving content that starts by itself, lasts over 5 seconds and sits beside other
 * content, so it needs a visible way to pause it. This gives a real button (keyboard reachable, labelled,
 * 44px target). It also skips autoplay when the visitor's device asks for reduced motion, and remembers a
 * pause for the rest of the visit. The reduced-motion check is extra: the W3C has not accepted it as enough
 * on its own (w3c/wcag#3766), which is why the button is always there.
 *
 * `fill` makes it cover its positioned parent (hero use). The parent must be `relative`. The button sits at
 * z-30 so the readability overlays that follow the video in the DOM never cover it.
 *
 * `mobileStill` (fill mode): phones under 768px get this photo instead, and the video is never mounted there,
 * so nothing moves and nothing heavy downloads. The video mounts after hydration on wider screens only.
 */
const STORAGE_KEY = 'bg-video-paused'

export default function BackgroundVideo({
  src,
  poster,
  className = '',
  fill = false,
  buttonClassName = 'bottom-4 right-4',
  mobileStill,
}: {
  src: string
  poster?: string
  className?: string
  fill?: boolean
  buttonClassName?: string
  mobileStill?: { src: string; alt: string; position: string; className?: string }
}) {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  // With a mobile still, the video only exists on screens 768px and up (decided after hydration).
  const [showVideo, setShowVideo] = useState(!mobileStill)

  useEffect(() => {
    if (!mobileStill) return
    const wide = window.matchMedia('(min-width: 768px)')
    const update = () => setShowVideo(wide.matches)
    update()
    wide.addEventListener('change', update)
    return () => wide.removeEventListener('change', update)
  }, [mobileStill])

  useEffect(() => {
    if (!showVideo) return
    const video = ref.current
    if (!video) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    let pausedByVisitor = false
    try { pausedByVisitor = sessionStorage.getItem(STORAGE_KEY) === '1' } catch {}

    const start = () => {
      if (reduce.matches || pausedByVisitor) { video.pause(); return }
      video.muted = true
      video.play().catch(() => setPlaying(false))
    }
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    const onMotionChange = () => (reduce.matches ? video.pause() : start())

    video.addEventListener('play', onPlay)
    video.addEventListener('pause', onPause)
    reduce.addEventListener('change', onMotionChange)
    start()
    return () => {
      video.removeEventListener('play', onPlay)
      video.removeEventListener('pause', onPause)
      reduce.removeEventListener('change', onMotionChange)
    }
  }, [showVideo])

  const toggle = () => {
    const video = ref.current
    if (!video) return
    if (video.paused) {
      try { sessionStorage.removeItem(STORAGE_KEY) } catch {}
      video.muted = true
      video.play().catch(() => {})
    } else {
      try { sessionStorage.setItem(STORAGE_KEY, '1') } catch {}
      video.pause()
    }
  }

  const label = playing ? 'Pause background video' : 'Play background video'

  const still = mobileStill ? (
    <Image
      src={mobileStill.src}
      alt={mobileStill.alt}
      fill
      priority
      sizes="100vw"
      className={`object-cover md:hidden ${mobileStill.className ?? ''}`}
      style={{ objectPosition: mobileStill.position }}
    />
  ) : null

  // Wider screens: the poster is in the server HTML as a real image, so it paints (and counts as LCP)
  // before any JS runs; the video mounts on top of it after hydration.
  // Server-rendered desktop poster: a plain <img> with the same srcset next/image would build, plus a preload
  // that only fires at 768px and up, so desktop paints it early and phones never download it.
  let desktopPoster = null
  if (mobileStill && poster) {
    const { props: img } = getImageProps({ src: poster, alt: '', fill: true, sizes: '(min-width: 1024px) 55vw, 100vw' })
    desktopPoster = (
      <>
        <link rel="preload" as="image" {...{ imagesrcset: img.srcSet, imagesizes: img.sizes, media: '(min-width: 768px)', fetchpriority: 'high' }} />
        <img {...img} alt="" aria-hidden="true"className="object-cover hidden md:block" />
      </>
    )
  }

  if (!showVideo) return <>{still}{desktopPoster}</>

  return (
    <>
      {still}
      {desktopPoster}
      <video
        ref={ref}
        muted
        loop
        playsInline
        preload="metadata"
        // when the server-rendered poster <img> is underneath, the video needs no poster of its own (a second,
        // later-painting copy would become the LCP element)
        poster={desktopPoster ? undefined : poster}
        aria-hidden="true"
        tabIndex={-1}
        className={fill ? `absolute inset-0 w-full h-full ${className}` : className}
      >
        <source src={src} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggle}
        aria-label={label}
        title={label}
        className={`absolute z-30 ${buttonClassName} inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-black/65 text-white shadow-lg backdrop-saturate-150 transition-colors hover:bg-black/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
      >
        {playing ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" /></svg>
        )}
      </button>
    </>
  )
}
