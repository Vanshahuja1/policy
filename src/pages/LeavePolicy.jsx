function LeavePolicy() {
  const content = [
    {
      title: "Purpose",
      text: "Describes the guidelines for employees requesting leave of absence and specifies the types and number of leaves each employee is entitled to in a calendar year.",
    },
    {
      title: "Eligibility",
      text: "Applies to all regular and confirmed employees. Trainees or employees on probation can only take sick leave. Leave year is from January 1 to December 31.",
    },
    {
      title: "Scope",
      text: "This leave policy applies to all employees in the organization.",
    },
    {
      title: "Leave Entitlement",
      text: "Includes Privilege/Earned Leave, Casual Leave, Sick Leave, Maternity Leave, Paternity Leave, Sabbatical Leave, Festivals and Holidays, Unpaid Leave, and Sandwich Policy.",
    },
    {
      title: "Guidelines",
      text: "Leave is calculated on a calendar year basis. Casual and Sick Leaves are credited at the start of the year. Privilege Leave is credited monthly. Leaves for new joiners are calculated proportionally. Doctor’s certificate required for long sick leaves. Leaves must be applied in advance.",
    },
    {
      title: "Festivals",
      text: "Paid holidays are announced at the start of the calendar year. These cannot be carried forward or encashed.",
    },
    {
      title: "Leave Without Pay",
      text: "Can be availed only when leave balance is zero. Requires manager’s recommendation and HR head’s approval. For long LWP, Director/CEO approval is required.",
    },
    {
      title: "Sabbatical Leave",
      text: "Up to 1 year for further studies if the employee has completed the required years of continuous service. Needs HOD and CEO approval.",
    },
    {
      title: "Maternity Leave",
      text: "As per Maternity Benefit Act 1961. Can be extended based on illness, adjusted against leave balance.",
    },
    {
      title: "Paternity Leave",
      text: "Granted for childbirth or adoption. Limited number of children and must be availed within a specific time frame after the birth.",
    },
    {
      title: "Leave During Probation or Notice Period",
      text: "Usually restricted during probation or notice period.",
    },
    {
      title: "Leave Encashment",
      text: "Allowed up to a certain limit. Excess leave can be encashed annually, based on previous year’s leaves.",
    },
    {
      title: "Sandwich Policy",
      text: "Non-working days (like weekends/holidays) between leave days are counted as part of the leave.",
    },
    {
      title: "Application Process",
      text: "Leave requests must be submitted to the manager with type, dates, and reason at least two days in advance. Exceptions allowed in emergencies.",
    },
    {
      title: "Approval Process",
      text: "Manager will review and approve/deny the leave request and inform the employee.",
    },
    {
      title: "Disciplinary Measures",
      text: "Violations may result in warnings, suspension, or demotion.",
    },
    {
      title: "Exception",
      text: "Policy may be modified by HR head for legal or business requirements.",
    },
  ];

  return (
    <div>
      <h2>Leave Policy</h2>
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

export default LeavePolicy;
