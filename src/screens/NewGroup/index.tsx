import { Container, Content, Icon } from './styles'

import { Header } from '@components/Header'
import { HighLight } from '@components/HighLight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'

export function NewGroup() {
    return (
        <Container>
            <Header showBackButton />
            <Content>
                <Icon />
                <HighLight
                    title="Nova Turma"
                    subtitle="Crie a turma para adicionar as pessoas"
                />

                <Input
                    placeholder="Nome da turma"
                />

                <Button
                    title="Criar"
                    style={{ marginTop: 20 }}
                />
            </Content>
        </Container>
    )
}