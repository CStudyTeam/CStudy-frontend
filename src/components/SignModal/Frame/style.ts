import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    border: 0.1rem solid;
    border-radius: 3.2rem;
    display: flex;
    flex-direction: column;
    height: 57rem;
    justify-content: center;
    left: 50%;
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60.5rem;
`;

export const XButton = styled.span`
    font-size: 2.5rem;
    position: absolute;
    right: 25px;
    top: 25px;
`;

export const Title = styled.div`
    margin-bottom: 0.6rem;
    text-align: center;
`;

export const Hr = styled.div`
    &::before,
    &::after {
        background: black;
        content: '';
        flex-grow: 1;
        font-size: 0px;
        height: 1px;
        line-height: 0px;
        margin: 0 3rem;
    }
    align-items: center;
    display: flex;
    margin: 4.7rem -6rem 0;
`;

export const SocialLogin = styled.div`
    margin: 3rem auto 0;
`;

export const GoogleLogo = styled.img`
    border: 0.1rem solid;
    border-radius: 50%;
    height: 7rem;
    padding: 1rem;
    width: 7rem;
`;
