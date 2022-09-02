import { Box, Flex, Heading, Input, Text } from '@chakra-ui/react'
import NextButton from 'components/atoms/NextButton'
import { NextLogo } from 'components/atoms/NextLogo'
export default function Subscribe() {
  return (
    <Flex minHeight={'100vh'} flexDirection={'column'} alignItems="center">
      <Box
        maxWidth={'1124px'}
        display="flex"
        alignItems="center"
        justifyContent={'space-between'}
        mt={20}
        mx={'auto'}
        width="100%"
      >
        <Box maxWidth={'640px'}>
          <NextLogo />
          <Heading mt={8}>De fã para fã</Heading>
          <Text as="p" color={'text-gray-200'}>
            Venha apostar nos novos integrantes da Fazenda 15. Nesse jogo que mistura Cartola,
            Apostas e muito dedo na cara.
          </Text>
        </Box>
        <Box
          p={8}
          backgroundColor={'gray.700'}
          border={'1px'}
          borderColor={'gray.500'}
          rounded={'base'}
        >
          <Text as={'strong'} fontSize={'2xl'}>
            Inscreva-se gratuitamente
          </Text>
          <form action="">
            <Box mt={6} display="flex" flexDirection="column" gap={2} width="100%">
              <Input
                placeholder="Seu nome completo"
                rounded={'base'}
                backgroundColor={'gray.900'}
                px={5}
                height={14}
              />
              <Input
                type="email"
                placeholder="Digite seu e-mail"
                rounded={'base'}
                backgroundColor={'gray.900'}
                px={5}
                height={14}
              />
              <NextButton>{'Garantir minha participação'}</NextButton>
            </Box>
          </form>
        </Box>
      </Box>
    </Flex>
  )
}
