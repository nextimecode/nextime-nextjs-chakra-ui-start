import React, { PropsWithChildren } from 'react'
import { Button } from '@chakra-ui/react'

type Props = {
  bg?: 'next-blue.400' | 'next-dark.200' | undefined
}

const NextButton = ({ bg = 'next-blue.400', children }: PropsWithChildren<Props>) => (
  <Button bg={bg}>{children}</Button>
)

export default NextButton
