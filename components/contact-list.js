import React from "react"
import bodyStyles from '../styles/body-styles.module.scss'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import {useStyles} from "../styles/styles-for-mui/contact-list-style"

//--> Icon <--
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import PhoneIcon from '@material-ui/icons/Phone'



const ContactsList = ({email, phone}) => {
    const classes = useStyles()
    const universalListItem = (listItemText, Icon)=>{
        return(
        <ListItem className={bodyStyles.main__list_item}>
            <ListItemIcon>
                {Icon}
            </ListItemIcon>
            <ListItemText className={bodyStyles.main__list_text} primary={listItemText}/>
        </ListItem>
        )
    }

    return (
            <div className={bodyStyles.main__paper_wrapper}>
                <Paper elevation={3}>
                    <List className={classes.list} component='nav' aria-label='main mailbox folders'>
                        {universalListItem(email,<AlternateEmailIcon fontSize='large' style={{color: '#00BFA5'}}/>)}
                        <div className={bodyStyles.main__line}>{null}</div>
                        {universalListItem(phone,<PhoneIcon fontSize='large' style={{color: '#00BFA5'}}/>)}
                    </List>
                </Paper>
            </div>
    )
}
export default ContactsList
