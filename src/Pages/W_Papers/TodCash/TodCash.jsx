import React from 'react';
import SummarySheet from './SummarySheet';
import Toe from './Toe';
import LeadSchedule from './LeadSchedule';
import AnalyticalProcedures from './AnalyticalProcedures';
import AuditSampling from './AuditSampling';
import ToeMajor from './ToeMajor';
import Supporting from './Supporting';
import AuditProcedures from './AuditProcedures';

const TodCash = () => {
    return (
        <div>
            <SummarySheet />
            <AuditProcedures />
            <Toe />
            <LeadSchedule />
            <AnalyticalProcedures />
            <AuditSampling />
            <ToeMajor />
            <Supporting />
        </div>
    );
}

export default TodCash;
