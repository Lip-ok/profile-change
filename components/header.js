import React from 'react'
import headerStyles from '../styles/header-styles.module.scss'

//--> Icon <--
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import Avatar from '@material-ui/core/Avatar'

const Header = (props) => {
    return (
        <>
            <div className={headerStyles.header}>
                <div className={headerStyles.header__block}>
                    <div className={headerStyles.header__bell}>
                        <NotificationsNoneIcon fontSize='large' htmlColor='#fff'/>
                    </div>
                    <div className={headerStyles.header__divider}>{null}</div>
                    <div className={headerStyles.header__avatar}>
                        <Avatar alt='Remy Sharp' src='./avatar.svg'/>
                        <span>{props.name}</span>
                    </div>
                </div>
                <div className={headerStyles.header__block_profile}>
                    <span className={headerStyles.header__title}>Личный профиль</span>
                    <span className={headerStyles.header__subtitle}>Главная/Личный профиль</span>
                </div>
            </div>
        </>
    )
}
export default Header
