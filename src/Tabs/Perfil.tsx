import React from 'react'
import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base'
import { Title } from '../components/Title'


const Perfil = () => {
  return (
    <ScrollView flex={1}>
    <VStack flex={1} alignItems="center" p={5}>
      <Title
      title='Meu perfil'
      color="blue.500"
      />
      <Avatar
      size='xl' 
      source={{ uri: "https://github.com/athospugliesedev.png"}}
      mt={5}
      />
      <Title 
      title='Informações pessoais'
      color="blue.500"

      />
      <Title 
      title='Athos Pugliese'
      fontSize="lg"
      mb={1}
      />
      <Title 
      title='19/01/2000'
      fontSize="lg"
      fontWeight='regular'
      />
      <Title 
      title='Recife'
      fontSize="lg"
      fontWeight='regular'
      />
      <Divider  mt={5}/>
      <Title
      title='Histórico médico'
      color="blue.500"
      />
      <Text>Bronquite</Text>
      <Text>Asma</Text>
      <Text>Pneumonia</Text>
    </VStack>
    </ScrollView>
  )
}

export default Perfil