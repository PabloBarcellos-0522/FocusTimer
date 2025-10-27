import Lenis from "lenis"

export let lenis = null
let rafId = null

function raf(time) {
    if (!lenis) return
    lenis.raf(time)
    rafId = requestAnimationFrame(raf)
}

export function initLenis() {
    if (lenis) return
    lenis = new Lenis({ lerp: 0.07 })
    rafId = requestAnimationFrame(raf)
}

export function destroyLenis() {
    if (!lenis) return
    cancelAnimationFrame(rafId)
    lenis.destroy()
    lenis = null
}

// Initial initialization
initLenis()
