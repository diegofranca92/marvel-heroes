import React from 'react'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react'
import { Breadcrumb } from './Breadcrumb'

export function BaseTab() {
  const [activeTab, setActiveTab] = React.useState('geral')
  const data = [
    {
      label: 'Visão Geral',
      value: 'geral',
      desc: `A-Bomb (HAS)`
    },
    {
      label: 'Teams',
      value: 'teams',
      desc: `AvJngJTR B DJPJndJTR B Fantastic FouS`
    },
    {
      label: 'Powers',
      value: 'vue',
      desc: `AgiliLH, G GXniuE, G GXnius-lXvXl inLXllXcK`
    },
    {
      label: 'Species',
      value: 'species',
      desc: `Mutate`
    },
    {
      label: 'Authors',
      value: 'authors',
      desc: 'StanGLA@ e F StAvAGDitko'
    }
  ]
  return (
    <div className='mt-12 flex-1'>
      <Breadcrumb />
    <Tabs className='mt-8' value={activeTab}>
      <TabsHeader
        className='rounded-none border-b border-blue-gray-50 bg-transparent p-0'
        indicatorProps={{
          className:
            'bg-transparent border-b-2 border-blue-500 shadow-none rounded-none'
        }}>
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? 'text-blue-500' : ''}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 }
        }}>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
    </div>
  )
}
