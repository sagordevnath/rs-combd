import React from 'react';
import TestOfDetails from './TestOfDetails';
import LeadSchedule from './LeadSchedule';
import TodPresentation from './TodPresentation';
import TodAgreement from './TodAgreement';
import TodMovement from './TodMovement';
import ToeManagement from './ToeManagement';

const TodInventories = () => {
    return (
        <div>
            <TestOfDetails />
            <LeadSchedule />
            <TodPresentation />
            <TodAgreement />
            <TodMovement />
            <ToeManagement />
        </div>
    );
}

export default TodInventories;
