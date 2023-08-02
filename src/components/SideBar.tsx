import React from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import logoPontua from '../assets/logo_pontua.svg';
import {
  ArrowLeftOnRectangleIcon,
  Bars3Icon, HomeIcon, UserCircleIcon, XMarkIcon
} from '@heroicons/react/24/outline'

export function SideBar() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
 
  return (
    <React.Fragment>
      <IconButton onClick={openDrawer} color="blue">
        <Bars3Icon className='h-8 w-8 text-white' />
      </IconButton>
      <Drawer open={open} onClose={closeDrawer}>
        <div className="mb-2 flex items-center justify-between p-4">
          <img src={logoPontua} className="w-3/5" alt="Logomarca Pontua" />
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <XMarkIcon className='h-6 w-6' />
          </IconButton>
        </div>
        <hr className="my-2 border-blue-gray-50" />
        <List>
          <ListItem>
            <HomeIcon className='h-6 w-6 mr-4' />
            Home
          </ListItem>
          <ListItem>
            <UserCircleIcon className='h-6 w-6 mr-4' />
            Perfil
          </ListItem>
          <hr className="my-2 border-blue-gray-50" />
          <ListItem>
            <ArrowLeftOnRectangleIcon className='h-6 w-6 mr-4' />
            Sair
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
}