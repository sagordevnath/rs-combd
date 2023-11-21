import React from 'react';
import SummarySheet from './SummarySheet';
import AuditProcedures from './AuditProcedures';
import Toc from './Toc';
import PropertyPlant from './PropertyPlant';
import LeadSchedule from './LeadSchedule';
import AnalyticalProcedures from './AnalyticalProcedures';
import AuditSampling from './AuditSampling';
import Comparison from './Comparison';
import TocManagement from './TocManagement';
import TocProperty from './TocProperty';
import LandSupporting from './LandSupporting';

const TodPpe = () => {
    return (
        <div>
            <SummarySheet />
            <AuditProcedures />
            <Toc />
            <PropertyPlant />
            <LeadSchedule />
            <AnalyticalProcedures />
            <AuditSampling />
            <Comparison />
            <TocManagement />
            <TocProperty />
            <LandSupporting />
        </div>
    );
}

export default TodPpe;
