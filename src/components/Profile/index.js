import React, { useState } from 'react'
import { withRouter } from "react-router-dom";
import PDetails from './PersonnalDetails';
import ProfilePhoto from './ProfilePhoto'
import CardDetails from './CardDetails';


import './profile.scss';

const Profile = props => {

    const [step, setStep] = useState(0);
    const [profile, setProfile] = useState({
        firstName: '',
        secondName: '',
        mobileNumber: '',
        secondEmail: '',
        profilePhoto: '',
        packageChoice: '',
        city: '',
        postalCode: '',
        zip: '',
    })

    const nextStep = () => {
        console.log("yes")
        setStep(step => step + 1);
    }

    const previousStep = () => {
        setStep(step => step - 1);
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value })
    }

    const saveProfile = e => {
        e.preventDefault();

        console.log('profile', profile)
    }

    switch (step) {
        case 0:
            return <PDetails
                nextStep={nextStep}
                values={profile}
                onChange={handleChange}
            />
        case 1:
            return <ProfilePhoto
                nextStep={nextStep}
                prevStep={previousStep}
                onChange={handleChange}
                values={profile}
            />

        case 2:
            return <CardDetails
                nextStep={nextStep}
                prevStep={previousStep}
                onChange={handleChange}
            />

        default:
            return <PDetails
                values={profile}
                onChange={handleChange}
            />
    }
}

export default withRouter(Profile);