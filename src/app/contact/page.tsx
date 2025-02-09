'use client';
import styles from './contact.module.css';
import { useForm, SubmitHandler } from "react-hook-form";
import { sendEmail } from '../../services/sendEmail';
import { Contact } from '@/components';

const ContactPage = () => {
  <div>
    <Contact />
  </div>
}

export default Contact;
