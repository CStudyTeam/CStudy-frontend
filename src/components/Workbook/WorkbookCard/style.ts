import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { SHADOW } from 'constants/Shadow';
import CardDefault_Png from 'assets/card/card-default.png';
import CardDefault_Webp from 'assets/card/card-default.webp';
import Java_Png from 'assets/card/java.png';
import Java_Webp from 'assets/card/java.webp';
import Network_Png from 'assets/card/network.png';
import Network_Webp from 'assets/card/network.webp';
import OperatingSystem_Png from 'assets/card/operating_system.png';
import OperatingSystem_Webp from 'assets/card/operating_system.webp';
import Database_Png from 'assets/card/database.png';
import Database_Webp from 'assets/card/database.webp';

export const WorkBookCard = styled.article`
    width: 24rem;
    height: 35.2rem;
    padding: 2rem;
    background-color: ${COLOR.WHITE};
    border: 0.1rem solid ${COLOR.WHITE};
    border-radius: 1.6rem;
    box-shadow: ${SHADOW.CONTENTBOX_LG};
`;

export const Title = styled.div`
    ${FONT.H1}
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Time = styled.div`
    font-size: ${FONT.REGULAR_12};
    color: #949494;
`;

const getBackgroundImage = (webpImage: string, pngImage: string) => {
    return `-webkit-image-set(url(${webpImage}) 1x), -webkit-image-set(url(${pngImage}) 1x),
    image-set(url(${webpImage}) 1x), image-set(url(${pngImage}) 1x)`;
};

export const Img = styled.div<{ category?: string }>`
    height: 18.1rem;
    margin: 1rem -2rem 0;
    background-image: ${({ category }) => {
        switch (category) {
            case '자바':
                return `${getBackgroundImage(Java_Webp, Java_Png)}`;
            case '네트워크':
                return `${getBackgroundImage(Network_Webp, Network_Png)}`;
            case '운영체제':
                return `${getBackgroundImage(OperatingSystem_Webp, OperatingSystem_Png)}`;
            case '데이터베이스':
                return `${getBackgroundImage(Database_Webp, Database_Png)}`;
            default:
                return `${getBackgroundImage(CardDefault_Webp, CardDefault_Png)}`;
        }
    }};
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Description = styled.div`
    display: -webkit-box;
    margin-top: 2rem;
    font-size: ${FONT.REGULAR_14};
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-break: break-all;
    overflow: hidden;
`;
