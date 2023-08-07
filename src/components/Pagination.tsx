import React from 'react'
import { Button, ButtonGroup, IconButton } from '@material-tailwind/react'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'

type PaginationProps = {
  limit: number
  total: number
  offset: number
  setOffset: (data: number) => void
}

const MAX_ITEMS = 9
const MAX_LEFT = (MAX_ITEMS - 1) / 2

export function Pagination({
  limit,
  total,
  offset,
  setOffset
}: PaginationProps) {
  const [active, setActive] = React.useState(1)

  const current = offset ? offset / limit + 1 : 1

  const pages = Math.ceil(total / limit)

  const first = Math.max(current - MAX_LEFT, 1)

  function handleChanglePage(page: number, index?: number) {
    setOffset((page - 1) * limit)
    setActive(index!)
  }

  const next = () => {
    if (active === pages) return
    handleChanglePage(current + 1)
    setActive(active + 1)
  }

  const prev = () => {
    if (active === 0) return
    handleChanglePage(current - 1)
    setActive(active - 1)
  }

  return (
    <ButtonGroup
      variant='outlined'
      color='blue-gray'
      className='flex items-center justify-center p-4'>
      <Button onClick={prev} disabled={current === 1} className='py-[10.7px]'>
        <ArrowLeftIcon strokeWidth={2} className='max-h-fit w-4 inline mr-2' />
        Anterior
      </Button>
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + first)
        .map((page, idxPage) => (
          <IconButton
            key={idxPage}
            onClick={() => handleChanglePage(page, idxPage)}
            className={`${active === idxPage ? 'bg-pontua-primary text-white font-semibold' : ''} ${current === idxPage ? '': 'hidden'} md:block`}>
            {page}
          </IconButton>
        ))}
      <Button onClick={next} disabled={current === -1} className='pt-[9.6px]'>
        Próxima
        <ArrowRightIcon strokeWidth={2} className='h-4 w-4 inline ml-2' />
      </Button>
    </ButtonGroup>
  )
}
