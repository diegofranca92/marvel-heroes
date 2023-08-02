import React from 'react'
import {
  Card,
  // Drawer,
  // IconButton,
  List,
  ListItem,
  // Typography
} from '@material-tailwind/react'
import logoPontua from '../assets/logo_pontua.svg'
import {
  ArrowLeftOnRectangleIcon,
  // Bars3Icon,
  HomeIcon,
  UserCircleIcon,
  // XMarkIcon
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export function SideBar() {
  // const [open, setOpen] = React.useState(false)
  // const openDrawer = () => setOpen(true)
  // const closeDrawer = () => setOpen(false)

  return (
    <Card className='h-[calc(100vh-2rem)] w-full max-w-[18rem] p-4 shadow-xl shadow-blue-gray-900/5'>
      <div className='mb-2 flex items-center justify-between p-4'>
        <img src={logoPontua} className='w-3/5' alt='Logomarca Pontua' />
      </div>
      <hr className='my-2 border-blue-gray-50' />
      <List>
        <Link to='/home'>
          <ListItem>
            <HomeIcon className='h-6 w-6 mr-4' />
            Home
          </ListItem>
        </Link>
        <Link to='/profile'>
          <ListItem>
            <UserCircleIcon className='h-6 w-6 mr-4' />
            Perfil
          </ListItem>
        </Link>
        <hr className='my-2 border-blue-gray-50' />
        <Link to='/'>
          <ListItem>
            <ArrowLeftOnRectangleIcon className='h-6 w-6 mr-4' />
            Sair
          </ListItem>
        </Link>
      </List>
    </Card>
    // <React.Fragment>
    //   <IconButton onClick={openDrawer} color="blue">
    //     <Bars3Icon className='h-8 w-8 text-white' />
    //   </IconButton>
    //   <Drawer open={open} onClose={closeDrawer}>
    //     <div className="mb-2 flex items-center justify-between p-4">
    //       <img src={logoPontua} className="w-3/5" alt="Logomarca Pontua" />
    //       <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
    //         <XMarkIcon className='h-6 w-6' />
    //       </IconButton>
    //     </div>
    //     <hr className="my-2 border-blue-gray-50" />
    //     <List>
    //       <ListItem>
    //         <HomeIcon className='h-6 w-6 mr-4' />
    //         Home
    //       </ListItem>
    //       <ListItem>
    //         <UserCircleIcon className='h-6 w-6 mr-4' />
    //         Perfil
    //       </ListItem>
    //       <hr className="my-2 border-blue-gray-50" />
    //       <ListItem>
    //         <ArrowLeftOnRectangleIcon className='h-6 w-6 mr-4' />
    //         Sair
    //       </ListItem>
    //     </List>
    //   </Drawer>
    // </React.Fragment>
  )
}
