import React from 'react';

const AuditProcedures = () => {
    return (
        <div>
            <div className="flex justify-between mt-4">
        <h6 className="my-6">Audit procedures with list of documents</h6>
        <div className="badge badge-primary p-3">SFP 12/2</div>
      </div>
      <table className="overflow-x-auto w-full">
        <thead className="border border-slate-600">
          <tr className="text-center">
            <th className="border border-slate-600">Sl#</th>
            <th className="border border-slate-600">Items</th>
            <th className="border border-slate-600">Yes/No/N/A</th>
            <th className="border border-slate-600">Activities</th>
          </tr>
        </thead>
        <tbody className="border border-slate-600">
          <tr>
            <td className="border border-slate-600">1</td>
            <td className="border border-slate-600">Summary sheet</td>
            <td className="border border-slate-600">
              <select className="select select-bordered max-w-xs">
                <option selected>YES</option>
                <option>NO</option>
                <option>N/A</option>
              </select>
            </td>
            <td className="border border-slate-600"></td>
          </tr>
          <tr className="border border-slate-600">
            <td className="border border-slate-600">2</td>
            <td className="border border-slate-600">
              P = Presentation <br /> (Policies and disclosure notes as per
              IFRS)
            </td>
            <td className="border border-slate-600">
              <select className="select select-bordered max-w-xs">
                <option selected>YES</option>
                <option>NO</option>
                <option>N/A</option>
              </select>
            </td>
            <td className="border border-slate-600">
              TOE - Review the presentation and disclosure notes in compliance
              with IAS 1
            </td>
          </tr>
          <tr className="border border-slate-600">
            <td className="border border-slate-600">3</td>
            <td className="border border-slate-600">Lead schedule</td>
            <td className="border border-slate-600">
              <select className="select select-bordered max-w-xs">
                <option selected>YES</option>
                <option>NO</option>
                <option>N/A</option>
              </select>
            </td>
            <td className="border border-slate-600"></td>
          </tr>
          <tr className="border border-slate-600">
            <td className="border border-slate-600">4</td>
            <td className="border border-slate-600">
              Analytical procedures [IAS 520]: <br /> member-wise share capital
            </td>
            <td className="border border-slate-600">
              <select className="select select-bordered max-w-xs">
                <option selected>YES</option>
                <option>NO</option>
                <option>N/A</option>
              </select>
            </td>
            <td className="border border-slate-600"></td>
          </tr>
          <tr className="border border-slate-600">
            <td className="border border-slate-600">5</td>
            <td className="border border-slate-600">
              Audit sampling [ISA 530]
            </td>
            <td className="border border-slate-600">
              <select className="select select-bordered max-w-xs">
                <option selected>YES</option>
                <option>NO</option>
                <option>N/A</option>
              </select>
            </td>
            <td className="border border-slate-600"></td>
          </tr>
          <tr className="border border-slate-600">
            <td className="border border-slate-600">6</td>
            <td className="border border-slate-600">
              Major transactions or regulatory <br /> requirements of Share
              capital
            </td>
            <td className="border border-slate-600">
              <select className="select select-bordered max-w-xs">
                <option selected>YES</option>
                <option>NO</option>
                <option>N/A</option>
              </select>
            </td>
            <td className="border border-slate-600"></td>
          </tr>
        </tbody>
      </table>
        </div>
    );
}

export default AuditProcedures;
