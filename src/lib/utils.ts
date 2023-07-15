import { AppRouterInstance } from "next/dist/shared/lib/app-router-context"

const SOUND_PREF = "mt"

export function setStorageMute(mute: boolean): void {
    localStorage.setItem(SOUND_PREF, mute ? 'true' : 'false')
}

export function getStorageMute(): boolean {
    return localStorage.getItem(SOUND_PREF) === 'true' ? true : false
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
    if(!getStorageMute() && navigator.userActivation.hasBeenActive) select.play(); 
}