import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from '@/utils'
import emailjs from '@emailjs/browser'

export const sendMail = async (name, subject, email, message) => {
  try {
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      from_name: name,
      from_subject: subject,
      from_mail: email,
      message
    }, PUBLIC_KEY)
  } catch (error) {
    console.error(error)
  }
}
