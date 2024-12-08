interface Specification {
  label: string
  value: string
}

interface CarSpecificationsProps {
  specifications: Specification[]
}

export function CarSpecifications({ specifications }: CarSpecificationsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {specifications.map((spec, index) => (
        <div key={index} className="space-y-1">
          <p className="text-secondary-300">{spec.label}</p>
          <p className="font-semibold">{spec.value}</p>
        </div>
      ))}
    </div>
  )
}

