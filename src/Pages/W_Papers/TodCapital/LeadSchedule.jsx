import React from "react";

const LeadSchedule = () => {
  return (
    <div>
      <div className="flex justify-between mt-4">
        <h6 className="my-8 text-xl">Lead Schedule - Share capital</h6>
        <div className="badge badge-primary">SFP 12/4</div>
      </div>
      <table className="overflow-x-auto text-sm">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>
              <div className="text-center">
                <tr>
                  30 June{" "}
                  <input
                    type="number"
                    placeholder="Type here"
                    className="input input-bordered input-xs w-20 max-w-xs ms-3"
                  />
                </tr>
                <hr />
                <tr>BDT</tr>
              </div>
            </th>
            <th>
              <div className="text-center">
                <tr>
                  30 June{" "}
                  <input
                    type="number"
                    placeholder="Type here"
                    className="input input-bordered input-xs w-20 max-w-xs ms-3"
                  />
                </tr>
                <hr />
                <tr>BDT</tr>
              </div>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12</td>
            <td>Share capital</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>12.01</td>
            <td>
              <h1>Authorized capital</h1>
              <p className="text-base">
                11000000 ordinary shares of Tk 100 each
              </p>
            </td>
            <td></td>
            <td></td>
            <td>100000000</td>
            <td>100000000</td>
            <td>MOA attached</td>
          </tr>
          <tr>
            <td>12.02</td>
            <td>
              <h1>Issued, subscribed, called up and paid up capital</h1>
              <p>50000 ordinary Shares of Tk 100 each</p>
            </td>
            <td></td>
            <td></td>
            <td>5000000</td>
            <td>5000000</td>
            <td>Schedule X attached</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>No of Shares</td>
            <td>Ratio</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>Muhammad A Rouf</td>
            <td>25000</td>
            <td>50%</td>
            <td>2500000</td>
            <td>2500000</td>
            <td>Schedule X & Form XII attached</td>
          </tr>
          <tr>
            <td></td>
            <td>Syed Mahbub</td>
            <td>15000</td>
            <td>30%</td>
            <td>1500000</td>
            <td>1500000</td>
            <td>Schedule X & Form XII attached</td>
          </tr>
          <tr>
            <td></td>
            <td>Shams Iftakhar</td>
            <td>5000</td>
            <td>10%</td>
            <td>500000</td>
            <td>500000</td>
            <td>Schedule X & Form XII attached</td>
          </tr>
          <tr>
            <td></td>
            <td>A Afruza Mahbub</td>
            <td>5000</td>
            <td>10%</td>
            <td>500000</td>
            <td>500000</td>
            <td>Schedule X & Form XII attached</td>
          </tr>
          <tr>
            <td></td>
            <td>A Afruza Mahbub</td>
            <td>5000</td>
            <td>10%</td>
            <td>500000</td>
            <td>500000</td>
            <td>Schedule X & Form XII attached</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>50000</td>
            <td>100%</td>
            <td>5000000</td>
            <td>5000000</td>
            <td></td>
          </tr>
          <tr>
            <td>13</td>
            <td>Call-in-arrear</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>Muhammad A Rouf</td>
            <td>1000</td>
            <td>2%</td>
            <td>50000</td>
            <td>100000</td>
            <td>Schedule X & Form XII attached</td>
          </tr>
          <tr>
            <td></td>
            <td>Syed Mahbub</td>
            <td>1000</td>
            <td>2%</td>
            <td>50000</td>
            <td>300000</td>
            <td>Schedule X & Form XII attached</td>
          </tr>
          <tr>
            <td>14</td>
            <td>Share money deposit</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>A Afruza Mahbub</td>
            <td>1000</td>
            <td>2%</td>
            <td>100000</td>
            <td>400000</td>
            <td>Schedule X & Form XII attached</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>1000</td>
            <td>2%</td>
            <td>100000</td>
            <td>400000</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LeadSchedule;
