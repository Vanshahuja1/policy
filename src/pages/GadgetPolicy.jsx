function GadgetPolicy() {
  const content = [
    { title: "Purpose", text: "Company-provided gadgets (including but not limited to laptops, smartphones, tablets, and other electronic devices) are issued to ensure productivity, security, and responsible use of company resources." },
    { title: "Eligibility", text: "Employees must complete a total of 9 months (6 months of service + 3 months probation) and be in L1 grade to be eligible for company gadgets." },
    { title: "Security Compliance", text: "All new passwords for company-provided devices must be shared with the IT department in adherence to security policies." },
    { title: "Return of Gadgets", text: "All company-provided gadgets must be returned upon termination of employment or upon request by the company." },
    { title: "Condition of Return", text: "Gadgets must be returned in the same condition or with the same CL number as received. Any damage must be compensated by the employee." }
  ];

  return (
    <div>
      <h2>Gadget Policy</h2>
      <ul>
        {content.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <strong>{item.title}:</strong> 
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
      <p>Employee Name: _________ &nbsp;&nbsp;&nbsp; Employee Signature: _________ &nbsp;&nbsp;&nbsp; Date: _____</p>
    </div>
  );
}

export default GadgetPolicy;
