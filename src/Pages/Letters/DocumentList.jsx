import React from "react";

const DocumentList = () => {
  return (
    <div className="p-6 bg-white">
      <h1>Dear Sir (s)/Madam</h1>
      <p>
        As salamu alaikum. We need the following missing documents for the
        purpose of commencement of our audit ASAP .
      </p>
      <div className="mx-auto">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}

            <tbody>
              {/* row 1 */}
              <tr>
                <td>Name of the client entity [as per COI]</td>
                <td>Quality Control Specialist</td>
              </tr>
              {/* row 2 */}
              <tr>
                <td>For the year ended</td>
                <td>Desktop Support Technician</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>Desktop Support Technician</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DocumentList;
