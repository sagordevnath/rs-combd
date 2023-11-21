import React from "react";

const AnalyticalProcedures = () => {
  return (
    <div>
      <div className="flex justify-between mt-4">
        <h6 className="my-8 text-xl">
          Analytical procedures [IAS 520]: member-wise share capital
        </h6>
        <div className="badge badge-primary">SFP 12/5</div>
      </div>
      <div className="overflow-x-auto text-xs">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="border border-slate-600">
              <th className="border border-slate-600">Name of the members</th>
              <th className="border border-slate-600">Share capital</th>
              <th className="border border-slate-600">Calls-in-arrear</th>
              <th className="border border-slate-600">Share money deposit</th>
              <th className="border border-slate-600">TOTAL</th>
              <th className="border border-slate-600"></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="bg-base-200">
              <th>Muhammad A Rouf</th>
              <td>2500000</td>
              <td>(50000)</td>
              <td>-</td>
              <td>2450000</td>
              <td></td>
              <td>Schedule X up to 2018. Pending for 3years</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>Syed Mahbub</th>
              <td>1500000</td>
              <td>(50000)</td>
              <td>-</td>
              <td>1450000</td>
              <td></td>
              <td>Schedule X up to 2018. Pending for 3years</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>Shams Iftakhar</th>
              <td>500000</td>
              <td>-</td>
              <td>-</td>
              <td>500000</td>
              <td></td>
              <td>Schedule X up to 2018. Pending for 3years</td>
            </tr>
            {/* row 4 */}
            <tr>
              <th>A Afruza Mahbub</th>
              <td>500000</td>
              <td>-</td>
              <td>100000</td>
              <td>600000</td>
              <td>Due to addition</td>
              <td>Schedule X up to 2018. Pending for 3years</td>
            </tr>
            {/* row 5 */}
            <tr className="border border-3 border-slate-600 mt-3">
              <th className="border border-3 border-slate-600">Total</th>
              <td className="border border-3 border-slate-600">5000000</td>
              <td className="border border-slate-600">(100000)</td>
              <td className="border border-slate-600">100000</td>
              <td className="border border-slate-600">500000</td>
              <td className="border border-slate-600">-</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto mt-8">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="border border-slate-600">TOC conclusion</th>
              <th className="border border-slate-600 w-full">
                Modification of audit Opinion
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default AnalyticalProcedures;
