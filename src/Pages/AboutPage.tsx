import React from 'react'
import { useHistory } from 'react-router-dom'

const AboutPage = () => {
    const history = useHistory()
    return (
        <div>
            <h1>Страница информации</h1>
            <p>Данное приложение было разработано, с помощью typescript, react, react-hooks, react-router</p>
            <button className='btn' onClick={()=> history.push('/')}>Обратно к спиcку задач</button>
        </div>
    )
}

export default AboutPage
