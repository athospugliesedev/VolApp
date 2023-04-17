import React from 'react'
import { VStack, ScrollView, Divider } from 'native-base'
import QueryCard from '../components/QueryCard/Index'
import { Title } from '../components/Title'
import ButtonVoll from '../components/ButtonVoll'

const Query = () => {
  return (
    <ScrollView p='5'>
      <Title
        color='blue.500'
        mb='5'
        title='Minhas consultas'
      />
      <ButtonVoll
        title='Agendar outra consulta'
        mt={5}
        mb={5}
      />
      <Title
        color='blue.500'
        title='Próximas consultas'
        fontSize="lg"
        alignSelf="flex-start"
        mb={2}
      />
      <QueryCard
        name='Dr. Fulano de Tal'
        type='Cardiologista'
        image='https://github.com/athospugliesedev.png'
        date='20/04/2023'
      />
      <Divider />
      <Title
        title='Consultas passadas'
        color='blue.500'
        fontSize="lg"
        alignSelf="flex-start"
        mb={2}
      />
      <QueryCard
        name='Dr. Fulano de Tal'
        type='Cardiologista'
        image='https://github.com/athospugliesedev.png'
        date='20/04/2023'
        done
        marked={true}
      />
      <QueryCard
        name='Dr. Fulano de Tal'
        type='Cardiologista'
        image='https://github.com/athospugliesedev.png'
        date='20/04/2023'
        done
        marked={true}
      />
      <QueryCard
        name='Dr. Fulano de Tal'
        type='Cardiologista'
        image='https://github.com/athospugliesedev.png'
        date='20/04/2023'
        done
        marked={true}
      />
    </ScrollView>
  )
}

export default Query