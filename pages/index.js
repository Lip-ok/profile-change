import React, {useEffect, useState} from 'react'
import style from '../styles/header-styles.module.scss'
import Header from '../components/header'
import Body from '../components/body'
import Head from 'next/head'
import MainLayout from '../components/main-layout'
import {api} from "./api/api"


function App() {
  const [name, setName] = useState('Иванова Анна Михайловна')
  const [email, setEmail] = useState('ivanova@mail.ru')
  const [phone, setPhone] = useState('8 800 555 35 35')


  const sendData = (name, email, phone) => {
    let data = {name, email, phone}
    api.postDataReq(data)
  }

  useEffect(() => {
    const name = localStorage.getItem('name')
    const email = localStorage.getItem('email')
    const phone = localStorage.getItem('phone')
    if (name && email && phone) {
      setName(name)
      setEmail(email)
      setPhone(phone)
    }
  }, [])

  return (
    <MainLayout>
      <Head>
        <title>Fulogy-test</title>
      </Head>
      <div className={style.main}>
        <Header name={name}/>
        <Body name={name}
              email={email}
              phone={phone}
              setName={setName}
              setEmail={setEmail}
              setPhone={setPhone}
              sendData={sendData}
        />
      </div>
    </MainLayout>
  )
}

export default App
