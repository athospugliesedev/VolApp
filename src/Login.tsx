import { TouchableOpacity } from 'react-native'
import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base'
import Logo from './assets/Logo.png'
import { Title } from './components/Title'

export default function Login() {
  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">
      <Image source={Logo} alt="Logo Voll" />
      <Title title="Faça login em sua conta" />
      <Box>
        <FormControl mt={3}>
          <FormControl.Label>
            E-mail
          </FormControl.Label>
          <Input
          placeholder="Insira seu e-mail"
          size="lg"
          w="100%"
          borderRadius="lg"
          bgColor="gray.100"
          shadow={3}
          />
        </FormControl>
        <FormControl mt={3}>
          <FormControl.Label>
            Senha
          </FormControl.Label>
          <Input
          placeholder="Insira sua senha"
          size="lg"
          w="100%"
          borderRadius="lg"
          bgColor="gray.100"
          shadow={3}
          />
        </FormControl>
      </Box>
      <Button
      w="100%"
      bg="blue.800"
      mt={10}
      borderRadius="lg"
      >
        Entrar
      </Button>
      <Link href='' mt={2}>
      Esqueceu sua senha?
      </Link>
      <Box flexDirection="row" justifyContent="center" mt={8}>
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity>
          <Text color="blue.500">
             Faça seu cadastro
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}