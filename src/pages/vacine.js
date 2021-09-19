import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/header";
import { notDone } from "./auth";
const Vacine = () => {
    const [vacinatedYes, setVacinatedYes] = React.useState(null)
    const [vacinatedNo, setVacinatedNo] = React.useState(null)
    const [vacinatedYes3, setVacinatedYes3] = React.useState(null)
    const [vacinatedNo1, setVacinatedNo1] = React.useState(null)
    const [vacinatedNo2, setVacinatedNo2] = React.useState(null)
    const [vacinatedNo3, setVacinatedNo3] = React.useState(null)

    const [done, setDone] = React.useState(null)

    const handleVacinatedYesChecked = (e) => {
        setVacinatedYes(true)
        setVacinatedNo(false)
        setVacinatedYes3(false)
        setDone(null)
    }

    const hancleVacinatedYes3Change = () => {
        setVacinatedYes3(true)
        handleDone()
    }

    const hancleVacinatedYesothersChange = () => {
        setVacinatedYes3(false)
        handleDone()

    }

    const handleVacinatedNoChecked = () => {
        setVacinatedYes(false)
        setVacinatedNo(true)
        setDone(null)
    }

    const handleNotVacinated1 = () => {

        setVacinatedNo3(false)
        setVacinatedNo2(false)
        handleDone()

    }

    const handleNotVacinated2 = () => {
        handleDone()

        setVacinatedNo3(false)
        setVacinatedNo2(true)
    }

    const handleNotVacinated3 = () => {
        handleDone()

        setVacinatedNo3(true)
        setVacinatedNo2(false)
    }

    const handleDone = () => {
        setDone(true)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} className='container global_div'>
            <Header number='3' />
            <div className='flex'>
                <form style={{ width: '600px' }}>
                    <p className='input_paragraph'>უკვე აცრილი ხარ?*</p>

                    <div className='covid_inputs radio_margin'>
                        <input onChange={handleVacinatedYesChecked} id='vacinetedYes' type='radio' name='vacineted' />
                        <label for='vacinetedYes'>
                            <p className='covid_paragraph'>კი</p>
                        </label>
                    </div>
                    <div className='covid_inputs radio_margin'>
                        <input onChange={handleVacinatedNoChecked} id='vacinetedNo' type='radio' name='vacineted' />
                        <label for='vacinetedNo'>
                            <p className='covid_paragraph'>არა</p>
                        </label>
                    </div>
                    {vacinatedYes ? (
                        <article>
                            <p className='input_paragraph'>უკვე აცრილი ხარ?*</p>
                            <div className='covid_inputs radio_margin'>
                                <input onChange={hancleVacinatedYesothersChange} id='vacinetedYes1' type='radio' name='vacinetedWhatLvl' />
                                <label for='vacinetedYes1'>
                                    <p className='covid_paragraph'>პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</p>
                                </label>
                            </div>
                            <div className='covid_inputs radio_margin'>
                                <input onChange={hancleVacinatedYesothersChange} id='vacinetedYes2' type='radio' name='vacinetedWhatLvl' />
                                <label for='vacinetedYes2'>
                                    <p className='covid_paragraph'>სრულად აცრილი ვარ</p>
                                </label>
                            </div>
                            <div className='covid_inputs radio_margin'>
                                <input onChange={hancleVacinatedYes3Change} id='vacinetedYes3' type='radio' name='vacinetedWhatLvl' />
                                <label for='vacinetedYes3'>
                                    <p className='covid_paragraph'>პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</p>
                                </label>
                            </div>
                            {vacinatedYes3 ? (
                                <p style={{ margin: '40px 0 0 40px' }} className='covid_paragraph'>
                                    <span>რომ არ გადადო,</span> <br />
                                    ბარემ ახლავე დარეგისტრირდი<br />
                                    <a target='_blank' href='https://booking.moh.gov.ge/'>https://booking.moh.gov.ge/</a></p>) : (null)}
                        </article>
                    ) : (null)}
                    {vacinatedNo ? (
                        <article>
                            <p className='input_paragraph'>უკვე აცრილი ხარ?*</p>

                            <div className='covid_inputs radio_margin'>
                                <input onChange={handleNotVacinated1} id='vacinetedNo1' type='radio' name='notvacinetedWhatLvl' />
                                <label for='vacinetedNo1'>
                                    <p className='covid_paragraph'>დარეგისტრირებული ვარ და ველოდები რიცხვს</p>
                                </label>
                            </div>
                            <div className='covid_inputs radio_margin'>
                                <input onChange={handleNotVacinated2} id='vacinetedNo2' type='radio' name='notvacinetedWhatLvl' />
                                <label for='vacinetedNo2'>
                                    <p className='covid_paragraph'>არ ვგეგმავ</p>
                                </label>
                            </div>
                            <div className='covid_inputs radio_margin'>
                                <input onChange={handleNotVacinated3} id='vacinetedNo3' type='radio' name='notvacinetedWhatLvl' />
                                <label for='vacinetedNo3'>
                                    <p className='covid_paragraph'>გადატანილი მაქვს და ვგეგმავ აცრას</p>
                                </label>
                            </div>
                            {vacinatedNo2 ? (
                                <div style={{ margin: '40px 0 0 40px' }} className='radio_margin'>
                                    <a href='https://booking.moh.gov.ge/'><p style={{ color: '#1289AE' }} className='covid_paragraph'>👉 https://booking.moh.gov.ge/</p></a>
                                </div>
                            ) : null}
                            {vacinatedNo3 ? (
                                <div style={{ margin: '40px 0 0 40px' }} className='radio_margin'>
                                    <p>ახალი პროტოკოლით კოვიდის გადატანიდან 1<br /> თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.<br />
                                    </p>
                                    <p style={{ marginTop: '20px' }}>👉 რეგისტრაციის ბმული<br />
                                        <a href='https://booking.moh.gov.ge/'> https://booking.moh.gov.ge/</a></p>
                                </div>
                            ) : null}
                        </article>
                    ) : null}
                </form>
                <div>
                    <img style={{ height: '670px' }} src='/doctor.png' />
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }} className='links'>
                <Link to='/covid' >
                    <img src='/left.png' />
                </Link>
                {done ? (
                    <Link to='/advice' >
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

export default Vacine