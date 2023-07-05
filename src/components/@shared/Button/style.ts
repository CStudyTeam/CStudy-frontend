import styled from 'styled-components';

import { ButtonProps } from '.';
import { ButtonLinkSharedStyles } from '../ButtonLinkSharedStyles';

export const Button = styled.button<ButtonProps>`
    ${ButtonLinkSharedStyles}
`;
