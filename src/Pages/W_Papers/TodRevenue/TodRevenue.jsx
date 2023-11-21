import React from 'react';
import SummarySheet from './SummarySheet';
import AuditProcedures from './AuditProcedures';
import TocPresentation from './TocPresentation';
import LeadSchedule from './LeadSchedule';
import AnalyticalProcedures from './AnalyticalProcedures';
import AuditSampling from './AuditSampling';
import TocAgeing from './TocAgeing';

const TodRevenue = () => {
    return (
        <div>
            <SummarySheet />
            <AuditProcedures />
            <TocPresentation />
            <LeadSchedule />
            <AnalyticalProcedures />
            <AuditSampling />
            <TocAgeing />
        </div>
    );
}

export default TodRevenue;
