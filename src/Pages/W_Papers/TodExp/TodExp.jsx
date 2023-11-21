import React from 'react';
import SummarySheetDeposit from './AdvanceDeposit/SummarySheetDeposit';
import AuditProcedures from './AdvanceDeposit/AuditProcedures';
import LeadSchedule from './AdvanceDeposit/LeadSchedule';
import AdvanceDeposit from './AdvanceDeposit/AdvanceDeposit';
import TodAgreement from './AdvanceDeposit/TodAgreement';
import TodMovement from './AdvanceDeposit/TodMovement';
import SummarySheetExpenses from './Expenses/SummarySheetExpenses';
import AuditProcedures2 from './Expenses/AuditProcedures';
import LeadSchedule2 from './Expenses/LeadSchedule';
import TodAgreement2 from './Expenses/TodAgreement';

const TodExp = () => {
    return (
        <div>
            <div>
                <SummarySheetDeposit />
                <AuditProcedures />
                <LeadSchedule />
                <AdvanceDeposit />
                <TodAgreement />
                <TodMovement />
            </div>
            <div>
                <SummarySheetExpenses />
                <AuditProcedures2 />
                <LeadSchedule2 />
                <TodAgreement2 />
            </div>
        </div>
    );
}

export default TodExp;
