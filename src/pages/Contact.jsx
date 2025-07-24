import React, { useEffect } from 'react'
import PageHeaderBanner from '../components/PageHeaderBanner'
import { useGlobalContext } from '../components/context';
import ContactForm from "../components/ContactPageComponents/ContactForm";

const Contact = () => {

  const { updateContactPage } = useGlobalContext();

  useEffect(() => {
    updateContactPage();
  }, []);


  return (
    <>
    <PageHeaderBanner/>
    <ContactForm/>
    </>
  )
}

export default Contact
