import Paper from "@material-ui/core/Paper"
import TextField from "@material-ui/core/TextField"
import React, {useState} from "react"
import Button from "@material-ui/core/Button"
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'
import {useFormik} from "formik"
import SimpleDialog from "./modal"
import {regExp} from "./regExp/regExp"
import {useStyles} from "../styles/styles-for-mui/edit-form-styles"
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import PhoneIcon from '@material-ui/icons/Phone'
import bodyStyles from '../styles/body-styles.module.scss'

const EditForm = ({setName, setEmail, setPhone,sendData}) => {

    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [saveData, setSaveData] = useState({})
    const handleClose = (value) => {
        setOpen(false)
    }
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: ''
        },

        onSubmit: (values, a) => {
            setSaveData(values)
            setOpen(true)
            a.resetForm()
            sendData(values.name, values.email, values.phone)
        },
        validate: (value) => {
            if (!value.name) return {name: 'Фамилия и имя - обязательное поле'}
            if (!regExp.nameReg.test(value.name)) return {name: 'Фамилия или имя ввдены не вправильно'}
            if (!value.email) return {email: 'Email - обязательное поле'}
            if (!regExp.emailReg.test(value.email)) return {email: 'Email введён не правильно'}
            if (!value.phone) return {phone: 'Телефон - обязательное поле'}
            if (!regExp.phoneReg.test(value.phone)) return {phone: 'Телефон введён не правильно '}
        },
    })

    const inputForm =(label, helperText, error, key, Components)=>{
        return (
        <div className={bodyStyles.main__text_field_wrapper}>
            {Components}
            <TextField
              id="outlined-read-only-input"
              label={label}
              variant="outlined"
              helperText={name}
              error={error}
              {...formik.getFieldProps(key)}

            />
        </div>
        )
    }


    return (
        <div className={classes.root}>
            <Paper className={bodyStyles.main__paper_edit_form_wrapper} elevation={3}>
            {/*<Paper  elevation={3}>*/}
                <form onSubmit={formik.handleSubmit}>
                    <div className={bodyStyles.main__text_container}>
                        {inputForm("Фамилия и имя", formik.errors.name, formik.errors.name,'name',  <AssignmentIndIcon className={bodyStyles.main__icon} fontSize="large"/>)}
                        {inputForm("Email", formik.errors.email, formik.errors.email,'email', <AlternateEmailIcon className={bodyStyles.main__icon} fontSize="large"/>)}
                        {inputForm("Телефон", formik.errors.phone, formik.errors.phone,'phone', <PhoneIcon className={bodyStyles.main__icon} fontSize="large"/>)}
                    </div>
                    <div className={classes.btnContainer}>
                        <Button type='submit' className={classes.btn} variant={'text'} onClick={formik.onSubmit}>
                            Сохранить изменения
                        </Button>
                    </div>
                </form>
            </Paper>
            <SimpleDialog
              saveData={saveData}
              open={open}
              onClose={handleClose}
              setName={setName}
              setEmail={setEmail}
              setPhone={setPhone}
            />
        </div>
    )
}
export default EditForm