import React from "react";

const Toe = () => {
  return (
    <div>
      <div className="flex justify-between mt-4">
        <h6 className="my-8 text-xl">
          TOE - Review of Major transactions or regulatory requirements of Share
          capital
        </h6>
        <div className="badge badge-primary">SFP 12/7</div>
      </div>
      <div className="overflow-x-auto">
        <table className="table text-xs border border-slate-600">
          {/* head */}
          <thead className="border border-slate-600">
            <tr>
              <th className="border border-slate-600">Objective</th>
              <th className="border border-slate-600">
                To confirm member-wise share capital and compliance of
                regulatory requirements
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th className="border border-slate-600">Control process</th>
              <td className="border border-slate-600">
                <th className="border border-slate-600">
                  Schedule X, Form XII, Trade license, Share certificate,
                  Member's register, share transfer register, eTIN, BIN,
                  Membership certificate, IRC, ERC
                </th>
                <tr className="border border-slate-600">
                  <div className="overflow-x-auto">
                    <table className="table w-full">
                      <tbody>
                        {/* row 1 */}
                        <tr className="border border-slate-600">
                          <th className="border border-slate-600">
                            Schedule X
                          </th>
                          <td className="border border-slate-600">
                            <select className="select select-bordered max-w-xs">
                              <option selected>YES</option>
                              <option>NO</option>
                              <option>N/A</option>
                            </select>
                          </td>
                          <td className="border border-slate-600">2018</td>
                          <td className="border border-slate-600">
                            Pending for 3 years
                          </td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                          <th className="border border-slate-600">Form XII</th>
                          <td className="border border-slate-600">
                            <select className="select select-bordered max-w-xs">
                              <option selected>YES</option>
                              <option>NO</option>
                              <option>N/A</option>
                            </select>
                          </td>
                          <td className="border border-slate-600">2018</td>
                          <td className="border border-slate-600">
                            Pending for 3 years
                          </td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                          <th className="border border-slate-600">
                            Trade license
                          </th>
                          <td className="border border-slate-600">
                            <select className="select select-bordered max-w-xs">
                              <option selected>YES</option>
                              <option>NO</option>
                              <option>N/A</option>
                            </select>
                          </td>
                          <td className="border border-slate-600">2018</td>
                          <td className="border border-slate-600">
                            Pending for 3 years
                          </td>
                        </tr>
                        {/* row 4 */}
                        <tr>
                          <th className="border border-slate-600">
                            Income tax return
                          </th>
                          <td className="border border-slate-600">
                            <select className="select select-bordered max-w-xs">
                              <option selected>YES</option>
                              <option>NO</option>
                              <option>N/A</option>
                            </select>
                          </td>
                          <td className="border border-slate-600">2018</td>
                          <td className="border border-slate-600">
                            Pending for 3 years
                          </td>
                        </tr>
                        {/* row 5 */}
                        <tr>
                          <th className="border border-slate-600">
                            VAT return
                          </th>
                          <td className="border border-slate-600">
                            <select className="select select-bordered max-w-xs">
                              <option selected>YES</option>
                              <option>NO</option>
                              <option>N/A</option>
                            </select>
                          </td>
                          <td className="border border-slate-600">2018</td>
                          <td className="border border-slate-600">
                            Pending for 3 years
                          </td>
                        </tr>
                        {/* row 6 */}
                        <tr className="border border-slate-600">
                          <th className="border border-slate-600">
                            Share certificate
                          </th>
                          <td className="border border-slate-600">
                            <select className="select select-bordered max-w-xs">
                              <option selected>YES</option>
                              <option>NO</option>
                              <option>N/A</option>
                            </select>
                          </td>
                          <td className="border border-slate-600">2018</td>
                          <td className="border border-slate-600">
                            Pending for 3 years
                          </td>
                        </tr>
                        {/* row 7 */}
                        <tr className="border border-slate-600">
                          <th className="border border-slate-600">
                            Member's register
                          </th>
                          <td className="border border-slate-600">
                            <select className="select select-bordered max-w-xs">
                              <option selected>YES</option>
                              <option>NO</option>
                              <option>N/A</option>
                            </select>
                          </td>
                          <td className="border border-slate-600">2018</td>
                          <td className="border border-slate-600">
                            Pending for 3 years
                          </td>
                        </tr>
                        {/* row 8 */}
                        <tr className="border border-slate-600">
                          <th className="border border-slate-600">
                            Membership certificate
                          </th>
                          <td className="border border-slate-600">
                            <select className="select select-bordered max-w-xs">
                              <option selected>YES</option>
                              <option>NO</option>
                              <option>N/A</option>
                            </select>
                          </td>
                          <td className="border border-slate-600">2018</td>
                          <td className="border border-slate-600">
                            Pending for 3 years
                          </td>
                        </tr>
                        {/* row 9 */}
                        <tr className="border border-slate-600">
                          <th className="border border-slate-600">IRC</th>
                          <td className="border border-slate-600">
                            <select className="select select-bordered max-w-xs">
                              <option selected>YES</option>
                              <option>NO</option>
                              <option>N/A</option>
                            </select>
                          </td>
                          <td className="border border-slate-600">2018</td>
                          <td className="border border-slate-600">
                            Pending for 3 years
                          </td>
                        </tr>
                        {/* row 10 */}
                        <tr className="border border-slate-600">
                          <th className="border border-slate-600">ERC</th>
                          <td className="border border-slate-600">
                            <select className="select select-bordered max-w-xs">
                              <option selected>YES</option>
                              <option>NO</option>
                              <option>N/A</option>
                            </select>
                          </td>
                          <td className="border border-slate-600">2018</td>
                          <td className="border border-slate-600">
                            Pending for 3 years
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </tr>
              </td>
            </tr>
            {/* row 2 */}
            <tr className="border border-slate-600">
              <th className="border border-slate-600">Nature of control</th>
              <td className="border border-slate-600">Manual</td>
            </tr>
            {/* row 3 */}
            <tr className="border border-slate-600">
              <th className="border border-slate-600">Frequency</th>
              <td className="border border-slate-600">Annual</td>
            </tr>
            {/* row 4 */}
            <tr className="border border-slate-600">
              <th className="border border-slate-600">Risk of failure</th>
              <td className="border border-slate-600">High</td>
            </tr>
            {/* row 5 */}
            <tr className="border border-slate-600">
              <th className="border border-slate-600">Assertions</th>
              <td className="border border-slate-600">Presentation</td>
            </tr>
            {/* row 6 */}
            <tr className="border border-slate-600">
              <th className="border border-slate-600">Sample size</th>
              <td className="border border-slate-600">N/A</td>
            </tr>
            {/* row 7 */}
            <tr className="border border-slate-600">
              <th className="border border-slate-600">Sampling technique</th>
              <td className="border border-slate-600">
                Review notes and disclosers of financial statements in
                compliance with IFRS presentation template
              </td>
            </tr>
            {/* row 8 */}
            <tr className="border border-slate-600">
              <th className="border border-slate-600">Testing procedure</th>
              <td className="border border-slate-600">N/A</td>
            </tr>
            {/* row 9 */}
            <tr className="border border-slate-600">
              <th className="border border-slate-600">Observation</th>
              <td className="border border-slate-600">
                Discussed and requested us to advise for modification of notes
              </td>
            </tr>
            {/* row 10 */}
            <tr className="border border-slate-600">
              <th className="border border-slate-600">TOE conclusion</th>
              <td className="border border-slate-600"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Toe;
