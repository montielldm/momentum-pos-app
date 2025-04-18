interface Props {
    children: React.ReactNode
}

export default function Container({ children }: Props) {
  return (
    <div className='w-full container mx-auto p-6 overflow-x-hidden'>
      {children}
    </div>
  )
}
