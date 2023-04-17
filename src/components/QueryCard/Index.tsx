import { Text, Avatar, VStack } from 'native-base'
import React from 'react'
import ButtonVoll from '../ButtonVoll'

interface CardProps {
  name: string;
  image: string;
  type: string;
  date?: string;
  done?: boolean;
  marked?: boolean;
}

const QueryCard = ({ name, image, type, date, done, marked }: CardProps) => {
  return (
    <VStack w="100%" mb={5} bg={ done ? 'blue.100' : 'white'} p="5" borderRadius="lg" shadow="2">
      <VStack flexDir="row">
        <Avatar
          size="lg"
          source={{ uri: image }}
        />
        <VStack pl="4">
          <Text fontSize="md" bold>{name}</Text>
          <Text>{type}</Text>
          <Text>{date}</Text>
        </VStack>
      </VStack>
      {
        marked
          ?
          <ButtonVoll
            title='Cancelar'
          />
          :
          <ButtonVoll
            title='Marcar consulta'
          />
      }
    </VStack>
  )
}

export default QueryCard