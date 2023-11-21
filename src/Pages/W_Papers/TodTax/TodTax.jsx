import React from 'react';
import SummarySheet from './SummarySheet';
import DeferredTaXLiabilities from './DeferredTaXLiabilities';
import CurrentTaxAssets from './CurrentTaxAssets';
import CurrentTaxExp from './CurrentTaxExp';
import CurrentTaxLiabilities from './CurrentTaxLiabilities';
import DeferredTaxExp from './DeferredTaxExp';

const TodTax = () => {
    return (
        <div>
            <SummarySheet />
            <DeferredTaXLiabilities />
            <CurrentTaxAssets />
            <CurrentTaxExp />
            <CurrentTaxLiabilities />
            <DeferredTaxExp />
        </div>
    );
}

export default TodTax;
