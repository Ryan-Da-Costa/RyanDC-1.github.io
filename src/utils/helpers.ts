interface ElementScrollProps {
    id: string,
    delay?: number
    behavior?: ScrollBehavior,
    /**
     * @default window
     */
    scrollContainer?: HTMLElement,
    padding?: number,
    /**
     * @default top
     */
    position?: 'top' | 'bottom'
}

export function scrollToElement(props: ElementScrollProps) {
    const { id, behavior = 'smooth', delay, scrollContainer = window, padding = 0, position = 'top' } = props

    const element = document.getElementById(id)

    if(!element)
    {
        console.error("Invalid Element / Element does not exist")
        return
    }

    const calculatedPosition = {
        top: element.offsetTop - padding,
        bottom: (element.offsetTop + element.offsetHeight) - padding
    }[position]

    setTimeout(() => {
        scrollContainer.scroll({
            top: calculatedPosition,
            behavior: behavior,
        })
    }, delay);
}

export function numberInRange(number: number, start: number, end: number) {
    return start <= number && number <= end
}

export function isAbsoluteURL(url: string) {
    return url.startsWith('https://') || url.startsWith('http://')
}