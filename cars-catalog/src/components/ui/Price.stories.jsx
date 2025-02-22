import React from 'react'
import Price from '../screens/home/Price'

export default {
  title: 'HOME/Price',
  component: Price,
  argTypes: {
    price: { control: 'number' }
  }
}

const Template = (args) => <Price {...args} />

export const Default = Template.bind({})
Default.args = {
  price: 19999
}

export const Expensive = Template.bind({})
Expensive.args = {
  price: 99999
}

export const Cheap = Template.bind({})
Cheap.args = {
  price: 999
}
