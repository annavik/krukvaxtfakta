import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { ApiState } from '../../../types/common'
import { LibraryContext } from '../../LibraryContext'
import { Header } from '../../ui-kit/Header'
import { Heading1 } from '../../ui-kit/Heading1'
import { Heading3 } from '../../ui-kit/Heading3'
import { Paragraph } from '../../ui-kit/Paragraph'
import { TextInput } from '../../ui-kit/TextInput'
import Dropdown from '../../ui-kit/Dropdown'
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
                                { title: 'Alla sorter', value: 'all' },
                                { title: 'Main Street', value: 'main-street' },
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </Paragraph>
            </Header>
            <Content>{renderContent()}</Content>
        </>
    )
}

export default Library
