import React from "react";
import {
  Card,
  Button,
  Typography,
  Input,
} from "@material-tailwind/react";

export function SignIn() {
  return (
    <main className='w-full h-screen flex items-center justify-center'>
        <Card color='transparent' className='p-4'>
          <Typography variant='h4' color='blue-gray'>
            Login
          </Typography>
          <Typography color='gray' className='mt-1 font-normal'>
            Seja bem vind@
          </Typography>

          <form
            onSubmit={() => {}}
            className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
            <div className='mb-4 flex flex-col gap-6'>
              <Input
                size='lg'
                type='text'
                required
                label='Usuário'
              />
              <Input
                type='password'
                required
                size='lg'
                label='Senha'
              />
            </div>
            <Button className='mt-6' type='submit' fullWidth>
              Entrar
            </Button>
          </form>
        </Card>
      </main>
  )
}