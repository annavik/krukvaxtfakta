import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ApiState } from '../../../types/common'
import { LibraryContext } from '../../LibraryContext'
import { Header } from '../../ui-kit/Header'
import { Heading1 } from '../../ui-kit/Heading1'
import { Heading3 } from '../../ui-kit/Heading3'
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
            return <Heading3>Laddar...</Heading3>
        } else if (apiState === ApiState.Error) {
            return <Heading3>Kunde inte hämta sorter.</Heading3>
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
                    Det här är ett bibliotek för olika sorters palettblad där
                    alla kan hjälpa till och bidra. Saknas någon sort, vet du
                    mer om någon befintlig eller ser något som inte stämmer?
                    Dela gärna med dig, alla bidrag är uppskattade!
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
