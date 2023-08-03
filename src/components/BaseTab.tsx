import React from 'react'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
  Card,
  CardBody,
} from '@material-tailwind/react'
import { Breadcrumb } from './Breadcrumb'

type TabProps = {
  hero: Hero.HeroDetail
}

export function BaseTab({ hero }: TabProps) {
  const [activeTab, setActiveTab] = React.useState('geral')
  const data = [
    {
      label: 'Visão Geral',
      value: 'geral',
      content:
        <Card className='rounded-3xl flex max-w-full h-52 max-h-fit flex-row p-4 items-center'>
          <img src={`${hero?.thumbnail?.path}.${hero?.thumbnail?.extension}`} alt={hero?.name} className='rounded-full w-32 h-32' />
          <CardBody>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {hero?.name}
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
              {hero?.description.length ? hero?.description : 'Não possui descrição'}
            </Typography>
          </CardBody>
        </Card>
    },
    {
      label: 'Comics',
      value: 'comics',
      content:
        <ul>
          {!hero.comics.items.length && 'Not found comics'}
          {hero.comics.items.map(comic => (
            <li className='list-disc'>{comic.name}</li>
          ))}
        </ul>
    },
    {
      label: 'Series',
      value: 'series',
      content:
        <ul>
          {!hero.series.items.length && 'Not found series'}
          {hero.series.items.map(serie => (
            <li className='list-disc'>{serie.name}</li>
          ))}
        </ul>
    },
    {
      label: 'Stories',
      value: 'stories',
      content:
        <ul>
          {!hero.stories.items.length && 'Not found stories'}
          {hero.stories.items.map(story => (
            <li className='list-disc'>{story.name}</li>
          ))}
        </ul>
    },
    {
      label: 'Events',
      value: 'events',
      content:
        <ul>
          {!hero.events.items.length && 'Not found events'}
          {hero.events.items.map(event => (
            <li className='list-disc'>{event.name}</li>
          ))}
        </ul>
    }
  ]

  return (
    <div className='m-12 flex-1'>
      <Breadcrumb profile={hero.name} />
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
          }}
        >
          {data.map(({ value, content }) => (
            <TabPanel key={value} className='p-8' value={value}>
              {content}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  )
}
