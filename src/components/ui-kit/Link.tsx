import styled from 'styled-components'
import { colors } from '../../utils/colors'

export const Link = styled.a`
    font-weight: 600;
    color: ${colors.primary};

    :hover {
        opacity: 0.7;
    }
`
