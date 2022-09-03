import React, { PropsWithChildren } from 'react'
import { Button } from '@chakra-ui/react'

interface NextButtonProps {
  bg?: 'next-blue.400' | 'next-dark.200' | undefined
}

export default function NextButton({
  bg = 'next-blue.400',
  children
}: PropsWithChildren<NextButtonProps>) {
  return <Button bg={bg}>{children}</Button>
}
