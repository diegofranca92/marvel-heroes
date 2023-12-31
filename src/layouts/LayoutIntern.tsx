import { MenuDrawer, SideBar } from "../components/SideBar";

type LayoutProps = {
  children: React.ReactNode
}

export function LayoutIntern({ children }: LayoutProps) {
  return (
    <main className='block md:flex mx-auto max-w-[1320px]'>
      <div className='md:hidden'>
        <MenuDrawer />
      </div>
      <div className='hidden md:block'>
        <SideBar />
      </div>
      <div className='flex-1 mt-24 mx-12 md:my-8'>{children}</div>
    </main>
  )
}