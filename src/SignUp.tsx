import { TouchableOpacity } from 'react-native'
import { VStack, Image, Text, Box, ScrollView, Checkbox } from 'native-base'
import Logo from './assets/Logo.png'
import { Title } from './components/Title'
import { InputVoll } from './components/Input'
import ButtonVoll from './components/ButtonVoll'
import { useState } from 'react'
import { sessions } from './utils/registerEntryText'

export default function SignUp() {
  const [numSessions, setNumSessions] = useState(0)


  function handleChangeSession() {
    if (numSessions < sessions.length - 1) {
      setNumSessions(numSessions + 1)
    }
  }

  function handleBack() {
    if (numSessions > 0) {
      setNumSessions(numSessions - 1)
    }
  }

  return (
    <ScrollView flex={1}  p={5} >
      <Image source={Logo} alt="Logo Voll" alignSelf="center" />
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
      <Box>
        <Text color="blue.800" fontWeight="bold" fontSize="md" mt="2" mb="2">Selecione o plano:</Text>
        {
      sessions[numSessions].checkbox.map(checkbox => { 
                return <Checkbox key={checkbox.id}
                value={checkbox.value}>
                {checkbox.value}
                </Checkbox>
        })
      }
      </Box>

      {numSessions > 0 && <ButtonVoll
        title="Voltar"
        bgColor="gray.400"
        onPress={() => handleBack()}
      />}
      <ButtonVoll
        title="Avançar"
        onPress={() => handleChangeSession()}
      />

    </ScrollView>
  );
}