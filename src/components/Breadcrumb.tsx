
type BreadcrumbProps = {
  profile: string
}

export function Breadcrumb({ profile }: BreadcrumbProps) {
  return (
    <h1 className='text-pontua-primary text-3xl font-bold'>
      Perfil<span className='text-pontua-orange-500'> / </span>
      <span className='text-blue-gray-200 font-thin text-2xl'>{profile}</span>
    </h1>
  )
}
