import React from 'react';
import classes from './Profile.module.css';

const Profile = ({ profileData }) => {
    return (
        <div className={(classes.profileClass)}>
            <div className={classes.textCenter}> Profile</div>
            <div className={classes.flexContainer}>
                <div className={classes.profileImg}><img src={profileData.avatarImage}></img></div>
                <div >
                    <div>
                        <div className={classes.divClass}>FirstName</div>
                        <div className={[classes.divClass, classes.profileValue].join(' ')}>{profileData.firstName}</div>
                    </div>
                    <div>
                        <div className={classes.divClass}>LastName</div>
                        <div className={[classes.divClass, classes.profileValue].join(' ')}>{profileData.lastName}</div>
                    </div>
                    <div>
                        <div className={classes.divClass}>Phone</div>
                        <div className={[classes.divClass, classes.profileValue].join(' ')}>{profileData.phone}</div>
                    </div>
                    <div>
                        <div className={classes.divClass}>Email</div>
                        <div className={[classes.divClass, classes.profileValue].join(' ')}>{profileData.email}</div>
                    </div>
                    <div>
                        <div className={classes.divClass} style={{ 'verticalAlign': 'top' }} >Bio</div>
                        <div className={[classes.divClass, classes.profileValue].join(' ')}>{profileData.bio}</div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Profile;