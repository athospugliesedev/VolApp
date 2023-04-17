import { VStack, Text, ScrollView, Divider } from 'native-base'
import React from 'react'
import { Title } from '../components/Title'
import QueryCard from '../components/QueryCard/Index'
import { InputVoll } from '../components/Input'
import ButtonVoll from '../components/ButtonVoll'

const Explore = () => {
  return (
    <ScrollView flex={1} p='5'>
      <VStack w="100%" borderRadius="lg" p={3} mt={5} shadow="1" borderRightRadius="md">
        <InputVoll
          placeholder='Digite a especialidade'
        />
        <InputVoll
          placeholder='Digite a especialidade'
        />
        <ButtonVoll
          title='Buscar'
        />
      </VStack>

      <Divider />

      <Title
        title='Resultado da busca'
        color='blue.500'
        alignSelf='center'
      />

      <QueryCard
        name='Dr. Fulano de Tal'
        type='Cardiologista'
        image='https://github.com/athospugliesedev.png'
        date='20/04/2023'

      />
      <QueryCard
        name='Dr. Fulano de Tal'
        type='Cardiologista'
        image='https://github.com/athospugliesedev.png'

      />
      <QueryCard
        name='Dr. Fulano de Tal'
        type='Cardiologista'
        image='https://github.com/athospugliesedev.png'
        date='20/04/2023'
      />
      <QueryCard
        name='Dr. Fulano de Tal'
        type='Cardiologista'
        image='https://github.com/athospugliesedev.png'
        date='20/04/2023'
      />
      <QueryCard
        name='Dr. Fulano de Tal'
        type='Cardiologista'
        image='https://github.com/athospugliesedev.png'
        date='20/04/2023'
      />

    </ScrollView>
  )
}

export default Explore