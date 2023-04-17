import { VStack, Image, Box, ScrollView, Text, Divider } from "native-base";
import Logo from '../assets/Logo.png';
import { depoimentos } from "../utils/mock";
import ButtonVoll from "../components/ButtonVoll";
import { Title } from "../components/Title";
import { InputVoll } from "../components/Input";


export default function Principal(){

  return (
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
        <Image source={Logo} alt="Logo" mt={10} />
        <Title
        title='Boas-vindas!'
        color="blue.500"
        />


        <Box w="100%" borderRadius="lg" p={3} mt={10} shadow="1" borderRightRadius="md">
          <InputVoll
            placeholder="Digite a especialidade"
          />
          <InputVoll
            placeholder="Digite sua localização"
          />
          <ButtonVoll mt={3} mb={3}
          title='Buscar'
          />
          
        </Box>

        <Title
        color="blue.800"
        alignSelf="center"
        title='Depoimentos'
        />
        <VStack space={3} divider={<Divider />} w="100%">
          {
            depoimentos.map(depoimento => (
              <Box key={depoimento.id} w="100%" borderRadius="lg" p={3}>
                <Text color="gray.300" fontSize="md" textAlign="justify">
                  {depoimento.text}
                </Text>
                <Text color="gray.500" fontSize="lg" fontWeight="bold" alignSelf="center" mt="2">{depoimento.titulo}</Text>
              </Box>
            ))
          }
        </VStack>
      </VStack>
    </ScrollView>
  );
}