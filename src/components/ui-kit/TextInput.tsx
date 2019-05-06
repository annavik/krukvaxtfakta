import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/colors'

const Input = styled.input`
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 44px;
    background: ${colors.bg};
    border: 1px ${colors.gray} solid;
    border-radius: 4px;
    padding: 0 16px;
    margin: 0;
    font-family: 'EB Garamond', serif;
    font-size: 21px;
    line-height: 120%;
    font-weight: 400;

    ::placeholder {
        color: ${colors.fg};
        opacity: 1;
    }
`

interface Props {
    placeholder?: string
    value?: string
    onChange: (value: string) => void
}

export const TextInput = ({ placeholder, value, onChange }: Props) => {
    return (
        <Input
            placeholder={placeholder}
            type="text"
            value={value || ''}
            onChange={event => {
                onChange(event.currentTarget.value)
            }}
        />
    )
}
