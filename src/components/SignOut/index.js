import React from 'react';
import { withFireBase } from "../Firebase";
import { Image, Dropdown } from 'semantic-ui-react';

const Profile = (props) => (
    <span>
      <Image avatar src={props.src} /> {props.name}
    </span>
)

const SignOutButton = ({ firebase }) => (
    <Dropdown
        trigger={
            <Profile/>
        }
        pointing='top left'
    >
      <Dropdown.Item text='Account' icon="user" />
      <Dropdown.Item text='settings' icon="settings" />
      <Dropdown.Item icon='signout' text='Sign Out' onClick={firebase.doSignOut()}/>
    </Dropdown>
);

export default withFireBase(SignOutButton);