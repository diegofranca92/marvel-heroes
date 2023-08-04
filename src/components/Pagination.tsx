import React from 'react'
import {
  Button,
  CardFooter,
  IconButton,
} from '@material-tailwind/react'
import {
  ArrowRightIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/solid'

type PaginationProps = {
  limit: number
  total: number
  offset: number
}

const MAX_ITEMS = 9
const MAX_LEFT = (MAX_ITEMS - 1) / 2

export function Pagination({ limit, total, offset }: PaginationProps) {
  const [active, setActive] = React.useState(1)

  const current = offset ? (offset / limit) + 1 : 1

  const pages = Math.ceil(total / limit)

  const first = Math.max(current - MAX_LEFT, 1)

  const getItemProps = (index: number) =>
  ({
    variant: active === index ? 'filled' : 'text',
    color: active === index ? 'blue' : 'blue-gray',
    onClick: () => setActive((index - 1) * limit),
    className: 'rounded-full'
  } as any)

  const next = () => {
    if (active === pages) return

    setActive(active + 1)
  }

  const prev = () => {
    if (active === pages) return

    setActive(active - 1)
  }

  return (
    <CardFooter className='flex items-center justify-center border-t border-blue-gray-50 p-4'>
      <div className='flex items-center gap-4'>
        <Button
          variant='text'
          color='blue-gray'
          className='flex items-center gap-2 rounded-full'
          onClick={prev}
          disabled={active === pages - 1 }>
          <ArrowLeftIcon strokeWidth={2} className='h-4 w-4' /> Anterior
        </Button>
        <div className='flex items-center gap-2'>
          {Array.from({ length: Math.min(MAX_ITEMS, pages) }).map((_, index) => index + first)
          .map((page, idxPage) => <IconButton key={idxPage} {...getItemProps(idxPage)}>{page}</IconButton>)}
          
        </div>
        <Button
          variant='text'
          color='blue-gray'
          className='flex items-center gap-2 rounded-full'
          onClick={next}
          disabled={active === pages - 1}>
          Próxima
          <ArrowRightIcon strokeWidth={2} className='h-4 w-4' />
        </Button>
      </div>
    </CardFooter>
  )
}