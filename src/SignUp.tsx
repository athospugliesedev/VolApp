import { TouchableOpacity } from 'react-native'
import { VStack, Image, Text, Box, Button, Link } from 'native-base'
import Logo from './assets/Logo.png'
import { Title } from './components/Title'
import { InputVoll } from './components/Input'
import ButtonVoll from './components/ButtonVoll'
import { useState } from 'react'

export default function SignUp() {
  const [numSessions, setNumSessions ] = useState(0)
  const sessions = [
    {
        id: 1,
        title: 'Insira alguns dados básicos',
        textEntry: [
            {
                id: 1,
                label: 'Nome',
                placeholder: 'Digite seu nome completo'
            },
            {
            id: 2,
            label: 'E-mail',
            placeholder: 'Insira seu endereço de e-mail'
            },
            {
              id: 3,
              label: 'Crie uma senha',
              placeholder: 'Insira sua senha'
            },
            {
              id: 4,
              label: 'Repita a senha',
              placeholder: 'Insira sua senha novamente'
            },
        ]
    },
    {
      id: 2,
      title: 'Agora, mais alguns dados sobre você',
      textEntry: [
        {
          id: 1,
          label: 'CEP',
          placeholder: 'Digite seu CEP'
        },
        {
          id: 2,
          label: 'Endereço',
          placeholder: 'Insira seu endereço',
        },
        {
          id: 3,
          label: 'Número',
          placeholder: 'Insira o complemento'
        },
        {
          id: 4,
          label: 'Telefone',
          placeholder: '(00) 00000-0000'
        }
      ]
    }
]

function handleChangeSession(){
  if(numSessions < sessions.length -1){
  setNumSessions(numSessions+1)
}
}

function handleBack(){
  if ( numSessions > 0){
    setNumSessions(numSessions - 1)
  }
}

  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">
      <Image source={Logo} alt="Logo Voll" />
      <Title title={sessions[numSessions].title} />
      <Box>
      {
                    sessions[numSessions].textEntry.map(entry => {
                        return <InputVoll label={entry.
                        label} placeholder={entry.placeholder}
                        key={entry.id}
                        />
                    })
                }
      </Box>
     { numSessions > 0 && <ButtonVoll
      title="Voltar"
      bgColor="gray.400"
      onPress={() => handleBack()}
      />}
      <ButtonVoll
      title="Avançar"
      onPress={() => handleChangeSession()}
      />

    </VStack>
  );
}