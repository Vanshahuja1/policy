import PolicyPage from '../components/PolicyPage';

const content = [
  "Purpose: Guidelines for requesting leaves and types available in a calendar year.",
  "Eligibility: Applies to all regular employees. Probation trainees can only take sick leave.",
  "Leave Entitlement: Includes Privilege, Casual, Sick, Maternity, Paternity, Sabbatical, Holidays, Unpaid, Sandwich.",
  "Guidelines: Leave credited yearly. Advance application required. Doctor’s note for long sick leaves.",
  "Festivals: Paid holidays will be announced yearly and can't be carried over.",
  "Leave Without Pay: Only when leave balance is zero; requires approval.",
  "Sabbatical Leave: Up to 1 year for further studies after certain years of service.",
  "Maternity Leave: As per Maternity Benefit Act 1961, with possible extensions.",
  "Paternity Leave: For birth or adoption; applicable up to a limited number of children.",
  "Leave During Probation or Notice: Typically restricted.",
  "Leave Encashment: Allowed up to a limit, with excess encashable annually.",
  "Sandwich Policy: Weekends between leaves are counted as leave.",
  "Application Process: Submit to manager with type, date, and reason. Exceptions for emergencies.",
  "Approval Process: Manager reviews and approves/denies.",
  "Disciplinary Measures: Range from warnings to suspension.",
  "Exception: Can be modified by HR head for legal/business needs."
];

function LeavePolicy() {
  return <PolicyPage title="Leave Policy" content={content} />;
}

export default LeavePolicy;
