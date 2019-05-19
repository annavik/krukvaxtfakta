import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../utils/colors'
import { Heading2 } from '../../ui-kit/Heading2'
import { Label } from '../../ui-kit/Label'

const GroupsTitle = styled(Heading2)`
    margin: 0 0 32px;
`

const GroupLabel = styled(Label)`
    display: inline-block;
    background: ${colors.lightGray};
    border-radius: 4px;
    padding: 8px 16px;
    margin: 0 16px 0 0;
`

const PlantGroups = () => (
    <>
        <GroupsTitle>Tillhör grupperna:</GroupsTitle>
        <GroupLabel>Lorem ipsum</GroupLabel>
        <GroupLabel>Lorem ipsum</GroupLabel>
        <GroupLabel>Lorem ipsum</GroupLabel>
    </>
)

export default PlantGroups
