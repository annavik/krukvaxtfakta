import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ApiState } from '../../../types/common'
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

const Library = () => {
    const { library, apiState } = useContext(LibraryContext)

    const [searchValue, setSearchValue] = useState<string>()
    const [groupValue, setGroupValue] = useState<string>()

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
                                { title: 'Alla färger', value: 'all' },
                                { title: 'Lila', value: 'purpule' },
                                { title: 'Rosa', value: 'pink' },
                                { title: 'Röda', value: 'red' },
                                { title: 'Orange', value: 'orange' },
                                { title: 'Gula', value: 'yellow' },
                                { title: 'Gröna', value: 'green' },
                                { title: 'Gröna', value: 'green' },
                                { title: 'Multicolor', value: 'multi' },
                            ]}
                            selectedValue={groupValue}
                            onSelect={setGroupValue}
                        />
                    </Column>
                </SearchContainer>
                <PlantList plants={library} searchValue={searchValue} />
            </>
        )
    }

    return (
        <>
            <Header>
                <Heading1>Sorter</Heading1>
                <Paragraph>
                    Något av det bästa med palettblad är att det finns så många
                    olika sorter. Det här är ett bibliotek där vi tillsammans
                    försöker kartlägga de namngivna varianterna som finns.
                    Saknas någon sort, vet du mer om någon befintlig eller ser
                    något som inte stämmer? Bidra gärna med dina kunskaper!
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
