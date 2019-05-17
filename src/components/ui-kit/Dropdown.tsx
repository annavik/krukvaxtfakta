import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/colors'

const Container = styled.div`
    position: relative;
    height: 44px;
    z-index: 1;
`

const Select = styled.div`
    width: 100%,
    position: absolute;
    background-color: ${colors.bg};
    border: 1px solid ${colors.gray};
    border-radius: 4px;
`

const OptionBase = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 44px;
    padding: 0 16px;
    border-top: 1px ${colors.gray} solid;
    font-family: 'EB Garamond', serif;
    font-size: 21px;
    line-height: 120%;
    font-weight: 400;
    user-select: none;

    :hover {
        cursor: pointer;
    }
`

const Option = styled(OptionBase)`
    :hover {
        background-color: ${colors.lightGray};
    }
`

const SelectedOption = styled(OptionBase)`
    border-top: none;
`

const Arrow = styled.span`
    ${(props: { isOpen: boolean }) =>
        props.isOpen && 'transform: rotate(-90deg);'}
    transition: transform 0.2s ease-in-out;
`

interface Props {
    options: {
        title: string
        value: string
    }[]
    selectedValue?: string
    onSelect: (value: string) => void
}

const Dropdown = ({ options, selectedValue, onSelect }: Props) => {
    const componentRef = useRef<HTMLDivElement>(null)

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const onMousedown = (e: MouseEvent) => {
            if (
                isOpen &&
                componentRef.current &&
                !componentRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', onMousedown)

        return () => {
            document.removeEventListener('mousedown', onMousedown)
        }
    }, [isOpen])

    if (options.length === 0) {
        return null
    }

    const defaultValue = options[0]
    const selectedOption = selectedValue
        ? options.find(option => option.value === selectedValue) || defaultValue
        : defaultValue

    return (
        <Container ref={componentRef}>
            <Select>
                <SelectedOption onClick={() => setIsOpen(!isOpen)}>
                    <span>{selectedOption.title}</span>
                    <Arrow isOpen={isOpen}>▾</Arrow>
                </SelectedOption>
                {isOpen &&
                    options.map(option => (
                        <Option
                            key={`option-${option.value}`}
                            onClick={() => {
                                onSelect(option.value)
                                setIsOpen(false)
                            }}
                        >
                            <span>{option.title}</span>
                        </Option>
                    ))}
            </Select>
        </Container>
    )
}

export default Dropdown
