import React from 'react'
import CreateCarForm from './CreateCarForm'

export default {
  title: 'Forms/CreateCarForm',
  component: CreateCarForm,
  argTypes: {
    setCars: { action: 'Car added' }
  }
}

const Template = (args) => <CreateCarForm {...args} />

export const Default = Template.bind({})
Default.args = {}

export const EmptyState = Template.bind({})
EmptyState.args = {}
