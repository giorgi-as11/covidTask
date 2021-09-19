import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/header";
import { notDone } from "./auth";
const Covid = () => {

    const [checkedYes, setCheckedYes] = React.useState(null)
    const [secondCheckedYes, setSecondCheckedYes] = React.useState(null)
    const [secondCheckedNo, setSecondCheckedNo] = React.useState(null)
    const [other, setOther] = React.useState(null)
    const [ricxvi, setRicxvi] = React.useState('')
    const [antisxeuli, setAntiSxeuli] = React.useState('')

    const [done, setDone] = React.useState(null)

    const handleYesChecked = (e) => {
        setCheckedYes(true)
        setOther(null)
        handleReadyForNext()
    }

    const handleSetRicxvi = (e) => {
        setRicxvi(e.target.value)
        console.log(ricxvi)
    }

    const handleSetAntisxeuli = (e) => {
        setAntiSxeuli(e.target.value)
        console.log(antisxeuli)

    }


    const handleNoChecked = (e) => {
        setCheckedYes(null)
        setOther(true)
    }

    const handleSecondYes = () => {
        setSecondCheckedYes(true)
        setSecondCheckedNo(false)
        setDone(null)

    }
    const handleSecondNo = () => {
        setSecondCheckedYes(false)
        setSecondCheckedNo(true)
        setDone(null)

    }

    const handleReadyForNext = () => {
        if (other || (ricxvi.length !== 0 && antisxeuli.length !== 0)) {
            setDone(true)
        } else {
            setDone(null)
        }
    }

    const handleDateSubmit = () => {
        setDone(true)
    }

    React.useEffect(() => { handleReadyForNext() }, [other, ricxvi, antisxeuli])

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} className='container'>
            <Header number="2" />

            <article className='flex'>
                <form className="covid_form" >
                    <p style={{ marginBottom: '15px' }} className='input_paragraph'>გაქვს გადატანილი Covid-19?*</p>
                    <div className="covid_inputs radio_margin" >
                        <input onChange={handleYesChecked} name='covid' id='yes' type='radio' />
                        <label for='yes'><p className='covid_paragraph'>კი</p></label>
                    </div>
                    <div className="covid_inputs radio_margin">
                        <input onChange={handleNoChecked} name='covid' id='no' type='radio' />
                        <label for='no'><p className='covid_paragraph'>არა</p></label>
                    </div>
                    <div className="covid_inputs radio_margin">
                        <input onChange={handleNoChecked} name='covid' id='now' type='radio' />
                        <label for='now'><p className='covid_paragraph'>ახლა მაქვს</p></label>
                    </div>
                    {checkedYes ? (
                        <div className="covid_form_insideForm">
                            <p style={{ marginBottom: '15px' }} className='input_paragraph'>ანტისხეულების ტესტი გაქვს გაკეთებული?*</p>
                            <div className="covid_inputs radio_margin" >
                                <input onChange={handleSecondYes} id='1yes2yes' type='radio' name='yes' />
                                <label for='1yes2yes'><p className='covid_paragraph'>კი</p></label>
                            </div>
                            <div className="covid_inputs radio_margin" >
                                <input onChange={handleSecondNo} id='1yes2no' type='radio' name='yes' />
                                <label for='1yes2no'><p className='covid_paragraph'>არა</p></label>
                            </div>
                            {secondCheckedYes ? (
                                <div >
                                    <p style={{ marginBottom: '15px' }} className='input_paragraph'>თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*</p>

                                    <input style={{ marginBottom: '25px' }} onChange={handleSetRicxvi} value={ricxvi}
                                        className='small_text_input' id='input_name' required placeholder='რიცხვი' type='text' />
                                    <input className='small_text_input ' onChange={handleSetAntisxeuli} value={antisxeuli} id='input_name' required placeholder='ანტისხეულების რაოდენობა' type='text' />

                                </div>

                            ) : (null)}
                            {secondCheckedNo ? (
                                <div>
                                    <p style={{ marginBottom: '15px' }} className='input_paragraph'>მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*</p>

                                    <input placeholder='დდ/თთ/წწ' onChange={handleDateSubmit} className='small_text_input' type='date'
                                    />

                                </div>
                            ) : (null)}
                        </div>
                    ) : (null)}
                </form>
                <div className='covid_img'>
                    <img style={{ height: '800px' }} src='/temperature.png' />

                </div>
            </article>
            <div style={{ display: 'flex', alignItems: 'center' }} className='links'>
                <Link to='/auth' >
                    <img src='/left.png' />
                </Link>
                {done ? (
                    <Link to='/vacine' >
                        <img src='/right.png' />
                    </Link>
                ) : <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '23px' }}>
                    <p className='not_ready_paragraph'>{notDone}</p>
                    <img className='not_ready_img' src='/right.png' />
                </div>}
            </div>


        </div>
    )
}
export default Covid