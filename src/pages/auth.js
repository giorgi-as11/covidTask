import React from "react";
import { Header } from '../components/header'
import { Link } from 'react-router-dom'

export const notDone = 'ჯერ შეავსე <3'
const Auth = () => {
    const [name, setName] = React.useState('')
    const [nameGeo, setnameGeo] = React.useState(null)
    const [nameMin, setnameMin] = React.useState(null)
    const [nameMax, setnameMax] = React.useState(null)


    const [surname, setSurname] = React.useState('')
    const [surnameGeo, setSurnameGeo] = React.useState(null)
    const [surnameMin, setSurnameMin] = React.useState(null)
    const [surnameMax, setSurnameMax] = React.useState(null)

    const [mailInput, setMailInput] = React.useState('')
    const [justMail, setJustMail] = React.useState(null)
    const [redberryMail, setRedberryMail] = React.useState(null)

    const [done, setDone] = React.useState(null)



    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSurname = (e) => {
        setSurname(e.target.value)
    }

    const handleMail = (e) => {
        setMailInput(e.target.value)
    }

    const regexpTest = /[^A-z0-9а-яА-Я]$/i
    const regexpMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const regexpMailRedberry = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry.ge$/i

    const handleNameSubmit = (e) => {
        e.preventDefault()
        handleReadyForNext()
        console.log('the name is', name)
        if (!regexpTest.test(name)) {
            return setnameGeo(true)
        } else {
            setnameGeo(false)
        }

        if (name.split('').length < 3) {
            return setnameMin(true)
        } else {
            setnameMin(false)
        }
        if (name.split('').length >= 255) {
            return setnameMax(true)
        } else {
            setnameMax(false)
        }
        return
    }

    const handleSurnameSubmit = (e) => {
        e.preventDefault()
        handleReadyForNext()
        console.log('the surname is', surname)
        if (!regexpTest.test(surname)) {
            return setSurnameGeo(true)
        } else {
            setSurnameGeo(false)
        }

        if (surname.split('').length < 3) {
            return setSurnameMin(true)
        } else {
            setSurnameMin(false)
        }
        if (surname.split('').length >= 255) {
            return setSurnameMax(true)
        } else {
            setSurnameMax(false)
        }
        return
    }

    const handleMailSubmit = (e) => {
        e.preventDefault()
        handleReadyForNext()
        console.log('the mail is', mailInput)
        if (!regexpMail.test(mailInput)) {
            return setJustMail(true)
        } else {
            setJustMail(null)
        }
        if (!regexpMailRedberry.test(mailInput)) {
            return setRedberryMail(true)
        } else {
            setRedberryMail(null)
        }
        return
    }

    const handleReadyForNext = (e) => {

        if (mailInput.length !== 0 && regexpMail.test(mailInput) && regexpMailRedberry.test(mailInput) && name.length !== 0 && surname.length !== 0 && !nameGeo && !nameMax && !nameMin && !surnameGeo && !surnameMax && !surnameMin && !justMail && !redberryMail) {
            setDone(true)
        } else {
            setDone(false)
        }
    }
    React.useEffect(() => { handleReadyForNext() },
        [justMail, redberryMail, nameGeo, nameMax, nameMin, surnameGeo, surnameMax, surnameMin])

    return (
        <div className="container">
            <Header number='1' />
            <article className='flex'>
                <div>
                    <form onSubmit={handleNameSubmit} className='name_input'>
                        <label for='input_name'><p className='input_paragraph'>სახელი*</p></label>
                        <input className='small_text_input' onChange={handleName} value={name} id='input_name' required placeholder='იოსები' type='text' />
                        {nameGeo ? (<p className='red_text'>სახელის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს</p>) : (null)}
                        {nameMin ? (<p className='red_text'>სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან</p>) : (null)}
                        {nameMax ? (<p className='red_text'>სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან</p>) : (null)}

                    </form>
                    <form onSubmit={handleSurnameSubmit} className='name_input'>
                        <label for='input_surname'><p className='input_paragraph'>გვარი*</p></label>
                        <input className='small_text_input' onChange={handleSurname} value={surname} id='input_surname' required placeholder='ჯუღაშვილი' type='text' />
                        {surnameGeo ? (<p className='red_text'>სახელის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს</p>) : (null)}
                        {surnameMin ? (<p className='red_text'>სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან</p>) : (null)}
                        {surnameMax ? (<p className='red_text'>სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან</p>) : (null)}
                    </form>
                    <form onSubmit={handleMailSubmit} className='name_input'>
                        <label for='input_email'><p className='input_paragraph'>მეილი*</p></label>
                        <input className='small_text_input' onChange={handleMail} value={mailInput} id='input_email' required placeholder='fbi@redberry.ge' type='text' />
                        {justMail ? (<p className='red_text'>თქვენ მიერ შეყვანილი მეილი არასწორია</p>) : (null)}
                        {redberryMail ? (<p className='red_text'>გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)</p>) : (null)}
                    </form>
                    <div className='required'>
                        <hr style={{ margin: '0 0 20px' }} />
                        <p>*-ით მონიშნული ველების შევსება სავალდებულოა</p>
                    </div>

                </div>


                <div style={{ margin: '-70px' }}>
                    <img style={{ width: '800px' }} src='/scan.png' /></div>

            </article >
            <div style={{ margin: '0 auto' }} className='links'>

                <div className='links'>
                    {done ? (
                        <Link to='/covid' >
                            <img src='/right.png' />
                        </Link>)
                        : <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <p className='not_ready_paragraph'>{notDone}</p>
                            <img className='not_ready_img' src='/right.png' />
                        </div>
                    }

                </div>
            </div>
        </div >
    )
}
export default Auth