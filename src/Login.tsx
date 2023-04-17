import { TouchableOpacity } from 'react-native'
import { VStack, Image, Text, Box, FormControl, Button, Link } from 'native-base'
import Logo from './assets/Logo.png'
import { Title } from './components/Title'
import { InputVoll } from './components/Input'
import ButtonVoll from './components/ButtonVoll'


export default function Login({ navigation }) {
  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">
      <Image source={Logo} alt="Logo Voll" />
      <Title title="Faça login em sua conta" />
      <Box>
      
          <InputVoll
          label="E-mail"
          placeholder="Insira seu e-mail"
          />
        <InputVoll
          label="Senha"
          placeholder="Insira sua senha"
          />
     
      </Box>
      <ButtonVoll
      w="100%"
      bg="blue.800"
      mt={10}
      borderRadius="lg"
      title="Entrar"
      onPress={() => navigation.navigate('Tabs')}
      />
        
      <Link href='' mt={2}>
      Esqueceu sua senha?
      </Link>
      <Box flexDirection="row" justifyContent="center" mt={8}>
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text color="blue.500">
             Faça seu cadastro
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}