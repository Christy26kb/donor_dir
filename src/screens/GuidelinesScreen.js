import React from 'react';
import Withback_Appbar from '../components/Withback_Appbar.js';
import Typography from '@material-ui/core/Typography';
export default class GuidelinesScreen extends React.Component {
    render() {
        return (
            <div>
                <Withback_Appbar />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography>

                        <h2 style={{ marginBottom: 50 }}>General Blood & Platelet Donor Guidelines</h2>

                        <h2 style={{ marginBottom: 30 }}>
                            General Guidelines
                    </h2>
                        <p>
                            To donate blood or platelets, you must be in good general health, weigh at least above 50 Kg, and be at least 18 years old. If you are 76 or older, you will need your doctor’s written approval for blood or platelet donation.If you have a chronic medical condition such as diabetes or high blood pressure, you may still be eligible as long as you are receiving treatment to control your condition.
                    </p>
                        <h2 style={{ marginBottom: 30 }}>
                            Needed Identification
                    </h2>
                        <p>
                            We require that you provide identification that shows your name and your photograph or signature.
                    </p>
                        <h2 style={{ marginBottom: 30 }}>
                            What Conditions Would Make You Ineligible to Be a Donor?
                    </h2>
                        <p>
                            You will not be eligible to donate blood or platelets if you:
                            </p>

                        <p>Have tested positive for hepatitis B or hepatitis C, lived with or had sexual contact in the past 12 months with anyone who has hepatitis B or symptomatic hepatitis C.</p>
                        <p>Had a tattoo in the past 12 months or received a blood transfusion (except with your own blood) in the past 12 months.</p>
                        <p>Have ever had a positive test for the AIDS virus.</p>
                        <p>Are a man who has had sex with another man in the past 12 months.</p>
                        <p>Have ever used intravenous illegal drugs, even once.</p>
                        <p>Have ever used injectable drugs, including anabolic steroids, unless prescribed by a physician.</p>
                        <p>Have traveled in the past year, or lived in the past three years, in an area where malaria is endemic.</p>
                        <p>Blood donors must wait at least 56 days between blood donations and 7 days before donating platelets. Platelet donors may donate once every seven days, not to exceed six times in any eight-week period, and must wait 7 days before donating blood.</p>


                    </Typography>
                </div>
            </div>
        );
    }
}
