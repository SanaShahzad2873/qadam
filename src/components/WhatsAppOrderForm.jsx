import { useState } from 'react'

const WHATSAPP_NUMBER = '923123207029'

const fields = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'phone', label: 'Phone', type: 'tel', required: true },
  { name: 'city', label: 'City', type: 'text', required: true },
  { name: 'address', label: 'Address', type: 'text', required: true },
  { name: 'email', label: 'Email (optional)', type: 'email', required: false },
  { name: 'khussa', label: 'Khussa Name', type: 'text', required: true },
  { name: 'size', label: 'Size', type: 'text', required: true },
  { name: 'color', label: 'Color', type: 'text', required: true },
  { name: 'quantity', label: 'Quantity', type: 'number', required: true },
]

const initialState = fields.reduce((acc, f) => ({ ...acc, [f.name]: '' }), {
  notes: '',
  giftWrap: false,
  urgent: false,
})

export default function WhatsAppOrderForm() {
  const [form, setForm] = useState(initialState)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const missing = fields.filter((f) => f.required && !form[f.name]?.trim())
    if (missing.length) {
      setError(`Please fill in: ${missing.map((f) => f.label).join(', ')}`)
      return
    }
    setError('')

    const message = `Assalam-o-Alaikum

I would like to place an order.

Name: ${form.name}
Phone: ${form.phone}
City: ${form.city}
Address: ${form.address}
Email: ${form.email || '-'}

Khussa: ${form.khussa}
Size: ${form.size}
Color: ${form.color}
Quantity: ${form.quantity}

Notes: ${form.notes || '-'}
Gift Wrapping: ${form.giftWrap ? 'Yes' : 'No'}
Urgent Delivery: ${form.urgent ? 'Yes' : 'No'}`

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid gap-6 font-ui">
      <div className="grid md:grid-cols-2 gap-6">
        {fields.map((f) => (
          <label key={f.name} className="flex flex-col gap-2 text-xs tracking-widest uppercase text-cream/60">
            {f.label}
            <input
              type={f.type}
              name={f.name}
              value={form[f.name]}
              onChange={handleChange}
              min={f.type === 'number' ? 1 : undefined}
              className="focus-gold bg-transparent border-b border-gold-dim/50 py-2 text-base normal-case tracking-normal text-cream placeholder:text-cream/30 focus:border-gold outline-none transition-colors"
            />
          </label>
        ))}
      </div>

      <label className="flex flex-col gap-2 text-xs tracking-widest uppercase text-cream/60">
        Custom Notes
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          rows={3}
          className="focus-gold bg-transparent border-b border-gold-dim/50 py-2 text-base normal-case tracking-normal text-cream placeholder:text-cream/30 focus:border-gold outline-none transition-colors resize-none"
        />
      </label>

      <div className="flex flex-wrap gap-8 text-xs tracking-widest uppercase text-cream/60">
        <label className="flex items-center gap-3">
          <input type="checkbox" name="giftWrap" checked={form.giftWrap} onChange={handleChange} className="accent-[#c8a35d] w-4 h-4" />
          Gift Wrapping
        </label>
        <label className="flex items-center gap-3">
          <input type="checkbox" name="urgent" checked={form.urgent} onChange={handleChange} className="accent-[#c8a35d] w-4 h-4" />
          Urgent Delivery
        </label>
      </div>

      {error && <p className="text-sm text-red-400 font-ui">{error}</p>}

      <button
        type="submit"
        className="focus-gold mt-4 justify-self-center border border-gold px-12 py-4 font-ui text-xs tracking-[0.25em] uppercase text-gold hover:bg-gold hover:text-ink transition-colors duration-500"
      >
        Order on WhatsApp
      </button>
    </form>
  )
}
