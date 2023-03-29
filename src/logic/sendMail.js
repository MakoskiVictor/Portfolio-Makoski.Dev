import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from '@/utils'
import emailjs from '@emailjs/browser'

export const sendMail = (name, subject, email, message) => {
  emailjs.send(SERVICE_ID, TEMPLATE_ID, {
    from_name: name,
    from_subject: subject,
    from_mail: email,
    message
  }, PUBLIC_KEY)
}
