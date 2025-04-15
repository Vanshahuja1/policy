import PolicyPage from '../components/PolicyPage';

const content = [
  "Company-provided gadgets are meant to ensure productivity, security, and responsible use.",
  "Eligibility: Employees who have completed 9 months (6 months + 3 months probation) and are L1 grade.",
  "Passwords: All new passwords must be shared with the IT department.",
  "Return of Gadgets: Must return in same condition or with same CL number, or compensate for damages.",
  "Return Policy: Return gadgets on employment termination or upon company request."
];

function GadgetPolicy() {
  return <PolicyPage title="Gadget Policy" content={content} />;
}

export default GadgetPolicy;
