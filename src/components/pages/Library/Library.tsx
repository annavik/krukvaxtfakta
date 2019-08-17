import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ApiState } from '../../../types/common'
import { Color } from '../../../types/library'
import { LibraryContext } from '../../LibraryContext'
import { Header } from '../../ui-kit/Header'
import { Message } from '../../ui-kit/Message'
import { Heading1 } from '../../ui-kit/Heading1'
import { Paragraph } from '../../ui-kit/Paragraph'
import { SolidButton } from '../../ui-kit/SolidButton'
import { TextInput } from '../../ui-kit/TextInput'
import { Dropdown } from '../../ui-kit/Dropdown'
import PlantList from './PlantList'

const Content = styled.div`
    text-align: center;
`

const SearchContainer = styled.div`
    display: flex;
    margin-bottom: 64px;
`

const Column = styled.div`
    flex: 1;

    :first-child {
        margin-right: 16px;
    }

    :last-child {
        margin-left: 16px;
    }
`

const ContributeLink = styled(Link)`
    display: block;
    margin: 32px 0;
`

const noFilter = 'no-filter'

const Library = () => {
    const { library, apiState } = useContext(LibraryContext)

    const [searchValue, setSearchValue] = useState<string>()
    const [colorFilter, setColorFilter] = useState<string>()

    useEffect(() => {}, [colorFilter])

    const renderContent = () => {
        if (apiState === ApiState.Active) {
            return <Message title="Laddar..." />
        } else if (apiState === ApiState.Error) {
            return <Message title="Kunde inte hämta sorter." />
        }

        return (
            <>
                <SearchContainer>
                    <Column>
                        <TextInput
                            placeholder="Sök"
                            value={searchValue}
                            onChange={setSearchValue}
                        />
                    </Column>
                    <Column>
                        <Dropdown
                            options={[
                                { title: 'Alla färger', value: noFilter },
                                { title: 'Lila', value: Color.Purple },
                                { title: 'Rosa', value: Color.Pink },
                                { title: 'Röda', value: Color.Red },
                                { title: 'Orange', value: Color.Orange },
                                { title: 'Gula', value: Color.Yellow },
                                { title: 'Gröna', value: Color.Green },
                                { title: 'Svarta', value: Color.Black },
                                { title: 'Multicolor', value: Color.Multi },
                            ]}
                            selectedValue={colorFilter}
                            onSelect={setColorFilter}
                        />
                    </Column>
                </SearchContainer>
                <PlantList
                    plants={library}
                    searchValue={searchValue}
                    colorFilter={
                        colorFilter !== noFilter
                            ? (colorFilter as Color)
                            : undefined
                    }
                />
            </>
        )
    }

    return (
        <>
            <Header>
                <Heading1>Sorter</Heading1>
                <Paragraph>
                    Det här är ett bibliotek där vi tillsammans listar olika
                    krukväxter och samlar skötselråd och fakta. Saknas du någon
                    sort, vet du mer om en befintlig eller ser något som inte
                    stämmer? Bidra gärna med dina kunskaper!
                </Paragraph>
                <ContributeLink to="/bidra">
                    <SolidButton title="Bidra" />
                </ContributeLink>
            </Header>
            <Content>{renderContent()}</Content>
        </>
    )
}

export default Library
