import MomentumLogo from "@/assets/momentum-logo.svg"

interface Props {
    title: string
    description: string
}

export default function Header({ title, description }: Props) {
  return (
    <div>
        <div className="my-3">
            <img src={MomentumLogo} alt="logo-momentum" />
        </div>
        <div className="mb-5">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
        </div>
    </div>
  )
}
