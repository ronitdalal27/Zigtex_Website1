import React, { useState } from "react";

export default function NewSales() {
  const [showOverlay, setShowOverlay] = useState(false);

  const countryDialCodes = {
    Afghanistan: "+93",
    Albania: "+355",
    Algeria: "+213",
    Andorra: "+376",
    Angola: "+244",
    Argentina: "+54",
    Armenia: "+374",
    Australia: "+61",
    Austria: "+43",
    Azerbaijan: "+994",
    Bahamas: "+1-242",
    Bahrain: "+973",
    Bangladesh: "+880",
    Barbados: "+1-246",
    Belarus: "+375",
    Belgium: "+32",
    Belize: "+501",
    Benin: "+229",
    Bhutan: "+975",
    Bolivia: "+591",
    BosniaAndHerzegovina: "+387",
    Botswana: "+267",
    Brazil: "+55",
    Brunei: "+673",
    Bulgaria: "+359",
    BurkinaFaso: "+226",
    Burundi: "+257",
    Cambodia: "+855",
    Cameroon: "+237",
    Canada: "+1",
    CapeVerde: "+238",
    CentralAfricanRepublic: "+236",
    Chad: "+235",
    Chile: "+56",
    China: "+86",
    Colombia: "+57",
    Comoros: "+269",
    Congo: "+242",
    CostaRica: "+506",
    Croatia: "+385",
    Cuba: "+53",
    Cyprus: "+357",
    CzechRepublic: "+420",
    Denmark: "+45",
    Djibouti: "+253",
    Dominica: "+1-767",
    DominicanRepublic: "+1-809",
    Ecuador: "+593",
    Egypt: "+20",
    ElSalvador: "+503",
    Estonia: "+372",
    Ethiopia: "+251",
    Fiji: "+679",
    Finland: "+358",
    France: "+33",
    Germany: "+49",
    Ghana: "+233",
    Greece: "+30",
    Greenland: "+299",
    Guatemala: "+502",
    Guinea: "+224",
    Guyana: "+592",
    Haiti: "+509",
    Honduras: "+504",
    Hungary: "+36",
    Iceland: "+354",
    India: "+91",
    Indonesia: "+62",
    Iran: "+98",
    Iraq: "+964",
    Ireland: "+353",
    Israel: "+972",
    Italy: "+39",
    Jamaica: "+1-876",
    Japan: "+81",
    Jordan: "+962",
    Kazakhstan: "+7",
    Kenya: "+254",
    KoreaSouth: "+82",
    Kuwait: "+965",
    Kyrgyzstan: "+996",
    Laos: "+856",
    Latvia: "+371",
    Lebanon: "+961",
    Lesotho: "+266",
    Liberia: "+231",
    Libya: "+218",
    Liechtenstein: "+423",
    Lithuania: "+370",
    Luxembourg: "+352",
    Madagascar: "+261",
    Malawi: "+265",
    Malaysia: "+60",
    Maldives: "+960",
    Mali: "+223",
    Malta: "+356",
    Mauritania: "+222",
    Mauritius: "+230",
    Mexico: "+52",
    Moldova: "+373",
    Monaco: "+377",
    Mongolia: "+976",
    Montenegro: "+382",
    Morocco: "+212",
    Mozambique: "+258",
    Myanmar: "+95",
    Namibia: "+264",
    Nepal: "+977",
    Netherlands: "+31",
    NewZealand: "+64",
    Nicaragua: "+505",
    Niger: "+227",
    Nigeria: "+234",
    NorthMacedonia: "+389",
    Norway: "+47",
    Oman: "+968",
    Pakistan: "+92",
    Panama: "+507",
    PapuaNewGuinea: "+675",
    Paraguay: "+595",
    Peru: "+51",
    Philippines: "+63",
    Poland: "+48",
    Portugal: "+351",
    Qatar: "+974",
    Romania: "+40",
    Russia: "+7",
    Rwanda: "+250",
    SaudiArabia: "+966",
    Senegal: "+221",
    Serbia: "+381",
    Seychelles: "+248",
    Singapore: "+65",
    Slovakia: "+421",
    Slovenia: "+386",
    Somalia: "+252",
    SouthAfrica: "+27",
    Spain: "+34",
    SriLanka: "+94",
    Sudan: "+249",
    Suriname: "+597",
    Swaziland: "+268",
    Sweden: "+46",
    Switzerland: "+41",
    Syria: "+963",
    Taiwan: "+886",
    Tajikistan: "+992",
    Tanzania: "+255",
    Thailand: "+66",
    Togo: "+228",
    Tonga: "+676",
    TrinidadAndTobago: "+1-868",
    Tunisia: "+216",
    Turkey: "+90",
    Turkmenistan: "+993",
    Uganda: "+256",
    Ukraine: "+380",
    UnitedArabEmirates: "+971",
    UnitedKingdom: "+44",
    UnitedStates: "+1",
    Uruguay: "+598",
    Uzbekistan: "+998",
    Venezuela: "+58",
    Vietnam: "+84",
    Yemen: "+967",
    Zambia: "+260",
    Zimbabwe: "+263"
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    companyName: "",
    companySize: "",
    country: "",
    referral: "",
    usingCRM: "",
    existingCRMName: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "country" && countryDialCodes[value]) {
      setFormData((prev) => ({
        ...prev,
        country: value,
        phone: countryDialCodes[value] + " ",
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      phone,
      jobTitle,
      companyName,
      companySize,
      country,
      referral,
      usingCRM,
      existingCRMName,
      consent,
    } = formData;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !jobTitle ||
      !companyName ||
      !companySize ||
      !country ||
      !usingCRM ||
      !consent
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const submissionData = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: `'${phone.trim()}`,
      jobTitle: jobTitle.trim(),
      companyName: companyName.trim(),
      companySize: companySize.trim(),
      country,
      referral: referral.trim(),
      usingCRM: usingCRM || "No",
      existingCRMName: usingCRM === "yes" ? existingCRMName.trim() : "N/A",
      consent: consent ? "Yes" : "No",
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyvgOQdGXOTfk0mxbFr-BhvSn03Vj7c0_Xk7ebdzRsnwuxEf66-UGt896jhrCTeRgi9eQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
        }
      );

      alert("Submitted successfully!");
      setShowOverlay(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        jobTitle: "",
        companyName: "",
        companySize: "",
        country: "",
        referral: "",
        usingCRM: "",
        existingCRMName: "",
        consent: false,
      });
    } catch (err) {
      console.error("Submission failed", err);
      alert("Submission failed. Try again later.");
    }
  };

  return (
    <div className="relative">
      {/* Main Content */}
      <div
        className={`
          flex flex-col justify-center items-center gap-8
          px-5 sm:px-10 md:px-20 pt-20
          bg-gradient-to-br from-[#1E1749] via-[#3B2E7C] to-[#7B6CBC]
          ${showOverlay ? "blur-sm pointer-events-none select-none" : ""}
        `}
      >
        <div className="flex flex-col items-center gap-3 w-full max-w-[941px]">
          <div className="text-center text-white font-inter font-semibold text-[32px] leading-[40px] tracking-[-1px] sm:text-[42px] sm:leading-[50px] sm:tracking-[-1.5px] md:text-[52px] md:leading-[60px] md:tracking-[-2px] lg:text-[63px] lg:leading-[73px] lg:tracking-[-2.5px] w-full max-w-[779px] mb-3">
            This is Sales Reimagined!
          </div>

          <div className="text-center text-white font-inter font-normal text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px] md:text-[20px] md:leading-[35px] w-full max-w-[485px] mb-3">
            Stop focusing on the clutter & start closing more deals.
          </div>

          <button
            onClick={() => setShowOverlay(true)}
            className="flex justify-center items-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 bg-white text-[#282828] font-inter font-semibold text-[14px] leading-[24px] tracking-[-0.1px] sm:text-[16px] sm:leading-[28px] sm:tracking-[-0.2px] rounded-[39px]"
          >
            Book Demo
          </button>
        </div>

        <div className="w-full max-w-[1440px] flex-grow flex items-end">
          <img
            src="/images/Frame4.png"
            alt="Sales Graphic"
            className="w-full object-cover object-bottom max-h-[500px] max-w-[1000px] mx-auto"
          />
        </div>
      </div>

      {/* Overlay */}
      {showOverlay && (
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowOverlay(false)}
              className="absolute top-3 right-4 text-black text-2xl font-bold"
            >
              &times;
            </button>

            <div className="flex items-center justify-center mb-4">
              <span className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-[#D4D4D4] text-[#525252] text-xs sm:text-sm font-normal font-inter">
                Contact
              </span>
            </div>

            <h2 className="text-center text-[#1D201F] text-xl sm:text-2xl md:text-[30px] font-semibold leading-[1.4] font-inter mb-6">
              Book Demo
            </h2>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {/* First & Last Name */}
              <div className="flex flex-col sm:flex-row gap-4">
                <FormInput label="First Name" name="firstName" placeholder="Enter your first name" value={formData.firstName} onChange={handleChange} />
                <FormInput label="Last Name" name="lastName" placeholder="Enter your last name" value={formData.lastName} onChange={handleChange} />
              </div>

              {/* Country & Phone */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="text-sm font-medium">Country</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                    required
                  >
                    <option value="">Select Country</option>
                    {Object.keys(countryDialCodes).map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
                <FormInput
                  label="Business Phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Email & Company Name */}
              <div className="flex flex-col sm:flex-row gap-4">
                <FormInput
                  label="Business Email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <FormInput
                  label="Company Name"
                  name="companyName"
                  placeholder="Enter company name"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>

              {/* Company Size & Job Title */}
              <div className="flex flex-col sm:flex-row gap-4">
                <FormInput
                  label="Company Size"
                  name="companySize"
                  placeholder="e.g. 1–10, 11–50, 50+"
                  value={formData.companySize}
                  onChange={handleChange}
                />
                <FormInput
                  label="Job Title"
                  name="jobTitle"
                  placeholder="Enter your job title"
                  value={formData.jobTitle}
                  onChange={handleChange}
                />
              </div>

              {/* Using CRM */}
              <div>
                <label className="text-sm font-medium">Using Existing CRM?</label>
                <div className="flex gap-4 mt-1">
                  <label className="flex items-center gap-1">
                    <input type="radio" name="usingCRM" value="yes" checked={formData.usingCRM === "yes"} onChange={handleChange} required />
                    Yes
                  </label>
                  <label className="flex items-center gap-1">
                    <input type="radio" name="usingCRM" value="no" checked={formData.usingCRM === "no"} onChange={handleChange} />
                    No
                  </label>
                </div>
              </div>

              {formData.usingCRM === "yes" && (
                <FormInput
                  label="Existing CRM Name"
                  name="existingCRMName"
                  placeholder="Enter CRM name"
                  value={formData.existingCRMName}
                  onChange={handleChange}
                />
              )}

              <FormInput
                label="How did you hear about us?"
                name="referral"
                placeholder="e.g. Google, LinkedIn"
                value={formData.referral}
                onChange={handleChange}
              />

              {/* Consent */}
              <div className="flex gap-2 items-start mt-2">
                <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} required />
                <label className="text-sm text-[#171717] font-inter">
                  I would like to receive information, tips, and offers on solutions for businesses, as well as other Zigtex CRM Products and Services.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex justify-center items-center w-full mt-2 py-2.5 sm:py-3 px-4 rounded-full bg-gradient-to-tr from-[#7B6CBC] to-[#1E1749]"
              >
                <span className="text-white text-sm sm:text-base font-medium leading-5 font-inter text-center">
                  Submit
                </span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// Reusable FormInput component
const FormInput = ({ label, name, placeholder, type = "text", value, onChange }) => (
  <div className="flex-1">
    <label className="text-[#171717] text-sm sm:text-base font-medium leading-5 font-inter">
      {label}
    </label>
    <div className="flex items-center w-full h-10 px-3 py-2 mt-1 rounded-md border border-[#D4D4D4] bg-white">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex-1 text-[#737373] text-sm font-normal leading-5 font-inter outline-none bg-transparent"
        required
      />
    </div>
  </div>
);
