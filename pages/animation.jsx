// import React from 'react';
// import { useInView } from 'react-intersection-observer';

// const AnimatedBT = ({ children }) => {
//     const [ref, inView] = useInView({
//         triggerOnce: true,
//     });
//     return <div ref={ref} className={inView ? 'animated-BT in-view-BT' : 'animated-BT'}>{children}</div>;
// };

// const AnimatedLR = ({ children }) => {
//     const [ref, inView] = useInView({
//         triggerOnce: true,
//     });


//     return <div ref={ref} className={inView ? 'animated-LR in-view-LR' : 'animated-LR'}>{children}</div>;
// };
// const AnimatedRL = ({ children }) => {
//     const [ref, inView] = useInView({
//         triggerOnce: true,
//     });


//     return <div ref={ref} className={inView ? 'animated-RL in-view-RL' : 'animated-RL'}>{children}</div>;
// };

// export { AnimatedBT, AnimatedLR, AnimatedRL };
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
