import React from "react";

const AuditSampling = () => {
  return (
    <div>
      <div className="flex justify-between mt-4">
        <h6 className="my-8 text-xl">Audit Sampling: Share capital ISA 530</h6>
        <div className="badge badge-primary">SFP 12/6</div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>
                <tr>
                  30 June
                  <input
                    type="number"
                    placeholder="Type here"
                    className="input input-bordered input-xs w-20 max-w-xs ms-3"
                  />
                </tr>
                <hr />
                <tr>BDT</tr>
                <hr />
                <tr>Balance</tr>
              </th>
              <th>
                <tr> </tr>
                <tr> </tr>
                <tr>transactions</tr>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="bg-base-200">
              <th>
                <tr>
                  Major transactions or regulatory requirements of Share capital
                </tr>
                <tr>Total as per financial statements</tr>
              </th>
              <td className="border-b-2 border-black">
                <tr className="border-b-2 border-black">5000000</tr>
                <hr />
                <tr>5000000</tr>
              </td>
              <td className="border-b-2 border-black">
                <tr className="border-b-2 border-black">100000</tr>
                <hr />
                <tr>100000</tr>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>Items Checked</th>
              <td></td>
              <td></td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                <tr>Substantive Test</tr>
                <tr>Test of control</tr>
              </th>
              <td className="border-b-2 border-black">
                <tr>-</tr>
                <tr>5000000</tr>
              </td>
              <td className="border-b-2 border-black">
                <tr>-</tr>
                <tr>5000000</tr>
              </td>
            </tr>
            <tr>
              <th></th>
              <td className="border-b-2 border-black">
                <tr>5000000</tr>
              </td>
              <td className="border-b-2 border-black">
                <tr>5000000</tr>
              </td>
            </tr>
            <tr>
              <th className="border-b-2 border-black">
                <tr>% of test</tr>
                <tr>Items not checked</tr>
              </th>
              <td className="border-b-2 border-black">
                <tr>100%</tr>
                <tr>-</tr>
              </td>
              <td className="border-b-2 border-black">
                <tr>100%</tr>
                <tr>-</tr>
              </td>
            </tr>
            <tr>
              <th className="border border-black">Total</th>
              <td className="border border-black">5000000</td>
              <td className="border border-black">100000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuditSampling;
