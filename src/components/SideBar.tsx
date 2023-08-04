import {
  Card,
  Drawer,
  IconButton,
  List,
  ListItem
} from '@material-tailwind/react'
import logoPontua from '../assets/logo_pontua.svg'
import {
  ArrowLeftOnRectangleIcon,
  Bars3Icon,
  HomeIcon,
  UserCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import React from 'react'
import useAuth from '../hooks/useAuth'

export function SideBar() {

  return (
    <Card className='h-[calc(100vh-2rem)] w-full max-w-[18rem] p-4 shadow-xl'>
      <div className='mb-2 flex items-center justify-between p-4'>
        <img src={logoPontua} className='w-3/5' alt='Logomarca Pontua' />
      </div>
      <hr className='my-2 border-blue-gray-50' />
      <NavList />
    </Card>
  )
}

function NavList() {
  const { signOut } = useAuth()

  async function handleLogout() {
    signOut()
  }

  return (
    <List>
      <Link to='/home'>
        <ListItem>
          <HomeIcon className='h-6 w-6 mr-4' />
          Home
        </ListItem>
      </Link>
      <Link to='/profile' className='pointer-events-none'>
        <ListItem disabled>
          <UserCircleIcon className='h-6 w-6 mr-4' />
          Perfil
        </ListItem>
      </Link>
      <hr className='my-2 border-blue-gray-50' />
      <ListItem onClick={handleLogout}>
          <ArrowLeftOnRectangleIcon className='h-6 w-6 mr-4' />
          Sair
        </ListItem>
    </List>
  )
}


export function MenuDrawer() {
  const [open, setOpen] = React.useState(false)
  const openDrawer = () => setOpen(true)
  const closeDrawer = () => setOpen(false)

  return (
    <React.Fragment>
      <div className="mb-2 flex items-center justify-between fixed top-0 shadow-sm h-[60px] bg-white z-50 w-screen p-4">
        <img src={logoPontua} className="w-3/12" alt="Logomarca Pontua" />
        <IconButton onClick={openDrawer} className='bg-pontua-primary'>
          <Bars3Icon className='h-8 w-8 text-white' />
        </IconButton>
      </div>

      <Drawer open={open} onClose={closeDrawer}>
        <div className="mb-2 flex items-center justify-between p-4">
          <img src={logoPontua} className="w-3/5" alt="Logomarca Pontua" />
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <XMarkIcon className='h-6 w-6' />
          </IconButton>
        </div>
        <hr className="my-2 border-blue-gray-50" />
        <NavList />
      </Drawer>
    </React.Fragment>
  )
}
