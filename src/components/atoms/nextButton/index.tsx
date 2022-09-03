import React, { PropsWithChildren } from 'react'
import { Button } from '@chakra-ui/react'

type Props = {
  bg?: 'next-blue.400' | 'next-dark.200' | undefined
}

export function NextButton({ bg = 'next-blue.400', children }: PropsWithChildren<Props>) {
  return <Button bg={bg}>{children}</Button>
}
