import React from "react";

const SummarySheet = () => {
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter Company Name"
          className="input input-bordered input-success w-full max-w-xs mb-3"
        />
        <br />
        <input
          type="text"
          placeholder="Enter Company Address"
          className="input input-bordered input-success w-96 max-w-xs"
        />
        <hr className="my-4" />
      </div>
      <div className="my-10">
        <div className="flex justify-between mt-4">
          <h4>SUMMARY SHEET - Share capital</h4>
          <div className="badge badge-primary p-3">SFP 12/1</div>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>
                  <tr>
                    30 June{" "}
                    <input
                      type="number"
                      placeholder="Type here"
                      className="input input-bordered input-xs w-20 max-w-xs ms-3"
                    />
                  </tr>
                  <hr className="my-3 text-black" />
                  <tr>BDT</tr>
                </th>
                <th>
                  <tr>
                    30 June{" "}
                    <input
                      type="number"
                      placeholder="Type here"
                      className="input input-bordered input-xs w-20 max-w-xs"
                    />
                  </tr>
                  <hr className="my-3 text-black" />
                  <tr>BDT</tr>
                </th>
                <th>
                  <tr>Changes</tr>
                  <hr className="my-3 text-black" />
                  <tr className="w-full text-center">BDT</tr>
                </th>
                <th>
                  <tr> </tr>
                  <hr className="my-3 text-black" />
                  <tr>%</tr>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="bg-base-200">
                <th>
                  <tr className="text-sm">Share capital</tr>
                  <hr className="my-3 text-black" />
                  <tr className="text-base">TOTAL</tr>
                </th>
                <td>Note 12</td>
                <td>
                  <tr>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="input input-bordered input-xs w-40 max-w-xs"
                    />
                  </tr>
                  <hr className="my-3 text-black" />
                  <tr>5000000</tr>
                </td>
                <td>
                  <tr>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="input input-bordered input-xs w-40 max-w-xs"
                    />
                  </tr>
                  <hr className="my-3 text-black" />
                  <tr>5000000</tr>
                </td>
                <td>
                  <tr>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="input input-bordered input-xs w-40 max-w-xs"
                    />
                  </tr>
                  <hr className="my-3 text-black" />
                  <tr>5000000</tr>
                </td>
                <td>
                  <tr>50%</tr>
                  <hr className="my-3 text-black" />
                  <tr>50%</tr>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>
                  <tr className="text-sm">Calls-in-arrear</tr>
                  <hr className="my-3 text-black" />
                  <tr className="text-base">TOTAL</tr>
                </th>
                <td>Note 13</td>
                <td>
                  <tr>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="input input-bordered input-xs w-40 max-w-xs"
                    />
                  </tr>
                  <hr className="my-3 text-black" />
                  <tr>5000000</tr>
                </td>
                <td>
                  <tr>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="input input-bordered input-xs w-40 max-w-xs"
                    />
                  </tr>
                  <hr className="my-3 text-black" />
                  <tr>5000000</tr>
                </td>
                <td>
                  <tr>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="input input-bordered input-xs w-40 max-w-xs"
                    />
                  </tr>
                  <hr className="my-3 text-black" />
                  <tr>5000000</tr>
                </td>
                <td>
                  <tr>50%</tr>
                  <hr className="my-3 text-black" />
                  <tr>50%</tr>
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>
                  <tr className="text-sm">Share-money-deposit</tr>
                  <hr className="my-3 text-black" />
                  <tr className="text-base">TOTAL</tr>
                </th>
                <td>Note 14</td>
                <td>
                  <tr>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="input input-bordered input-xs w-40 max-w-xs"
                    />
                  </tr>
                  <hr className="my-3 text-black" />
                  <tr>5000000</tr>
                </td>
                <td>
                  <tr>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="input input-bordered input-xs w-40 max-w-xs"
                    />
                  </tr>
                  <hr className="my-3 text-black" />
                  <tr>5000000</tr>
                </td>
                <td>
                  <tr>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="input input-bordered input-xs w-40 max-w-xs"
                    />
                  </tr>
                  <hr className="my-3 text-black" />
                  <tr>5000000</tr>
                </td>
                <td>
                  <tr>50%</tr>
                  <hr className="my-3" />
                  <tr>50%</tr>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <table className="overflow-x-auto w-full border-separate border border-spacing-[7px] border-slate-600">
        <thead>
          <tr className="text-center">
            <th className="border border-slate-600">Sl#</th>
            <th className="border border-slate-600">Activities</th>
            <th className="border border-slate-600">Yes/No/N/A</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-600">1</td>
            <td className="border border-slate-600">
              IAS 1 : Policies and disclosure notes as per IFRSs given in the
              financial statements
            </td>
            <td className="border border-slate-600">
              <select className="select select-bordered max-w-xs">
                <option selected>YES</option>
                <option>NO</option>
                <option>N/A</option>
              </select>
            </td>
          </tr>
          <tr className="border border-slate-600">
            <td className="border border-slate-600">2</td>
            <td className="border border-slate-600">
              <tr className="border border-slate-600">
                Audit Opinion : Any modification needed as per ISA 705
              </tr>
              <hr />
              <tr>No modification needed</tr>
            </td>
            <td className="border border-slate-600">
              <select className="select select-bordered max-w-xs">
                <option selected>YES</option>
                <option>NO</option>
                <option>N/A</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="border border-slate-600">3</td>
            <td className="border border-slate-600">
              <tr>Management letter point, if any</tr>
              <hr />
              <tr>No management letter points</tr>
            </td>
            <td className="border border-slate-600">
              <select className="select select-bordered max-w-xs">
                <option selected>YES</option>
                <option>NO</option>
                <option>N/A</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
};

export default SummarySheet;
