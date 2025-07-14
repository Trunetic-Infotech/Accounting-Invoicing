import React from "react";
import img from "../../assets/accountingAndInvoicing.webp";

export default function CompanyDetails() {
  const companyData = {
    name: "ABC Accounting Pvt Ltd",
    tagline: "Simplifying Business Finances",
    businessType: "Private Limited",
    logoUrl: img,
    registeredAddress: "123 Finance Street, Mumbai",
    phone: "+91-9876543210",
    email: "billing@abcaccounting.com",
    website: "www.abcaccounting.com",
    gstin: "27AAQCA1234P1ZL",
    pan: "AAQCA1234P",
    cin: "U12345MH2010PTC123456",
    bankName: "HDFC Bank",
    accountName: "ABC Accounting Pvt Ltd",
    accountNumber: "XXXX-XXXX-1234",
    ifsc: "HDFC0001234",
    upi: "abc@hdfcbank",
    currency: "INR",
    financialYearStart: "April 1",
    taxRate: "GST 18%",
    invoiceFormat: "INV-2025-XXXX",
    contactPerson: {
      name: "Mr. Ravi Sharma",
      designation: "Managing Director",
      phone: "+91-9876543210",
      email: "ravi@abcaccounting.com",
    },
  };

  const SectionCard = ({ title, children }) => (
    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
      <h4 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
        {title}
      </h4>
      <div className="grid md:grid-cols-2 gap-4 text-gray-700 text-base">
        {children}
      </div>
    </div>
  );

  const InfoItem = ({ label, value }) => (
    <p>
      <span className="font-medium text-gray-600">{label}:</span>{" "}
      <span className="text-gray-900">{value}</span>
    </p>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-indigo-700">
            Company Overview
          </h2>
          <p className="text-gray-500">
            Accounting & Invoicing Business Profile
          </p>
        </div>
        <img
          src={companyData.logoUrl}
          alt="Company Logo"
          className="w-20 h-20 object-contain rounded-full border border-gray-300"
        />
      </div>

      <SectionCard title="Basic Information">
        <InfoItem label="Company Name" value={companyData.name} />
        <InfoItem label="Tagline" value={companyData.tagline} />
        <InfoItem label="Business Type" value={companyData.businessType} />
      </SectionCard>

      <SectionCard title="Contact Details">
        <InfoItem
          label="Registered Address"
          value={companyData.registeredAddress}
        />
        <InfoItem label="Phone" value={companyData.phone} />
        <InfoItem label="Email" value={companyData.email} />
        <InfoItem label="Website" value={companyData.website} />
      </SectionCard>

      <SectionCard title="Legal & Tax Information">
        <InfoItem label="GSTIN" value={companyData.gstin} />
        <InfoItem label="PAN" value={companyData.pan} />
        <InfoItem label="CIN" value={companyData.cin} />
      </SectionCard>

      <SectionCard title="Banking Information">
        <InfoItem label="Bank Name" value={companyData.bankName} />
        <InfoItem label="Account Name" value={companyData.accountName} />
        <InfoItem label="Account Number" value={companyData.accountNumber} />
        <InfoItem label="IFSC Code" value={companyData.ifsc} />
        <InfoItem label="UPI ID" value={companyData.upi} />
      </SectionCard>

      <SectionCard title="Accounting Settings">
        <InfoItem label="Currency" value={companyData.currency} />
        <InfoItem
          label="Financial Year Start"
          value={companyData.financialYearStart}
        />
        <InfoItem label="Default Tax Rate" value={companyData.taxRate} />
        <InfoItem label="Invoice Format" value={companyData.invoiceFormat} />
      </SectionCard>

      <SectionCard title="Authorized Contact">
        <InfoItem label="Name" value={companyData.contactPerson.name} />
        <InfoItem
          label="Designation"
          value={companyData.contactPerson.designation}
        />
        <InfoItem label="Phone" value={companyData.contactPerson.phone} />
        <InfoItem label="Email" value={companyData.contactPerson.email} />
      </SectionCard>
    </div>
  );
}
