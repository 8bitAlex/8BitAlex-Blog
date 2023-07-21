import { AppRouterInstance } from "next/dist/shared/lib/app-router-context"

const SOUND_PREF = "mt"

export function setStorageMute(mute: boolean): void {
    if(typeof window !== undefined) localStorage.setItem(SOUND_PREF, mute ? 'true' : 'false')
}

export function getStorageMute(): boolean {
    if(typeof window !== undefined) {
        return localStorage.getItem(SOUND_PREF) === 'true' ? true : false
    }
    return false
}

export function zoom(url: string, router: AppRouterInstance): void {
    document.body.className = "zoom"
    setTimeout(() => {
        document.body.className = document.body.className.replace("zoom","")
        router.replace(url)
    }, 500)
}

export function playSelectSound() {
    const select = new Audio("/sound/select.mp3")
    if(!getStorageMute() && (navigator as any).userActivation.hasBeenActive) select.play(); 
}