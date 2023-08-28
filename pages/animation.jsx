
import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedElement = ({ children, animationClass }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5, // Change this value as needed
    });

    const animatedClassName = inView ? `${animationClass} in-view-${animationClass}` : animationClass;

    return <div ref={ref} className={animatedClassName}>{children}</div>;
};

export default AnimatedElement;
