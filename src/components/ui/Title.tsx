type TitleType = {
  name: string
}

export function Title({ name }: TitleType) {
  return (
    <div>
      <h2 className="text-baby-pink text-4xl font-semibold">{name}</h2>
    </div>
  )
}