import React from "react";

const Toe = () => {
  return (
    <div>
      <div className="flex justify-between mt-4">
        <h6 className="my-8">
          TOE - Review the presentation and disclosure notes in compliance with
          IAS 1
        </h6>
        <div className="badge badge-primary p-3">SFP 12/3</div>
      </div>
      <table className="overflow-x-auto">
        <thead className="border border-slate-600">
          <tr className="border border-slate-600">
            <th className="border border-slate-600">Objective</th>
            <th className="border border-slate-600">
              To confirm appropriate notes and disclosers are given in
              compliance with IAS 1 and 7
            </th>
          </tr>
        </thead>
        <tbody className="border border-slate-600 p-3">
          <tr className="border border-slate-600">
            <td className="border border-slate-600">Control Process</td>
            <td className="border border-slate-600">
              <tr>As per IAS 1: Policies and discloser requirements are:</tr>
              <hr />
              <tr>1) Cash on hand and bank balances</tr>
              <hr />
              <tr>2) Short-term deposits not more than 3 months</tr>
              <hr />
              <tr>3) Interest income/other income</tr>
              <hr />
              <tr>4) Tax/VAT - non-refundable/adjustable</tr>
            </td>
          </tr>
          <tr className="border border-slate-600">
            <td className="border border-slate-600 p-3">Nature of control</td>
            <td className="border border-slate-600">Manual</td>
          </tr>
          <tr className="border border-slate-600">
            <td className="border border-slate-600">Frequency</td>
            <td className="border border-slate-600">Annual</td>
          </tr>
          <tr className="border border-slate-600">
            <td className="border border-slate-600">Risk of failure</td>
            <td className="border border-slate-600">Moderate</td>
          </tr>
          <tr className="border border-slate-600">
            <td className="border border-slate-600">Assertions</td>
            <td className="border border-slate-600">Presentation</td>
          </tr>
          <tr className="border border-slate-600">
            <td className="border border-slate-600">Sample size</td>
            <td className="border border-slate-600">N/A</td>
          </tr>
          <tr className="border border-slate-600">
            <td className="border border-slate-600">Sampling technique</td>
            <td className="border border-slate-600">
              Review notes and discloser of financial statements in compliance
              with IFRS presentation template
            </td>
          </tr>
          <tr className="border border-slate-600">
            <td className="border border-slate-600">Testing procedure</td>
            <td className="border border-slate-600">N/A</td>
          </tr>
          <tr className="border border-slate-600">
            <td className="border border-slate-600">Observation</td>
            <td className="border border-slate-600">
              Discussed and requested us to advise for modification of notes.
            </td>
          </tr>
          <tr className="border border-slate-600">
            <td className="border border-slate-600">TOE conclusion</td>
            <td className="border border-slate-600">Satisfactory</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Toe;
