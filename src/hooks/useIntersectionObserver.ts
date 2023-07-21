import { useEffect } from 'react';

interface useIntersectionObserverProps {
    targetRef: React.RefObject<Element>;
    handleOutOfView: () => void;
    handleInView: () => void;
    options?: IntersectionObserverInit;
}

const useIntersectionObserver = ({
    targetRef,
    handleOutOfView,
    handleInView,
    options,
}: useIntersectionObserverProps) => {
    useEffect(() => {
        const target = targetRef.current;
        if (target === null) {
            console.error('타겟 레퍼런스가 제공되지 않았습니다.');
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (!entry.isIntersecting) {
                handleOutOfView();
            }
            if (entry.isIntersecting) {
                handleInView();
            }
        }, options);

        observer.observe(target);

        return () => {
            observer.unobserve(target);
        };
    }, [targetRef, handleOutOfView, handleInView, options]);
};

export default useIntersectionObserver;
