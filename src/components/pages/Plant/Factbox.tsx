import React from 'react'
import styled from 'styled-components'
import { PlantData } from '../../../types/library'
import { colors } from '../../../utils/colors'
import { Label } from '../../ui-kit/Label'

const Container = styled.div`
    display: inline-flex;
    max-width: 100%;
    padding: 32px;
    background: ${colors.lightGray};
    border-radius: 4px;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    flex-shrink: 0;
    overflow: hidden;
    margin-right: 8px;

    :last-child {
        margin-right: 0;
        align-items: flex-start;
        flex-shrink: 1;
    }
`

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    margin-bottom: 16px;

    :last-child {
        margin-bottom: 0;
    }
`

const Title = styled(Label)`
    display: block;
    line-height: 24px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0;
`

const Text = styled(Title)`
    font-weight: 400;
`

const Icon = styled.img`
    display: block;
    vertical-align: middle;
    width: 24px;
    height: 24px;
    margin-right: 4px;
    opacity: ${(props: { disabled?: boolean }) => (props.disabled ? 0.2 : 1)};

    :last-child {
        margin-right: 0;
    }
`

interface Props {
    data: PlantData
}

const Factbox = ({ data }: Props) => (
    <Container>
        <Column>
            <Row>
                <Title>Namn:</Title>
            </Row>
            <Row>
                <Title>Botaniskt namn:</Title>
            </Row>
            <Row>
                <Title>Svårighetsgrad:</Title>
            </Row>
            <Row>
                <Title>Vattning:</Title>
            </Row>
            <Row>
                <Title>Ljus:</Title>
            </Row>
        </Column>
        <Column>
            <Row>
                <Text>{data.title}</Text>
            </Row>
            <Row>
                <Text>Lorem ipsum dolor sit amet</Text>
            </Row>
            <Row>
                <Text>Enkel</Text>
            </Row>
            <Row>
                <Icon src="/assets/icons/water.png" />
                <Icon src="/assets/icons/water.png" disabled />
                <Icon src="/assets/icons/water.png" disabled />
            </Row>
            <Row>
                <Icon src="/assets/icons/sun.png" />
                <Icon src="/assets/icons/sun.png" />
                <Icon src="/assets/icons/sun.png" disabled />
            </Row>
        </Column>
    </Container>
)

export default Factbox
