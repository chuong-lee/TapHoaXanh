// components/CategoryFilter.tsx
'use client'
import { useState } from 'react'

export type FilterField = {
  type: 'text' | 'number' | 'select';
  name: string;
  label?: string;
  placeholder?: string;
  options?: { value: string; label: string }[]; // cho select
  defaultValue?: string;
  className?: string;
  col?: string; // ví dụ: 'col-md-4'
};

interface CategoryFilterProps {
  fields: FilterField[];
  onFilter: (filters: Record<string, string>) => void;
}

export default function CategoryFilter({ fields, onFilter }: CategoryFilterProps) {
  // Khởi tạo state từ fields props
  const initial = fields.reduce((acc, field) => {
    acc[field.name] = field.defaultValue || '';
    return acc;
  }, {} as Record<string, string>);
  const [form, setForm] = useState(initial);

  const handleChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(form);
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="row g-2">
        {fields.map((field) => (
          <div className={field.col || 'col-md-3'} key={field.name}>
            {field.label && <label className="form-label">{field.label}</label>}
            {field.type === 'select' ? (
              <select
                className={`form-select ${field.className || ''}`}
                value={form[field.name]}
                onChange={e => handleChange(field.name, e.target.value)}
              >
                {field.options?.map(opt => (
                  <option value={opt.value} key={opt.value}>{opt.label}</option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                className={`form-control ${field.className || ''}`}
                placeholder={field.placeholder || field.label}
                value={form[field.name]}
                onChange={e => handleChange(field.name, e.target.value)}
              />
            )}
          </div>
        ))}
        <div className="col-md-2 d-flex align-items-end">
          <button type="submit" className="btn btn-success w-100">Lọc</button>
        </div>
      </div>
    </form>
  );
}
