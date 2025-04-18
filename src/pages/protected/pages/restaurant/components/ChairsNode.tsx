interface Props {
    chairs: number
}

export default function ChairsNode({ chairs }: Props) {
    switch (chairs) {
        case 2:
            return (
                <>
                    <div className="absolute w-1 h-10 bg-neutral-200 top-1/2 -left-1 transform -translate-y-1/2 rounded-l-lg"></div>
                    <div className="absolute w-1 h-10 bg-neutral-200 top-1/2 -right-1 transform -translate-y-1/2 rounded-r-lg"></div>
                </>
            )
        case 4:
            return (
                <>
                    <div className="absolute w-1 h-10 bg-neutral-200 top-1/2 -left-1 transform -translate-y-1/2 rounded-l-lg"></div>
                    <div className="absolute w-1 h-10 bg-neutral-200 top-1/2 -right-1 transform -translate-y-1/2 rounded-r-lg"></div>
                    <div className="absolute w-10 h-1 bg-neutral-200 left-1/2 -top-1 transform -translate-x-1/2 rounded-t-lg"></div>
                    <div className="absolute w-10 h-1 bg-neutral-200 left-1/2 -bottom-1 transform -translate-x-1/2 rounded-b-lg"></div>
                </>
            )
        default:
            return (
                <>
                    <div className="absolute w-1 h-10 bg-neutral-200 top-1/2 -left-1 transform -translate-y-1/2 rounded-l-lg"></div>
                    <div className="absolute w-1 h-10 bg-neutral-200 top-1/2 -right-1 transform -translate-y-1/2 rounded-r-lg"></div>
                    <div className="absolute w-10 h-1 bg-neutral-200 left-1/2 -top-1 transform -translate-x-1/2 rounded-t-lg"></div>
                    <div className="absolute w-10 h-1 bg-neutral-200 left-1/2 -bottom-1 transform -translate-x-1/2 rounded-b-lg"></div>
                </>
            )
    }
    return (
        <div>ChairsNode</div>
    )
}
