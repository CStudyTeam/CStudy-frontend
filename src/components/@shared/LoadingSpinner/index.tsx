import * as Styled from './style';

const LoadingSpinner = () => {
    return (
        <Styled.LoadingSpinner>
            <Styled.Spinner>
                <Styled.DoubleBounce1></Styled.DoubleBounce1>
                <Styled.DoubleBounce2></Styled.DoubleBounce2>
            </Styled.Spinner>
        </Styled.LoadingSpinner>
    );
};

export default LoadingSpinner;
