import { useRef, useEffect } from 'react';
import useCongratulation from 'hooks/@zustand/useCongratulation';
import Confettiful from 'provider/Confettiful';
import * as Styled from './style';

const Congratulation = () => {
    const root = document.getElementById('congratulation-root');
    const containerRef = useRef<HTMLDivElement>(null);
    const { isCongratulation, setCongratulation } = useCongratulation();

    const bgGroupRef = useRef<SVGGElement>(null);
    const mainGroupRef = useRef<SVGGElement>(null);

    useEffect(() => {
        const setup = (groupRef: React.RefObject<SVGGElement>) => {
            const paths = groupRef.current?.querySelectorAll('path');
            paths?.forEach((path, index) => {
                const length = path.getTotalLength();
                path.style.setProperty('--length', length.toString());
                path.style.setProperty('--delay', index * 50 + 'ms');
                path.style.setProperty('--duration', length * 3 + 'ms');
            });
        };

        setup(bgGroupRef);
        setup(mainGroupRef);

        if (containerRef.current) {
            new Confettiful(containerRef.current);
        }

        if (isCongratulation) {
            setTimeout(() => {
                setCongratulation(false);
            }, 3500);
        }
    }, [isCongratulation, setCongratulation]);

    return (
        <>
            {isCongratulation && root && (
                <Styled.ConfettiWrapper ref={containerRef}>
                    <Styled.ContestFinishSvgWrapper xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1135.56 276.33">
                        <defs>
                            <clipPath id="01">
                                <path
                                    d="M12.3,67H215q-12.12,16-17.29,25.2t-13.18,29.49L183,125.63q-12.9-26.56-25.49-34.38T115,83.44l-11.13.2-19-.2-7.23-.19v91.4H89.65V94l5.66-.2q12.1-.58,25.78-.58,39.85,0,49.81,20.7a49.89,49.89,0,0,0-20.8-12.4q-11.23-3.23-34.67-3.23-8.4,0-20.9,1v75.39H124l31.25-33v81.84l-32.81-32.42H77.73V289.5l25,25.39H6.84L38.67,289.5v-84q-15,0-26.37,11.33l-3.71-4.1q11.33-12.5,30.08-12.5v-9.18c-2.73-.26-4.69-.39-5.86-.39q-18.17,0-31.44,14.84L0,202.39Q8.79,177,38.67,174.65V92.23ZM134.57,207.46h-40v83.6l34.38,42.58H15.82l-4.88-5.28H118l-28.32-35V202.19h39.26Zm35-59v84.37l-5.08-2.92V145.55ZM229.88,79Q202,111.58,194.73,138.71l-4.1-2.73q7.41-30.66,35.74-60.35Z"
                                    transform="translate(0.54 -62.24)"
                                />
                            </clipPath>
                            <clipPath id="02">
                                <path
                                    d="M228.52,67h92.57L294.92,93.6V296.92l24.61,20.7h-91l27.14-22.46V91.45ZM329.88,78.17,310,97.89v199l32.81,36.72H241.21l-4.88-5.28h94.92l-26.76-29.49V96.14l22.07-21.88Z"
                                    transform="translate(0.54 -62.24)"
                                />
                            </clipPath>
                            <clipPath id="03">
                                <path
                                    d="M573.63,67q-22.26,11.53-28.71,21.1-9.76,14.85-9.76,44.72V317.62h-33L410,138.71V244.77l-.19,8.79,2.34,28.12q3.9,19.54,17.77,28.91l1.57,1.37q-27-9-27-57.62l.2-18.36V129.14l-10.55-20.5v112.5q0,53.51,7,70.11t33,24.22l17,18.17H345.31l-3.12-5.28H440l-10.16-10.74h-91q23.82-8.6,31.64-23.05T378.32,245V88.71L352.34,67h98.83L423.44,85.59,518,270V246.53L436.91,88.71l27.35-18.55L468,73.87,443.75,90.28,518,236V134.42q0-34-5.57-45.41T485,67Zm6.84,14.46L577,87.35q-15,3.51-20.41,13t-5.37,31.93V333.64h-42l-2.54-5.28H545.9V134.22q0-27.54,7.13-38.38T580.47,81.49Z"
                                    transform="translate(0.54 -62.24)"
                                />
                            </clipPath>
                            <clipPath id="04">
                                <path
                                    d="M591,67h92.57L657.42,93.6V296.92L682,317.62H591l27.14-22.46V91.45ZM692.38,78.17,672.46,97.89v199l32.81,36.72H603.71l-4.88-5.28h94.92L667,298.87V96.14l22.07-21.88Z"
                                    transform="translate(0.54 -62.24)"
                                />
                            </clipPath>
                            <clipPath id="05">
                                <path
                                    d="M896.68,69.18A130.33,130.33,0,0,0,880.47,97.7q-11.91,29.3-15.82,35.94l-1,1.17c-.52-1.43-.91-2.54-1.17-3.32q-5.47-17.58-9-24.42A46,46,0,0,0,843,94Q825.2,78.16,802.54,78.17q-20.91,0-34.77,11.62T753.91,119q0,32.81,49.41,44.72l33,8q70.5,17,70.51,74.42,0,32-24.13,53.8t-59.66,21.78q-22.27,0-49.81-6.83l-22.85-5.67q-13.87-3.32-22.85-3.32-11.91,0-24.61,7.62l-1.56-2.74q24.21-36.51,34-69.53l3.52,1q4.1,30.66,24.61,47.66t53.71,17q26.16,0,41.6-12.11t15.43-32.62q0-23.62-21.49-39.06-15.42-10.93-63.28-20.31-36.91-7.23-53.51-24t-16.6-46.68q0-30.85,22.16-50.09t57.72-19.24q22.85,0,53.32,8.2,14.25,3.91,21.09,3.91,9.57,0,20.9-6.64Zm0,124.61q26.57,20.13,26.56,55.08,0,37.31-28.9,63.18T824,337.93a155.76,155.76,0,0,1-38.08-4.29L754.69,326a96.62,96.62,0,0,0-23.44-2.74,46.78,46.78,0,0,0-20.51,4.5l-2.34-5.67a49,49,0,0,1,20.7-4.68,119.33,119.33,0,0,1,26.76,3.51l30.08,7.23a162.71,162.71,0,0,0,37.89,4.29q39.06,0,66.5-24.9t27.44-60.25q0-29.88-21.09-52.35Zm-163.48-7,6.64,3.71q6.45,11.53,37.7,19.14L809,217.43q32,8,42.68,13.76a32.37,32.37,0,0,1,15.14,17.49l-1.37.78a56.6,56.6,0,0,0-19-14.85q-10.26-4.68-39.36-11.52-42.18-9.76-56.64-16.9T733.2,186.76ZM757.62,250q7.21,35.16,38.67,49.81v1.56Q760,290.87,752.34,251Zm94.14-133.79q-21.5-22.84-46.1-22.85-14.83,0-24.61,8.6a27.85,27.85,0,0,0-9.76,21.87q0,14.46,19.73,29.69l1.56,1-1,1.57q-25.79-11.52-25.78-33.4,0-15.24,10.94-24.81t28.51-9.57q16.8,0,29.4,7.13a43,43,0,0,1,18.46,20Zm57-38.86L907,80.32a276.37,276.37,0,0,0-13.67,25.78q-13.68,28.71-15.43,32l-1,1.37-4.68-2,.78-1.76q5.66-12.89,16.4-33.59l13.28-25.78,1-1.56Z"
                                    transform="translate(0.54 -62.24)"
                                />
                            </clipPath>
                            <clipPath id="06">
                                <path
                                    d="M939.84,67h91.8l-26.56,26v84.38c1.55.25,3.18.49,4.88.68s3.65.36,5.67.49V95l21.28-21.09,3.91,3.52L1020.7,97.31v81.44l6.45.59q15,1.36,29.1,1.37a267.55,267.55,0,0,0,35-2V88.91L1067.38,67h90.24l-27,26V296.53l23.64,21.09h-89.85l26.76-22.85V212a145.62,145.62,0,0,1-33.79,3.9,339.19,339.19,0,0,1-34-1.76l-2.74-.19v82.62l32.23,37.11H952l-5.07-5.28h95.31l-26.56-29.1V209.42l5.66.39q25.79,2,37.3,1.95,18.75,0,32.62-5.08v-7a292.83,292.83,0,0,1-42.77,2.74q-13.1,0-19.14-.59l-17.6-1.57-2.13-.19c-.55-.07-1.12-.14-1.71-.19-.75-.07-1.68-.13-2.78-.2v96.88l25,21.09H939.84L966,294.77V209.42q-16.41,0-26.18,12.89l-4.1-2Q947.07,206.1,966,204.53v-7.22q-21.88,0-34.57,16.6L928.52,212Q940,183.84,966,178.75V90.86Zm226,10.94L1145.9,97.31V296.53l32.42,37.11H1077l-4.88-5.28h95.12L1141,298.87V95.35l21.68-21.48Z"
                                    transform="translate(0.54 -62.24)"
                                />
                            </clipPath>
                        </defs>
                        <Styled.BgGroup className="svg-bg" ref={bgGroupRef}>
                            <path
                                clipPath="url(#01)"
                                d="M183.48,88.26A287.84,287.84,0,0,0,54.48,75V311"
                                transform="translate(-6.92 -55)"
                            />
                            <path clipPath="url(#01)" d="M24.48,309h64" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#01)" d="M10.48,194s90-22,135-7" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#01)" d="M145,160.5q.5,22.5,1,45" transform="translate(-6.92 -55)" />
                            <path
                                clipPath="url(#01)"
                                d="M203,73.5c-1.7.31-13.58,2.67-20,14a29,29,0,0,0-3,20"
                                transform="translate(-6.92 -55)"
                            />
                            <path clipPath="url(#02)" d="M245,72.5h59" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#02)" d="M275.48,80q-.5,113-1,226" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#02)" d="M243.48,310h61" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#03)" d="M361.48,71l74,1" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#03)" d="M385.48,74l3,235" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#03)" d="M353.48,314l67-1" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#03)" d="M390.48,77l138,230" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#03)" d="M528.48,314q-1-122-2-244" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#03)" d="M494.48,70h70" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#04)" d="M609.48,72.5h59" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#04)" d="M637.48,77q.49,115.5,1,231" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#04)" d="M603.48,312h66" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#05)" d="M892.48,71l-27,50" transform="translate(-6.92 -55)" />
                            <path
                                clipPath="url(#05)"
                                d="M880,97.5c-28.06-25.44-66.38-33.33-98-20-3.1,1.31-43,16.64-45,45-2.2,31.35,43.5,55.14,49,58,40.13,20.89,63,3.95,85,25,17.72,17,26,50.22,12,76-11.62,21.33-34.29,28.36-43,31-53.57,16.27-104-24.18-111-30l-3.5-4"
                                transform="translate(-6.92 -55)"
                            />
                            <path clipPath="url(#05)" d="M736.48,247l-26,59" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#06)" d="M951.48,74h65" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#06)" d="M983.48,78l3,230" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#06)" d="M952.48,312h68" transform="translate(-6.92 -55)" />
                            <path
                                clipPath="url(#06)"
                                d="M931,210.5c14.66-11.07,39.6-25.77,70-24,4,.24,6.82.68,9,1,19.41,2.88,50.19,5.08,100,2"
                                transform="translate(-6.92 -55)"
                            />
                            <path clipPath="url(#06)" d="M1078.48,73h63" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#06)" d="M1111.48,76V308" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#06)" d="M1077.48,312h65" transform="translate(-6.92 -55)" />
                        </Styled.BgGroup>
                        <Styled.MainGroup className="svg-main" ref={mainGroupRef}>
                            <path
                                clipPath="url(#01)"
                                d="M183.48,88.26A287.84,287.84,0,0,0,54.48,75V311"
                                transform="translate(-6.92 -55)"
                            />
                            <path clipPath="url(#01)" d="M24.48,309h64" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#01)" d="M10.48,194s90-22,135-7" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#01)" d="M145,160.5q.5,22.5,1,45" transform="translate(-6.92 -55)" />
                            <path
                                clipPath="url(#01)"
                                d="M203,73.5c-1.7.31-13.58,2.67-20,14a29,29,0,0,0-3,20"
                                transform="translate(-6.92 -55)"
                            />
                            <path clipPath="url(#02)" d="M245,72.5h59" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#02)" d="M275.48,80q-.5,113-1,226" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#02)" d="M243.48,310h61" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#03)" d="M361.48,71l74,1" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#03)" d="M385.48,74l3,235" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#03)" d="M353.48,314l67-1" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#03)" d="M390.48,77l138,230" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#03)" d="M528.48,314q-1-122-2-244" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#03)" d="M494.48,70h70" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#04)" d="M609.48,72.5h59" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#04)" d="M637.48,77q.49,115.5,1,231" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#04)" d="M603.48,312h66" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#05)" d="M892.48,71l-27,50" transform="translate(-6.92 -55)" />
                            <path
                                clipPath="url(#05)"
                                d="M880,97.5c-28.06-25.44-66.38-33.33-98-20-3.1,1.31-43,16.64-45,45-2.2,31.35,43.5,55.14,49,58,40.13,20.89,63,3.95,85,25,17.72,17,26,50.22,12,76-11.62,21.33-34.29,28.36-43,31-53.57,16.27-104-24.18-111-30l-3.5-4"
                                transform="translate(-6.92 -55)"
                            />
                            <path clipPath="url(#05)" d="M736.48,247l-26,59" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#06)" d="M951.48,74h65" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#06)" d="M983.48,78l3,230" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#06)" d="M952.48,312h68" transform="translate(-6.92 -55)" />
                            <path
                                clipPath="url(#06)"
                                d="M931,210.5c14.66-11.07,39.6-25.77,70-24,4,.24,6.82.68,9,1,19.41,2.88,50.19,5.08,100,2"
                                transform="translate(-6.92 -55)"
                            />
                            <path clipPath="url(#06)" d="M1078.48,73h63" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#06)" d="M1111.48,76V308" transform="translate(-6.92 -55)" />
                            <path clipPath="url(#06)" d="M1077.48,312h65" transform="translate(-6.92 -55)" />
                        </Styled.MainGroup>
                    </Styled.ContestFinishSvgWrapper>
                </Styled.ConfettiWrapper>
            )}
        </>
    );
};

export default Congratulation;
