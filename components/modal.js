import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Typography from '@material-ui/core/Typography'
import DialogActions from '@material-ui/core/DialogActions'
import {useStyles} from "../styles/styles-for-mui/modal-styles"
import bodyStyles from '../styles/body-styles.module.scss'

//--> Icon <--
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import {setLocalStorage} from "./local-storage/set-local-storage";

export default function SimpleDialog({onClose, open, saveData, setName, setEmail, setPhone}) {
    const classes = useStyles()
    const handleClose = () => onClose()
    const handleSave =()=>{
        setLocalStorage('name',saveData.name)
        setLocalStorage('email',saveData.email)
        setLocalStorage('phone',saveData.phone)
        setName(saveData.name)
        setEmail(saveData.email)
        setPhone(saveData.phone)
        onClose()
    }

    return (
        <Dialog className={bodyStyles.main__modal_window}  onClose={handleClose} aria-labelledby='simple-dialog-title' open={open}>
            <DialogTitle    id='simple-dialog-title'>
                <IconButton aria-label='close' className={classes.closeButton} onClick={handleClose}>
                    <CloseIcon/>
                </IconButton>
            </DialogTitle>
            <DialogContent className={bodyStyles.main__modal_container}>
            {/*<DialogContent className={classes.contentContainer}>*/}
                <Typography>
                    Сохранить изменения?
                </Typography>
                <DialogActions className={classes.contentWrapper}>
                    <Button className={classes.btn} onClick={handleSave}>
                        Сохранить
                    </Button>
                    <Button className={classes.btnUnSave} onClick={handleClose}>
                        Не сохранять
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}