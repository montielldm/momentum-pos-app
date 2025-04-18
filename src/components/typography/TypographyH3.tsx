import React from 'react'

interface Props {
    label: string
}

export default function TypographyH3({ label }: Props) {
  return (
    <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {label}
    </h2>
  )
}
