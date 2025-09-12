import React from 'react'
import Header from '../../components/Header/Header'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [form, setForm] = React.useState({ name: '', email: '', message: '' })
  const [status, setStatus] = React.useState({ loading: false, ok: null, msg: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus({ loading: false, ok: false, msg: 'Iltimos, barcha maydonlarni toʻldiring.' })
      return
    }
    try {
      setStatus({ loading: true, ok: null, msg: '' })
      const serviceId = import.meta.env.service_so67u9q
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      await emailjs.send(serviceId, templateId, {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_email: 'umarovalisher132@gmail.com'
      }, { publicKey })
      setStatus({ loading: false, ok: true, msg: 'Xabaringiz yuborildi! Tez orada siz bilan bogʻlanamiz.' })
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus({ loading: false, ok: false, msg: 'Yuborishda xatolik. Keyinroq urinib koʻring.' })
    }
  }

  return (
    <div>
      <Header/>
      <main className="section">
        <div className="container">
          <h1 style={{marginTop:0}}>Aloqa</h1>
          <div className="grid" style={{gridTemplateColumns:'1fr',gap:'16px',maxWidth:'720px'}}>
            <form className="card" onSubmit={handleSubmit}>
              <div className="card-body">
                <label>Ism<br/>
                  <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Ismingiz" className="input"/>
                </label>
                <label>Email<br/>
                  <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="siz@example.com" className="input"/>
                </label>
                <label>Xabar<br/>
                  <textarea name="message" value={form.message} onChange={handleChange} rows="5" placeholder="Qanday yordam bera olamiz?" className="input"/>
                </label>
                {status.msg && (
                  <div style={{color: status.ok ? 'var(--primary)' : '#ff6b6b'}}>{status.msg}</div>
                )}
                <div style={{marginTop:'8px'}}>
                  <button className="btn" type="submit" disabled={status.loading}>
                    {status.loading ? 'Yuborilmoqda…' : 'Yuborish'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact

