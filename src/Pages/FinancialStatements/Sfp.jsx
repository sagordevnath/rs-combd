import React from "react";
import "./Sfp.css";

const Sfp = () => {
  return (
    <div>
      <div className="w-auto">
        <div className="note-header pt-3">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="address text-start">
                  <h5 className="mb-1">RS Communications Limited</h5>
                  <p className="mb-0">
                    23/D/1, Free School Street, Box Culvert Road, Dhaka-1205,
                    Bangladesh.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col mt-2">
                <h5>Statement of financial Position</h5>
              </div>
            </div>
            <div className="row pr-0">
              <div className="col-6">
                <p className="text-start pb-1">As at 30 June 2023</p>
              </div>
              <div className="col-6">
                <p className="text-center border-btm-2 pb-1">
                  In Bangladesh Taka
                </p>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-1 offset-5">
                <p className="border-btm-2 text-end">Notes</p>
              </div>
              <div className="col-2 ">
                <p className="border-btm-2 text-end">30 June 2023</p>
              </div>
              <div className="col-2">
                <p className="border-btm-2 text-end">30 June 2022</p>
              </div>
              <div className="col-2">
                <p className="border-btm-2 text-end">30 June 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col border-btm-2 text start mb-1">
              <h5>Assets</h5>
            </div>
          </div>
          <div className="row">
            <div className="col mb-2">
              <h6>Non current Assets</h6>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="single-note">
            <div className="row mb-2">
              <div className="col-5 offset-1 d-flex justify-content-between">
                <select
                  className="form-select bg-transparent text-white border-none"
                  aria-label="Default select example"
                >
                  <option selected>Property, plant and equipment</option>
                  <option value="1">Right-of-use asset</option>
                  <option value="2">Goodwill</option>
                  <option value="3">Intangible assets</option>
                  <option value="4">Investment property</option>
                  <option value="5">Interests in joint ventures</option>
                  <option value="6">Investment in associates</option>
                  <option value="7">Investments in financial assets</option>
                  <option value="8">
                    Investments in financial assets with related parties
                  </option>
                  <option value="9">Derivative financial instruments</option>
                  <option value="10">Finance lease receivables</option>
                  <option value="11">Contract assets</option>
                  <option value="12">Contract costs</option>
                  <option value="13">Deferred tax asset </option>
                </select>
                <p>4</p>
              </div>
              <div className="col-2">
                <p className="text-end">2,938,477</p>
              </div>
              <div className="col-2">
                <p className="text-end">2,938,477</p>
              </div>
              <div className="col-2 d-flex flex-row-reverse">
                <p className="text-end">2,938,477</p>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-5 offset-1 border-btm d-flex justify-content-between">
                <select
                  className="form-select bg-transparent text-white border-none"
                  aria-label="Default select example"
                >
                  <option selected>Intangible assets</option>
                  <option value="1">Property, plant and equipment</option>
                  <option value="2">Right-of-use asset</option>
                  <option value="3">Goodwill</option>
                  <option value="4">Investment property</option>
                  <option value="5">Interests in joint ventures</option>
                  <option value="6">Investment in associates</option>
                  <option value="7">Investments in financial assets</option>
                  <option value="8">
                    Investments in financial assets with related parties
                  </option>
                  <option value="9">Derivative financial instruments</option>
                  <option value="10">Finance lease receivables</option>
                  <option value="11">Contract assets</option>
                  <option value="12">Contract costs</option>
                  <option value="13">Deferred tax asset </option>
                </select>
                <p>5</p>
              </div>
              <div className="col-2">
                <p className="text-end border-btm mb-negative">314,923</p>
              </div>
              <div className="col-2">
                <p className="text-end border-btm margin-btm-2 mb-negative">
                  314,923
                </p>
              </div>
              <div className="col-2 d-flex flex-row-reverse border-btm">
                <p className="text-end mb-positive">2,938,477</p>
              </div>
            </div>
            <div className="row">
              <div className="col-5 offset-1">
                <h5>Total Non Current Assets</h5>
              </div>
              <div className="col-2">
                <p className="text-end fw-bold">7,576,078</p>
              </div>
              <div className="col-2">
                <p className="text-end fw-bold">2,623,554</p>
              </div>
              <div className="col-2">
                <p className="text-end fw-bold">2,623,554</p>
              </div>
            </div>
            <div className=" border-btm-2"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col mb-2">
              <h6>Current Assets</h6>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="single-note">
            <div className="row">
              <div className="col-5 offset-1 d-flex justify-content-between">
                <select
                  className="form-select bg-transparent text-white border-none"
                  aria-label="Default select example"
                >
                  <option selected>Inventories</option>
                  <option value="1">Contract assets</option>
                  <option value="2">Right to returned goods assets</option>
                  <option value="3">Trade and other receivables</option>
                  <option value="4">Receivables from related parties</option>
                  <option value="5">Advances, deposits and prepayments</option>
                  <option value="6">Advance income tax</option>
                  <option value="7">Finance lease receivables</option>
                  <option value="8">Investments in financial assets</option>
                  <option value="9">Current financial assets</option>
                  <option value="10">Cash and cash equivalents</option>
                  <option value="11">Assets classified as held for sale</option>
                </select>
                <p>6</p>
              </div>
              <div className="col-2">
                <p className="text-end">2,938,477</p>
              </div>
              <div className="col-2">
                <p className="text-end">2,938,477</p>
              </div>
              <div className="col-2 d-flex flex-row-reverse">
                <p className="text-end">2,938,477</p>
              </div>
            </div>
            <div className="row">
              <div className="col-5 offset-1 d-flex justify-content-between">
                <select
                  className="form-select bg-transparent text-white border-none"
                  aria-label="Default select example"
                >
                  <option selected>Trade and other receivables</option>
                  <option value="1">Inventories</option>
                  <option value="2">Contract assets</option>
                  <option value="3">Right to returned goods assets</option>
                  <option value="4">Receivables from related parties</option>
                  <option value="5">Advances, deposits and prepayments</option>
                  <option value="6">Advance income tax</option>
                  <option value="7">Finance lease receivables</option>
                  <option value="8">Investments in financial assets</option>
                  <option value="9">Current financial assets</option>
                  <option value="10">Cash and cash equivalents</option>
                  <option value="11">Assets classified as held for sale</option>
                </select>
                <p>7</p>
              </div>
              <div className="col-2">
                <p className="text-end">(314,923)</p>
              </div>
              <div className="col-2">
                <p className="text-end">(314,923)</p>
              </div>
              <div className="col-2 d-flex flex-row-reverse">
                <input
                  className="input input-group input-group-sm mb-1"
                  type="number"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-5 offset-1 d-flex justify-content-between">
                <select
                  className="form-select bg-transparent text-white border-none"
                  aria-label="Default select example"
                >
                  <option selected>Receivables from related parties</option>
                  <option value="1">Inventories</option>
                  <option value="2">Contract assets</option>
                  <option value="3">Right to returned goods assets</option>
                  <option value="4">Trade and other receivables</option>
                  <option value="5">Advances, deposits and prepayments</option>
                  <option value="6">Advance income tax</option>
                  <option value="7">Finance lease receivables</option>
                  <option value="8">Investments in financial assets</option>
                  <option value="9">Current financial assets</option>
                  <option value="10">Cash and cash equivalents</option>
                  <option value="11">Assets classified as held for sale</option>
                </select>
                <p>8</p>
              </div>
              <div className="col-2">
                <p className="text-end">(314,923)</p>
              </div>
              <div className="col-2">
                <p className="text-end">(314,923)</p>
              </div>
              <div className="col-2 d-flex flex-row-reverse">
                <input
                  className="input input-group input-group-sm mb-1"
                  type="number"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-5 offset-1 d-flex justify-content-between">
                <select
                  className="form-select bg-transparent text-white border-none"
                  aria-label="Default select example"
                >
                  <option selected>Finance lease receivables</option>
                  <option value="1">Inventories</option>
                  <option value="2">Contract assets</option>
                  <option value="3">Right to returned goods assets</option>
                  <option value="4">Receivables from related parties</option>
                  <option value="5">Advances, deposits and prepayments</option>
                  <option value="6">Advance income tax</option>
                  <option value="7">Trade and other receivables</option>
                  <option value="8">Investments in financial assets</option>
                  <option value="9">Current financial assets</option>
                  <option value="10">Cash and cash equivalents</option>
                  <option value="11">Assets classified as held for sale</option>
                </select>
                <p>9</p>
              </div>
              <div className="col-2">
                <p className="text-end">(314,923)</p>
              </div>
              <div className="col-2">
                <p className="text-end">(314,923)</p>
              </div>
              <div className="col-2 d-flex flex-row-reverse">
                <input
                  className="input input-group input-group-sm mb-1"
                  type="number"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-5 offset-1 d-flex justify-content-between">
                <select
                  className="form-select bg-transparent text-white border-none"
                  aria-label="Default select example"
                >
                  <option selected>Advance income tax</option>
                  <option value="1">Inventories</option>
                  <option value="2">Contract assets</option>
                  <option value="3">Right to returned goods assets</option>
                  <option value="4">Receivables from related parties</option>
                  <option value="5">Advances, deposits and prepayments</option>
                  <option value="6">Trade and other receivables</option>
                  <option value="7">Finance lease receivables</option>
                  <option value="8">Investments in financial assets</option>
                  <option value="9">Current financial assets</option>
                  <option value="10">Cash and cash equivalents</option>
                  <option value="11">Assets classified as held for sale</option>
                </select>
                <p>10</p>
              </div>
              <div className="col-2">
                <p className="text-end">(314,923)</p>
              </div>
              <div className="col-2">
                <p className="text-end">(314,923)</p>
              </div>
              <div className="col-2 d-flex flex-row-reverse">
                <p className="text-end">(314,923)</p>
              </div>
            </div>
            <div className="row">
              <div className="col-5 offset-1 border-btm d-flex justify-content-between">
                <select
                  className="form-select bg-transparent text-white border-none"
                  aria-label="Default select example"
                >
                  <option selected>Cash and cash equivalents</option>
                  <option value="1">Inventories</option>
                  <option value="2">Contract assets</option>
                  <option value="3">Right to returned goods assets</option>
                  <option value="4">Receivables from related parties</option>
                  <option value="5">Advances, deposits and prepayments</option>
                  <option value="6">Trade and other receivables</option>
                  <option value="7">Finance lease receivables</option>
                  <option value="8">Investments in financial assets</option>
                  <option value="9">Current financial assets</option>
                  <option value="10">Advance income tax</option>
                  <option value="11">Assets classified as held for sale</option>
                </select>
                <p>11</p>
              </div>
              <div className="col-2">
                <p className="text-end border-btm">(314,923)</p>
              </div>
              <div className="col-2">
                <p className="text-end border-btm">(314,923)</p>
              </div>
              <div className="col-2 d-flex flex-row-reverse border-btm">
                <input
                  className="input input-group input-group-sm mb-1"
                  type="number"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-5 offset-1">
                <h5>Total current assets</h5>
              </div>
              <div className="col-2">
                <p className="text-end fw-bold">7,576,078</p>
              </div>
              <div className="col-2">
                <p className="text-end fw-bold">2,623,554</p>
              </div>
              <div className="col-2">
                <p className="text-end fw-bold">2,623,554</p>
              </div>
            </div>
          </div>
          <div className="border-btm-2"></div>
          <div className="row">
            <div className="col-6 -2">
              <h5>Total Assets</h5>
            </div>
            <div className="col-2">
              <p className="text-end  fw-bold">7,576,078</p>
            </div>
            <div className="col-2">
              <p className="text-end  fw-bold">2,623,554</p>
            </div>
            <div className="col-2">
              <p className="text-end  fw-bold">2,623,554</p>
            </div>
          </div>
          <div className="border-btm-3"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col text start mb-1 mt-4">
              <h5>EQUITY AND LIABILITIES</h5>
            </div>
          </div>
          <div className=" border-btm-2"></div>
          <div className="row">
            <div className="col mb-2">
              <h6>Shareholders' equity</h6>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="single-note">
            <div className="row">
              <div className="col-5 offset-1 d-flex justify-content-between">
                <select
                  className="form-select bg-transparent text-white border-none"
                  aria-label="Default select example"
                >
                  <option selected>Share capital</option>
                  <option value="1">Calls-in-arrear</option>
                  <option value="2">Retained earnings</option>
                  <option value="3">Share money deposit</option>
                  <option value="4">Capital reserve</option>
                </select>
                <p>12</p>
              </div>
              <div className="col-2">
                <p className="text-end">2,938,477</p>
              </div>
              <div className="col-2">
                <p className="text-end">2,938,477</p>
              </div>
              <div className="col-2 d-flex flex-row-reverse">
                <input
                  className="input input-group input-group-sm mb-1"
                  type="number"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-5 offset-1 d-flex justify-content-between">
                <select
                  className="form-select bg-transparent text-white border-none"
                  aria-label="Default select example"
                >
                  <option selected>Calls-in-arrear</option>
                  <option value="1">Share capital</option>
                  <option value="2">Retained earnings</option>
                  <option value="3">Share money deposit</option>
                  <option value="4">Capital reserve</option>
                </select>
                <p>13</p>
              </div>
              <div className="col-2">
                <p className="text-end">2,938,477</p>
              </div>
              <div className="col-2">
                <p className="text-end">2,938,477</p>
              </div>
              <div className="col-2 d-flex flex-row-reverse">
                <input
                  className="input input-group input-group-sm mb-1"
                  type="number"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-5 offset-1 d-flex justify-content-between">
                <select
                  className="form-select bg-transparent text-white border-none"
                  aria-label="Default select example"
                >
                  <option selected>Share money deposit</option>
                  <option value="1">Share capital</option>
                  <option value="2">Retained earnings</option>
                  <option value="3">Calls-in-arrear</option>
                  <option value="4">Capital reserve</option>
                </select>
                <p>14</p>
              </div>
              <div className="col-2">
                <p className="text-end">2,938,477</p>
              </div>
              <div className="col-2">
                <p className="text-end">2,938,477</p>
              </div>
              <div className="col-2 d-flex flex-row-reverse">
                <input
                  className="input input-group input-group-sm mb-1"
                  type="number"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-5 offset-1 border-btm-2 d-flex justify-content-between">
                <select
                  className="form-select bg-transparent text-white border-none"
                  aria-label="Default select example"
                >
                  <option selected>Retained earnings</option>
                  <option value="1">Share capital</option>
                  <option value="2">Calls-in-arrear</option>
                  <option value="3">Share money deposit</option>
                  <option value="4">Capital reserve</option>
                </select>
                <p>15</p>
              </div>
              <div className="col-2">
                <p className="text-end border-btm-2">314,923</p>
              </div>
              <div className="col-2">
                <p className="text-end border-btm-2">314,923</p>
              </div>
              <div className="col-2 d-flex flex-row-reverse border-btm-2">
                <p className="text-end">314,923</p>
              </div>
            </div>
            <div className="row border-btm-2">
              <div className="col-5 offset-1 border-btm-2">
                <h5>Total equity</h5>
              </div>
              <div className="col-2">
                <p className="text-end fw-bold border-btm-2">7,576,078</p>
              </div>
              <div className="col-2">
                <p className="text-end fw-bold border-btm-2">2,623,554</p>
              </div>
              <div className="col-2">
                <p className="text-end fw-bold border-btm-2">2,623,554</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col mb-2">
              <h6>Non-current liabilities</h6>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="single-note">
            <div className="row">
              <div className="col-5 offset-1 d-flex justify-content-between">
                <select
                  className="form-select bg-transparent text-white border-none"
                  aria-label="Default select example"
                >
                  <option selected>Borrowings from bank</option>
                  <option value="1">
                    Financial liabilities with related parties
                  </option>
                  <option value="2">Lease liabilities</option>
                  <option value="3">Contract liabilities</option>
                  <option value="4">Retirement benefit obligations</option>
                  <option value="5">Liability for share-based payments</option>
                  <option value="6">Deferred income</option>
                  <option value="7">Provisions</option>
                  <option value="8">Deferred tax liabilities</option>
                </select>
                <p>16</p>
              </div>
              <div className="col-2">
                <p className="text-end">2,938,477</p>
              </div>
              <div className="col-2">
                <p className="text-end">2,938,477</p>
              </div>
              <div className="col-2 d-flex flex-row-reverse">
                <input
                  className="input input-group input-group-sm mb-1"
                  type="number"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-5 offset-1 d-flex justify-content-between">
                <select
                  className="form-select bg-transparent text-white border-none"
                  aria-label="Default select example"
                >
                  <option selected>Deferred tax liabilities</option>
                  <option value="1">
                    Financial liabilities with related parties
                  </option>
                  <option value="2">Lease liabilities</option>
                  <option value="3">Contract liabilities</option>
                  <option value="4">Retirement benefit obligations</option>
                  <option value="5">Liability for share-based payments</option>
                  <option value="6">Deferred income</option>
                  <option value="7">Provisions</option>
                  <option value="8">Borrowings from bank</option>
                </select>
                <p>17</p>
              </div>
              <div className="col-2">
                <p className="text-end">(314,923)</p>
              </div>
              <div className="col-2">
                <p className="text-end">(314,923)</p>
              </div>
              <div className="col-2 d-flex flex-row-reverse">
                <input
                  className="input input-group input-group-sm mb-1"
                  type="number"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-5 offset-1 d-flex justify-content-between border-btm">
                <select
                  className="form-select bg-transparent text-white border-none"
                  aria-label="Default select example"
                >
                  <option selected>
                    Financial liabilities with related parties
                  </option>
                  <option value="1">Deferred tax liabilities</option>
                  <option value="2">Lease liabilities</option>
                  <option value="3">Contract liabilities</option>
                  <option value="4">Retirement benefit obligations</option>
                  <option value="5">Liability for share-based payments</option>
                  <option value="6">Deferred income</option>
                  <option value="7">Provisions</option>
                  <option value="8">Borrowings from bank</option>
                </select>
                <p>18</p>
              </div>
              <div className="col-2">
                <p className="text-end border-btm">(314,923)</p>
              </div>
              <div className="col-2">
                <p className="text-end border-btm">(314,923)</p>
              </div>
              <div className="col-2 d-flex flex-row-reverse border-btm">
                <input
                  className="input input-group input-group-sm mb-1"
                  type="number"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-5 offset-1 border-btm-2">
                <h5>Total non-current liabilities</h5>
              </div>
              <div className="col-2">
                <p className="text-end fw-bold border-btm-2">7,576,078</p>
              </div>
              <div className="col-2">
                <p className="text-end fw-bold border-btm-2">2,623,554</p>
              </div>
              <div className="col-2">
                <p className="text-end fw-bold border-btm-2">2,623,554</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col mb-2">
              <h6>Current liabilities</h6>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="single-note">
            <div className="row">
              <div className="col-5 offset-1 d-flex justify-content-between">
                <select
                  className="form-select bg-transparent text-white border-none"
                  aria-label="Default select example"
                >
                  <option selected>
                    Borrowings from bank - current portion
                  </option>
                  <option value="1">Short-term financial liabilities</option>
                  <option value="2">Trade and other payables</option>
                  <option value="3">Advance received from customers</option>
                  <option value="4">
                    Financial liabilities with related parties
                  </option>
                  <option value="5">Current tax payable</option>
                  <option value="6">Provision for expense</option>
                </select>
                <p>19</p>
              </div>
              <div className="col-2">
                <p className="text-end">2,938,477</p>
              </div>
              <div className="col-2">
                <p className="text-end">2,938,477</p>
              </div>
              <div className="col-2 d-flex flex-row-reverse">
                <input
                  className="input input-group input-group-sm mb-1"
                  type="number"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-5 offset-1 d-flex justify-content-between">
                <select
                  className="form-select bg-transparent text-white border-none"
                  aria-label="Default select example"
                >
                  <option selected>Trade and other payables</option>
                  <option value="1">Short-term financial liabilities</option>
                  <option value="2">
                    Borrowings from bank - current portion
                  </option>
                  <option value="3">Advance received from customers</option>
                  <option value="4">
                    Financial liabilities with related parties
                  </option>
                  <option value="5">Current tax payable</option>
                  <option value="6">Provision for expense</option>
                </select>
                <p>20</p>
              </div>
              <div className="col-2">
                <p className="text-end">(314,923)</p>
              </div>
              <div className="col-2">
                <p className="text-end">(314,923)</p>
              </div>
              <div className="col-2 d-flex flex-row-reverse">
                <input
                  className="input input-group input-group-sm mb-1"
                  type="number"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-5 offset-1 d-flex justify-content-between">
                <select
                  className="form-select bg-transparent text-white border-none"
                  aria-label="Default select example"
                >
                  <option selected>Current tax payable</option>
                  <option value="1">Short-term financial liabilities</option>
                  <option value="2">Trade and other payables</option>
                  <option value="3">Advance received from customers</option>
                  <option value="4">
                    Financial liabilities with related parties
                  </option>
                  <option value="5">
                    Borrowings from bank - current portion
                  </option>
                  <option value="6">Provision for expense</option>
                </select>
                <p>21</p>
              </div>
              <div className="col-2">
                <p className="text-end">(314,923)</p>
              </div>
              <div className="col-2">
                <p className="text-end">(314,923)</p>
              </div>
              <div className="col-2 d-flex flex-row-reverse">
                <p className="text-end">(314,923)</p>
              </div>
            </div>
            <div className="row">
              <div className="col-5 offset-1 d-flex justify-content-between border-btm">
                <select
                  className="form-select bg-transparent text-white border-none"
                  aria-label="Default select example"
                >
                  <option selected>Provision for expense</option>
                  <option value="1">Short-term financial liabilities</option>
                  <option value="2">Trade and other payables</option>
                  <option value="3">Advance received from customers</option>
                  <option value="4">
                    Financial liabilities with related parties
                  </option>
                  <option value="5">Current tax payable</option>
                  <option value="6">
                    Borrowings from bank - current portion
                  </option>
                </select>
                <p>22</p>
              </div>
              <div className="col-2">
                <p className="text-end border-btm">(314,923)</p>
              </div>
              <div className="col-2">
                <p className="text-end border-btm">(314,923)</p>
              </div>
              <div className="col-2 border-btm">
                <input
                  className="input input-group input-group-sm mb-1"
                  type="number"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-5 offset-1 border-btm-2">
                <h5>Total current liabilities</h5>
              </div>
              <div className="col-2">
                <p className="text-end border-btm-2 fw-bold">7,576,078</p>
              </div>
              <div className="col-2">
                <p className="text-end border-btm-2 fw-bold">2,623,554</p>
              </div>
              <div className="col-2">
                <p className="text-end border-btm-2 fw-bold">2,623,554</p>
              </div>
            </div>
            <div className="row">
              <div className="col-5 offset-1">
                <h5>Total liabilities</h5>
              </div>
              <div className="col-2">
                <p className="text-end fw-bold">7,576,078</p>
              </div>
              <div className="col-2">
                <p className="text-end fw-bold">2,623,554</p>
              </div>
              <div className="col-2">
                <p className="text-end fw-bold">2,623,554</p>
              </div>
            </div>
            <div className=" border-btm-2"></div>
            <div className="row">
              <div className="col-6">
                <h5>Total equity and liabilities</h5>
              </div>
              <div className="col-2">
                <p className="text-end  fw-bold">7,576,078</p>
              </div>
              <div className="col-2">
                <p className="text-end  fw-bold">2,623,554</p>
              </div>
              <div className="col-2">
                <p className="text-end  fw-bold">2,623,554</p>
              </div>
            </div>
            <div className=" border-btm-3"></div>
            <p>
              Annexed notes form an integral parts of these Financial
              Statements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sfp;
