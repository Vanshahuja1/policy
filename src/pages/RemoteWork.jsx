import PolicyPage from '../components/PolicyPage';

const content = [
  "Applies To: All employees engaged in remote work arrangements, whether full-time or part-time.",
  "1. Purpose: This policy outlines the guidelines and expectations for employees working remotely...",
  "2. Scope: This policy applies to all employees whose job responsibilities permit remote work...",
  "3. Eligibility: Approval required from supervisor and HR...",
  "4. Work Hours & Availability: Standard 9 AM – 6 PM, Monday to Saturday...",
  "5. Attendance & Time Tracking: Must record time accurately...",
  "6. Data Security & Confidentiality: Use secure VPN and follow data policies...",
  "7. Workspace Requirements: Dedicated and ergonomic home office...",
  "8. Equipment & Technology: One Aim provides necessary devices...",
  "9. Internet & Utility Costs: Reliable internet is mandatory...",
  "10. Communication & Collaboration: Use designated collaboration tools...",
  "11. Performance & Deliverables: Must meet standards and attend check-ins...",
  "12. Leave, Holidays & Time Off: Submit via official channel...",
  "13. Health & Safety Compliance: Safe remote environment required...",
  "14. Monitoring & Surveillance: Work may be monitored by One Aim...",
  "15. Moonlighting & Side Work: Must be disclosed to HR...",
  "16. Termination of Remote Work: Company can revoke at any time...",
  "17. Policy Violations: May result in disciplinary action...",
  "18. Dual Employment: Employee responsible for taxes...",
  "19. Agreement & Acknowledgment: Signature required."
];

function RemoteWork() {
  return <PolicyPage title="Remote Work Policy" content={content} />;
}

export default RemoteWork;
