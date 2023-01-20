import React from 'react'
import { Button } from "@pnpm-monorepo/ui"

export default {
  title: 'Button',
  component: Button,
}

const Template = (args) => <Button { ...args }></Button>

export const Primary = Template.bind({})

Primary.args= {
  children: 'subscribe...'
}

export const Secondary = Template.bind({})

Secondary.args= {
  children: 'cancel...'
}
