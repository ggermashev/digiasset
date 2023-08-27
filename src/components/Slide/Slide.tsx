import React, {FC, useEffect, useMemo, useRef} from 'react';
import {SlideStyled} from "./Slide.styled";
import gsap from "gsap"

interface ISlide {
    children: React.ReactNode,
    id: number,
    bgColor?: string,
    justifyContent?: string
    onVisibleAdd?: () => void,
    ref?: React.MutableRefObject<any>,
}

const Slide: FC<ISlide> = ({
                               children,
                               id,
                               bgColor='rgba(193, 197, 252, 1)',
                               justifyContent,
                               onVisibleAdd,
                               ref}) => {

    const onVisible = useMemo( () => {
        return (intersecting: boolean) => {
            const tl = gsap.timeline()
            if (intersecting) {
                onVisibleAdd?.()
                tl.to(`#slide-${id}`, {
                    opacity: 1,
                    duration: 1.5,
                    backgroundColor: bgColor,
                })
            } else {
                tl.to(`#slide-${id}`, {
                    // left: id % 2 === 0 ? '100vw' : '-100vw',
                    opacity: 0,
                    duration: 1.5,
                }).set(`#slide-${id}`, {
                    position: 'relative',
                    // left: 0,
                    backgroundColor: 'inherit',
                })
            }
        }
    }, [])

    useEffect(() => {
        let options = {
            root: null,
            rootMargin: "0px",
            threshold: .6,
        };

        let observer = new IntersectionObserver(entry => {onVisible(entry[0].isIntersecting)}, options);

        observer.observe(document.querySelector(`#slide-${id}`) as Element)

        return () => {
            observer.disconnect()
        }
    }, [])

    const slideRef = useRef(null)

    return (
        <SlideStyled
            id={`slide-${id}`}
            $justifyContent={justifyContent}
            ref={ref}
        >
            {children}
        </SlideStyled>
    );
};

export default Slide;