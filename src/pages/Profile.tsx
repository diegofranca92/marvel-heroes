import { BaseTab } from '../components/BaseTab'
import { SideBar } from '../components/SideBar'

export function Profile() {
  return (
    <main className='flex'>
      <SideBar />
      <BaseTab />
    </main>
  )
}
