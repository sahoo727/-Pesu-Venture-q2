import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MoreTimeIcon from '@mui/icons-material/MoreTime';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import SchoolIcon from '@mui/icons-material/School';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import BookIcon from '@mui/icons-material/Book';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import styles from "../../styles/Landing.module.css";

function Sidebar({onClose}) {
  return (
    <div className='mx-5 my-3' style={{position:"sticky"}}>
        <div>
            <button className='vibile md:hidden text-white' onClick={onClose}><CloseOutlinedIcon /></button>
            
            <div className='text-center'>
                <ListItemIcon>
                    <PersonIcon className='text-blue-300 font-bold'/>
                    <p className='text-blue-300 font-bold mx-2'>Admin Panel</p>
                </ListItemIcon>
            </div>

            <div className={`${styles.list}`}>
                <ListItemButton className={`${styles.listButton}`}>
                <ListItemIcon>
                    <MoreTimeIcon className={`${styles.iconDashboard}`}/>
                </ListItemIcon>
                <ListItemText primary="Manage Categories" />
                </ListItemButton>
            </div>

            <div className={`${styles.list}`}>
                <ListItemButton className={`${styles.listButton}`}>
                <ListItemIcon>
                    <PersonAddAlt1Icon className={`${styles.iconDashboard}`}/>
                </ListItemIcon>
                <ListItemText primary="Add Company" />
                </ListItemButton>
            </div>

            <div className={`${styles.list}`}>
                <ListItemButton className={`${styles.listButton}`}>
                <ListItemIcon>
                    <PersonAddAlt1Icon className={`${styles.iconDashboard}`}/>
                </ListItemIcon>
                <ListItemText primary="Add New User" />
                </ListItemButton>
            </div>

            <div className={`${styles.list}`}>
                <ListItemButton className={`${styles.listButton}`}>
                <ListItemIcon>
                    <AddModeratorIcon className={`${styles.iconDashboard}`}/>
                </ListItemIcon>
                <ListItemText primary="Add New Certificates" />
                </ListItemButton>
            </div>

            <div className={`${styles.list}`}>
                <ListItemButton className={`${styles.listButton}`}>
                <ListItemIcon>
                    <SchoolIcon className={`${styles.iconDashboard}`}/>
                </ListItemIcon>
                <ListItemText primary="University action" />
                </ListItemButton>
            </div>

            <div className={`${styles.list}`}>
                <ListItemButton className={`${styles.listButton}`}>
                <ListItemIcon>
                    <PersonAddAlt1Icon className={`${styles.iconDashboard}`}/>
                </ListItemIcon>
                <ListItemText primary="Add students" />
                </ListItemButton>
            </div>

            <div className={`${styles.list}`}>
                <ListItemButton className={`${styles.listButton}`}>
                <ListItemIcon>
                    <ContentPasteSearchIcon className={`${styles.iconDashboard}`}/>
                </ListItemIcon>
                <ListItemText primary="Add MCQ" />
                </ListItemButton>
            </div>

            <div className={`${styles.list}`}>
                <ListItemButton className={`${styles.listButton}`}>
                <ListItemIcon>
                    <BatchPredictionIcon className={`${styles.iconDashboard}`}/>
                </ListItemIcon>
                <ListItemText primary="Jobs" />
                </ListItemButton>
            </div>

            <div className={`${styles.list}`}>
                <ListItemButton className={`${styles.listButton}`}>
                <ListItemIcon>
                    <SchoolIcon className={`${styles.iconDashboard}`}/>
                </ListItemIcon>
                <ListItemText primary="Universities" />
                </ListItemButton>
            </div>
            <div className={`${styles.list}`}>
                <ListItemButton className={`${styles.listButton}`}>
                <ListItemIcon>
                    <SupervisedUserCircleIcon className={`${styles.iconDashboard}`}/>
                </ListItemIcon>
                <ListItemText primary="View all Users" />
                </ListItemButton>
            </div>

            <div className={`${styles.list}`}>
                <ListItemButton className={`${styles.listButton}`}>
                <ListItemIcon>
                    <AccountCircleIcon className={`${styles.iconDashboard}`}/>
                </ListItemIcon>
                <ListItemText primary="Trail Users" />
                </ListItemButton>
            </div>

            <div className={`${styles.list}`}>
                <ListItemButton className={`${styles.listButton}`}>
                <ListItemIcon>
                    <BookIcon className={`${styles.iconDashboard}`}/>
                </ListItemIcon>
                <ListItemText primary="Add Blogs" />
                </ListItemButton>
            </div>
            
        </div>

        <div className='my-10'>
            <ListItemButton>
            <ListItemIcon>
                <AccountCircleIcon className={`${styles.iconDashboard}`} style={{fontSize:"3rem"}}/>
                <div className='text-white px-3 pt-1'>
                    <h5 className='font-bold'>Anil J</h5>
                    <p className='text-xs'>Assert_Admin</p>
                </div>
            </ListItemIcon>
            </ListItemButton>
        </div>
    </div>
  )
}

export default Sidebar