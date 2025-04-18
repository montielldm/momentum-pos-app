interface Props {
    label: string
}

export default function TypographyMuted({ label }:Props) {
  return (
    <p className='text-sm text-muted-foreground'>{label}</p>
  )
}
