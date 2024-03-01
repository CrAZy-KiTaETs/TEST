import React, { Component } from 'react';
import './nav.css'
import Logo from '../../images/logo_white.png'

class NavBar extends Component {
    render() {
        return (
            <div className='nav-container box'>
                <img src={Logo} alt="" />
                <ul className='nav-ul'>
                    <li>Рабочий стол</li>
                    <li>Заказы</li>
                    <li>Чаты</li>
                    <li>Задачи</li>
                    <li>Аналитика</li>
                    <li className='active-li'>Товары и услуги</li>
                    <li>Контрагенты</li>
                    <li>Параметры магазина</li>
                    <li>Telegram-web</li>
                    <li>Настройки</li>
                </ul>
                <button className='buyer'>Покупатель</button>
            </div>
        );
    }
}

export default NavBar;
