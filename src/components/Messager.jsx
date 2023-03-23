import { useState } from 'react'
import messagerStyles from '@/styles/Messager.module.css'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function Messager () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    if (e.target.name === 'name') setName(e.target.value)
    if (e.target.name === 'email') setEmail(e.target.value)
    if (e.target.name === 'subject') setSubject(e.target.value)
    if (e.target.name === 'message') setMessage(e.target.value)
    console.log(name, email, subject, message)
  }

  const resetInputs = () => {
    setEmail(''),
    setMessage(''),
    setName(''),
    setSubject('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.send('service_p29qgw1', 'template_wblizpm', {
      from_name: name,
      from_subject: subject,
      from_mail: email,
      message
    }, 'x9ZTYKf99VqNZsdGN').then(res => {
      console.log(res)
    }).then(() => {
      resetInputs()
    }).then(() => toast.dark('Message sended succesfully!'))
  }

  return (
    <form onSubmit={handleSubmit} className={messagerStyles.form}>
      <div>
        <div className={messagerStyles.container}>
          <div>
            <input type='text' placeholder='Your name' name='name' onChange={(e) => handleChange(e)} value={name} className={messagerStyles.name} />
          </div>
          <div>
            <input type='text' placeholder='Your email' name='email' value={email} onChange={(e) => handleChange(e)} className={messagerStyles.mail} />
          </div>
        </div>
        <div>
          <div className={messagerStyles.container}>
            <input type='text' placeholder='Subject' name='subject' value={subject} onChange={(e) => handleChange(e)} className={messagerStyles.subject} />
          </div>
          <div className={messagerStyles.container}>
            <textarea cols='30' rows='10' placeholder='Your message' name='message' value={message} onChange={(e) => handleChange(e)} className={messagerStyles.message} />
          </div>
        </div>
      </div>
      <div className={messagerStyles.buttonContainer}>
        <button type='submit' className={messagerStyles.button}>Send</button>
      </div>
      <ToastContainer role='alert' />
    </form>
  )
}
