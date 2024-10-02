import { useEffect, useRef } from "react";

interface Props {
    id: string,
    /**
     * callback executed when a element is in view
     */
    callback: (isInView: boolean) => void,
    /**
     * defines the start region (offset) from the top of the screen
     * the top and bottom offsets are used to calculate the region in which 
     * the element must intersect
     * @default 0
     */
    top?: number,
    /**
     * defines the end region (offset) from the top of the screen
     * the top and bottom offsets are used to calculate the region in which 
     * the element must intersect
     * @default -680
    */
    bottom?: number
}

export default function useIntersectionObserver(props: Props) {

    const { id, callback, top = 0, bottom = -680 } = props

    const elementRef = useRef<HTMLElement>(null!)

    useEffect(() => {
        elementRef.current = document.getElementById(id)!

        if (elementRef.current) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        callback(entry.isIntersecting)
                    });
                },
                {
                    rootMargin: `${top}px 0px ${bottom}px 0px`,
                    threshold: 0
                }
            );

            if (elementRef.current) {
                observer.observe(elementRef.current);
            }

            return () => observer.disconnect();
        }
    }, []);
};