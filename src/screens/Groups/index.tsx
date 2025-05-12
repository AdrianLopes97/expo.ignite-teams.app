import { Header } from '@components/Header';
import { Container } from './styles';
import { HighLight } from '@components/HighLight';
import { GroupCard } from '@components/GroupCard';
import { useState } from 'react';
import { FlatList } from 'react-native';

export function Groups() {

  const [groups, setGroups] = useState<string[]>(['Grupo 1', 'Grupo 2', 'Grupo 3']);


  return (
    <Container>
      <Header />
      <HighLight
        title="Turmas"
        subtitle="Jogue com a sua turma!"
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard 
            title={item}
          />
        )}
      />
    </Container>
  );
}