import { Box, Flex, Heading, Text } from '@chakra-ui/react'
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
      >
        <Box maxWidth={'640px'}>
          <NextLogo />
          <Heading mt={8}>De fã para fã</Heading>
          <Text as="p" color={'text-gray-200'}>
            Venha apostar nos novos integrantes da Fazenda 15. Nesse jogo que mistura Cartola,
            Apostas e muito dedo na cara
          </Text>
        </Box>
      </Box>
    </Flex>
  )
}
