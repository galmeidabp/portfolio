type SkillItemProps = {
  name: string
  icon: string
  color: string
  textColor?: string
}

export function SkillItem({ name, icon, color, textColor }: SkillItemProps) {

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <span className={`rounded-full p-5 flex items-center justify-center transition-transform duration-200 hover:scale-110`} style={{ backgroundColor: color }}>
        <img src={icon} className="h-6" alt={name} />
      </span>
      <p className="uppercase text-xs md:text-lg" style={{ color: textColor }}>
        {name}
      </p>
    </div>
  )
}