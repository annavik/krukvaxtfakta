import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ApiState } from '../../../types/common'
import { Group } from '../../../types/library'
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

    @media (max-width: 800px) {
        margin-bottom: 32px;
        flex-direction: column;
    }
`

const Column = styled.div`
    flex: 1;

    :first-child {
        margin: 0 16px 0 0;
    }

    :last-child {
        margin: 0 16px 0 0;
    }

    @media (max-width: 800px) {
        margin: 0;

        :first-child {
            margin: 0 0 16px;
        }

        :last-child {
            margin: 0;
        }
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
    const [groupFilter, setGroupFilter] = useState<string>()

    useEffect(() => {}, [groupFilter])

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
                                { title: 'Alla grupper', value: noFilter },
                                {
                                    title: 'Blommande växter',
                                    value: Group.Group1,
                                },
                                { title: 'Gröna växter', value: Group.Group2 },
                                { title: 'Suckulenter', value: Group.Group3 },
                            ]}
                            selectedValue={groupFilter}
                            onSelect={setGroupFilter}
                        />
                    </Column>
                </SearchContainer>
                <PlantList
                    plants={library}
                    searchValue={searchValue}
                    groupFilter={
                        groupFilter !== noFilter
                            ? (groupFilter as Group)
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
