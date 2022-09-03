import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import NextButton from '../components/atoms/NextButton'
import { Box, Text } from '@chakra-ui/react'
import { useGetLessonsQuery } from 'graphql/generated'

export default function Home() {
  const { data } = useGetLessonsQuery()
  return (
    <div>
      <Head>
        <title>NeXTIME Chakra UI</title>
        <meta name="description" content="Site da empresa NeXTIME" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NextButton>{'Garantir minha participação'}</NextButton>
        {data?.lessons.map(lesson => {
          return (
            <Box key={lesson.id}>
              <Text>{lesson.title}</Text>
              <Text>{lesson.slug}</Text>
              <Text>{lesson.availableAt}</Text>
            </Box>
          )
        })}
      </main>

      <footer>
        <Image src="/images/logos/logo_nextime.svg" alt="NeXTIME Logo" width={146} height={45} />
      </footer>
    </div>
  )
}
