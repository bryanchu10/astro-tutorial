import {
  Select as SelectComponent,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Option {
  value: string
  label: string
}

interface SelectProps {
  defaultValue: string
  options: Option[]
}

export default function Select({options, defaultValue}: SelectProps) {
  const handleSelectChange = (value: string) => {
    window.location.href = value
  }

  return (
    <SelectComponent defaultValue={defaultValue} onValueChange={handleSelectChange}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
          >
              {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectComponent>
  )
}
