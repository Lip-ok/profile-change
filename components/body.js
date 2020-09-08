import React, {useState} from 'react'
import bodyStyles from '../styles/body-styles.module.scss'
import Button from '@material-ui/core/Button'
import ContactstList from './contact-list'
import EditForm from './edit-form'
import {useStyles} from "../styles/styles-for-mui/body-styles"

//--> Icon <--
import CloseIcon from '@material-ui/icons/Close'
import EditIcon from '@material-ui/icons/Edit'


const Body = ({name, email, phone, setName, setEmail, setPhone,sendData}) => {

  const classes = useStyles()
  const [state, setState] = useState(false)
  const changeBodyComponents = (!state ? <ContactstList email={email} phone={phone}/> : <EditForm setName={setName} setEmail={setEmail} setPhone={setPhone} sendData={sendData}/>)

  const handleClickEditButton = (value) => setState(value)

  return (
    <div className={bodyStyles.main}>
      <div className={bodyStyles.main__avatar_block}>
        <div className={bodyStyles.main__avatar_container}>
          <img alt='Remy Sharp' src='avatar-body.png' className={bodyStyles.main__avatar}/>
          <span className={bodyStyles.main__name}>{name}</span>
        </div>

        <div>
          <Button className={bodyStyles.main__btn_position} onClick={() => handleClickEditButton(!state)}>
            {!state ?
              <>
                <span className={bodyStyles.main__btn}>Редактировать</span>
                <EditIcon className={classes.icon}/>
              </>
              :
              <>
                <span className={bodyStyles.main__btn}>Закрыть</span>
                <CloseIcon className={classes.icon}/>
              </>
            }
          </Button>
        </div>
      </div>
      {changeBodyComponents}
    </div>
  )
}
export default Body
