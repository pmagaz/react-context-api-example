import React  from 'react'
import { createConsumer } from './createConsumer'
import ChildComponent from './ChildComponent'

const ContainerComponent = context => (
  <ChildComponent { ...context } />
)

const MyContainer = createConsumer(ContainerComponent)

export default MyContainer