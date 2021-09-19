import React from "react";
import { Header } from "../components/header";
import { Link } from "react-router-dom";
const Advice = () => {

    const [online, setOnline] = React.useState(null)
    const [office, setOffice] = React.useState(null)
    const [done, setDone] = React.useState(null)

    const handleOnline = () => {
        setOnline(true)
    }

    const handleOffice = () => {
        setOffice(true)
    }

    const handleDone = () => {
        if (online && office) {
            setDone(true)
        }
    }

    React.useEffect(() => { handleDone() }, [office, online])

    return (
        <div className='container global_div'>
            <Header number='4' />

            <article className='flex'>
                <div style={{ width: '600px' }}>
                    <p className='advice_paragraph'>რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო, რომელსაც ჩვენი
                        თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი — ჩვენთან გადმოსვლის.</p>
                    <p style={{ marginTop: '40px' }} className='advice_paragraph'>პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და ყოველდღიური კომუნიკაციაც გაიშვიათდა.</p>
                    <form className='covid_form_insideForm'>
                        <p style={{ marginBottom: '20px' }} className='input_paragraph'>რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*</p>

                        <div className='covid_inputs radio_margin'>
                            <input onChange={handleOnline} id='online1' type='radio' name='online' />
                            <label for='online1'>
                                <p className='covid_paragraph'>კვირაში ორჯერ</p>
                            </label>
                        </div>
                        <div className='covid_inputs radio_margin'>
                            <input onChange={handleOnline} id='online2' type='radio' name='online' />
                            <label for='online2'>
                                <p className='covid_paragraph'>კვირაში ერთხელ</p>
                            </label>
                        </div>
                        <div className='covid_inputs radio_margin'>
                            <input onChange={handleOnline} id='online3' type='radio' name='online' />
                            <label for='online3'>
                                <p className='covid_paragraph'>ორ კვირაში ერთხელ</p>
                            </label>
                        </div>
                        <div className='covid_inputs radio_margin'>
                            <input onChange={handleOnline} id='online4' type='radio' name='online' />
                            <label for='online4'>
                                <p className='covid_paragraph'>თვეში ერთხელ</p>
                            </label>
                        </div>
                    </form>
                    <form className='covid_form_insideForm'>
                        <p style={{ marginBottom: '20px' }} className='input_paragraph'>კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*</p>

                        <div className='covid_inputs radio_margin'>
                            <input onChange={handleOffice} id='office0' type='radio' name='office' />
                            <label for='office0'>
                                <p className='covid_paragraph'>0</p>
                            </label>
                        </div>
                        <div className='covid_inputs radio_margin'>
                            <input onChange={handleOffice} id='office1' type='radio' name='office' />
                            <label for='office1'>
                                <p className='covid_paragraph'>1</p>

                            </label>
                        </div>
                        <div className='covid_inputs radio_margin'>
                            <input onChange={handleOffice} id='office2' type='radio' name='office' />
                            <label for='office2'>
                                <p className='covid_paragraph'>2</p>

                            </label>
                        </div>
                        <div className='covid_inputs radio_margin'>
                            <input onChange={handleOffice} id='office3' type='radio' name='office' />
                            <label for='office3'>
                                <p className='covid_paragraph'>3</p>

                            </label>
                        </div>
                        <div className='covid_inputs radio_margin'>
                            <input onChange={handleOffice} id='office4' type='radio' name='office' />
                            <label for='office4'>
                                <p className='covid_paragraph'>4</p>

                            </label>
                        </div>
                        <div className='covid_inputs radio_margin'>
                            <input onChange={handleOffice} id='office5' type='radio' name='office' />
                            <label for='office5'>
                                <p className='covid_paragraph'>5</p>

                            </label>
                        </div>
                    </form>
                    <form className='covid_form_insideForm'>
                        <p style={{ marginBottom: '20px' }} className='input_paragraph'>რას ფიქრობ ფიზიკურ შეკრებებზე?</p>
                        <textarea />
                    </form>
                    <form className='covid_form_insideForm'>
                        <p style={{ marginBottom: '20px' }} className='input_paragraph'>რას ფიქრობ არსებულ გარემოზე:
                            რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?</p>
                        <textarea />
                    </form>
                    {done ? (
                        <a href='/thx'>
                            <button>დასრულება</button>
                        </a>
                    ) : <button className='opacity'>დასრულება</button>}
                </div>
                <div>
                    <img src='/bike.png' />
                </div>
            </article>
            <div style={{ margin: '80px 0 0 60px' }} className='links'>
                <Link to='/vacine' >
                    <img src='/left.png' />
                </Link>

            </div>

        </div>
    )
}

export default Advice