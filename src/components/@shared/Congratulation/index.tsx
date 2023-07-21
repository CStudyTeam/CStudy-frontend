import { useRef, useEffect } from 'react';
import Confettiful from 'provider/Confettiful';
import * as Styled from './style';

const Congratulation = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            new Confettiful(containerRef.current);
        }
    }, []);

    return <Styled.ConfettiWrapper ref={containerRef} />;
};

export default Congratulation;
