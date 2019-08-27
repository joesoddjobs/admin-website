import React from 'react'
import { Container, Header, JobTypeRow } from './styles'
import JobIcon from './components/JobIcon'
import { JobTypes } from './constants'

const JobIcons = JobTypes.map(jobType => (
  <JobIcon label={jobType.job} icon={jobType.icon} size={jobType.size} />
))

const JobTypesBlock = () => {
  return (
    <Container>
      <Header>Let us handle the work, while you handle life</Header>
      <JobTypeRow>{JobIcons}</JobTypeRow>
    </Container>
  )
}

export default JobTypesBlock
