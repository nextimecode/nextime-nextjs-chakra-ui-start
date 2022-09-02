import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import NextButton from '../components/atoms/NextButton'
import { gql, useQuery } from '@apollo/client'
import { Box, Text } from '@chakra-ui/react'

const GET_LESSONS_QUERY = gql`
  query GetLessons {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`

interface GetLessonsQueryResponse {
  lessons: {
    id: string
    title: string
    slug: string
    availableAt: string
    type: 'live' | 'class'
  }[]
}

export default function Home() {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)
  return (
    <div>
      <Head>
        <title>NeXTIME Chakra UI</title>
        <meta name="description" content="Site da empresa NeXTIME" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NextButton>{'<Faça um orçamento gratuito/>'}</NextButton>
        <NextButton>White</NextButton>
        <NextButton bg="primary-dark">Dark</NextButton>
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
