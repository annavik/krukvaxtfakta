import styled from 'styled-components'
import { colors } from '../../../utils/colors'
import { Label } from '../../ui-kit/Label'

export const GroupLabel = styled(Label)`
    display: inline-block;
    background: ${colors.lightGray};
    border-radius: 4px;
    padding: 8px 16px;
    margin: 0 16px 0 0;
`
