interface SeparatorProps {
    width?: string;
}

export function Separator({ width = "w-60" }: SeparatorProps) {
    const classParam = `border-t-2 border-red-600/90 mb-20 ${width}`;
    return <hr className={classParam} />
}
