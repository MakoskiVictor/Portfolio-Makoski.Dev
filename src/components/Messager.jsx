import messagerStyles from '@/styles/Messager.module.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useForm } from 'react-hook-form'
import { useSending } from '@/hooks/useSending.jsx'
import { sendMail } from '@/logic/sendMail.js'

export function Messager () {
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  })

  const name = watch('name')
  const email = watch('email')
  const subject = watch('subject')
  const message = watch('message')

  const resetInputs = () => {
    resetField('name')
    resetField('email')
    resetField('subject')
    resetField('message')
  }

  const { sending, isSending, isNotSending } = useSending()

  const onSubmit = async () => {
    try {
      isSending()
      sendMail(name, subject, email, message).then(() => {
        resetInputs()
      }).then(() => toast.dark('Message sended succesfully!'))
        .then(() => isNotSending())
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={messagerStyles.form}>
      <div>

        <div className={messagerStyles.container}>
          <div>

            {errors.name ? <span className={messagerStyles.errors}>{errors.name.message}</span> : <span className={messagerStyles.errors} />}
            <div>
              <input
                type='text'
                placeholder='Your name'
                name='name'
                className={messagerStyles.name}
                {...register('name', {
                  required: { value: true, message: 'Name is required' },
                  minLength: {
                    value: 3,
                    message: 'Need to be at least 3 characters'
                  }
                })}
              />

            </div>
          </div>
          <div>
            {errors.email ? <span className={messagerStyles.errors}>{errors.email.message}</span> : <span className={messagerStyles.errors} />}
            <div>
              <input
                type='text'
                placeholder='Your email'
                className={messagerStyles.mail}
                {...register('email', {
                  required: { value: true, message: 'Email is required' },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'The mail is not correct'
                  }
                })}
              />
            </div>
          </div>
        </div>
        <div>
          <div>

            {errors.subject ? <span className={messagerStyles.errors}>{errors.subject.message}</span> : <span className={messagerStyles.errors} />}
            <div className={messagerStyles.container}>
              <input
                type='text'
                placeholder='Subject'
                name='subject'
                className={messagerStyles.subject}
                {...register('subject', {
                  required: { value: true, message: 'Subject is required' },
                  minLength: {
                    value: 3,
                    message: 'Need to be at least 3 characters'
                  }
                })}
              />
            </div>
          </div>
          <div>
            {errors.message ? <span className={messagerStyles.errors}>{errors.message.message}</span> : <span className={messagerStyles.errors} />}
            <div className={messagerStyles.container}>
              <textarea
                cols='30'
                rows='10'
                placeholder='Your message'
                name='message'
                className={messagerStyles.message}
                {...register('message', {
                  required: { value: true, message: 'Message is required' },
                  minLength: {
                    value: 10,
                    message: 'Need to be at least 10 characters'
                  }
                })}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={messagerStyles.buttonContainer}>
        {sending
          ? <button type='submit' className={messagerStyles.sendingButton}>Sending</button>
          : <button type='submit' className={messagerStyles.button}>Send</button>}
      </div>

      <ToastContainer role='alert' />
    </form>
  )
}
