function RemoteWork() {
  const content = [
    { title: "Purpose", text: "This policy outlines the guidelines and expectations for employees working remotely, aiming to ensure productivity, security, and alignment with One Aim’s objectives." },
    { title: "Scope", text: "This policy applies to all employees whose job responsibilities permit remote work, as approved by their respective managers and the Human Resources (HR) department." },
    { title: "Eligibility", text: "Employees must obtain written approval from their direct supervisor and HR before commencing remote work. Eligibility is determined based on job function, performance history, and operational requirements." },
    { title: "Work Hours & Availability", text: "Standard hours are 9:00 AM – 6:00 PM, Monday through Saturday. Flexible work hours may be considered upon mutual agreement. Employees must be accessible via designated communication channels (e.g., email, phone, instant messaging) during work hours." },
    { title: "Attendance & Time Tracking", text: "Employees must accurately record their work hours using the assigned time tracking system. Overtime requires prior written approval. Absences due to illness or other reasons should be communicated early to the supervisor." },
    { title: "Data Security & Confidentiality", text: "Employees must use secure, password-protected internet connections and company-provided VPN services. Company-issued devices must remain secure and confidential data must be handled according to One Aim’s policies." },
    { title: "Workspace Requirements", text: "Employees must maintain a dedicated, safe, and ergonomic home workspace. One Aim may request virtual inspections to ensure compliance with safety standards." },
    { title: "Equipment & Technology", text: "One Aim provides necessary equipment (e.g., laptops, monitors). Employees are responsible for proper use and contacting IT for technical support related to company equipment and software." },
    { title: "Internet & Utility Costs", text: "Employees must maintain a reliable internet connection. One Aim may reimburse a portion of internet costs upon prior approval and receipt submission." },
    { title: "Communication & Collaboration", text: "Employees are expected to attend virtual meetings, actively participate, and use approved collaboration tools (e.g., Slack, Microsoft Teams) for daily communication and teamwork." },
    { title: "Performance & Deliverables", text: "Employees must meet performance standards and deadlines. Supervisors will conduct regular check-ins to monitor progress and provide support." },
    { title: "Leave, Holidays & Time Off", text: "Leave requests should be submitted through the official system at least two days in advance. Remote employees receive the same holiday benefits as on-site employees." },
    { title: "Health & Safety Compliance", text: "Employees must comply with all applicable health and safety regulations. Any work-related injuries must be reported to HR immediately." },
    { title: "Monitoring & Surveillance", text: "One Aim may monitor work activity, including computer usage and communications, to ensure security and productivity. By working remotely, employees consent to this monitoring." },
    { title: "Moonlighting & Side Work", text: "Employees must disclose any secondary employment or freelance work to HR to avoid conflicts of interest. Work that competes with One Aim or interferes with responsibilities is not permitted." },
    { title: "Termination of Remote Work Agreement", text: "One Aim reserves the right to revoke remote work privileges at any time due to operational or performance issues. All company property must be returned within five business days upon termination of remote work or employment." },
    { title: "Policy Violations", text: "Violations of this policy may result in disciplinary action, up to and including termination. Policy violations should be reported to HR or a supervisor." },
    { title: "Dual Employment", text: "Employees are responsible for any taxes incurred through dual employment." },
    { title: "Agreement & Acknowledgment", text: "By signing below, the employee acknowledges understanding and agreement to the terms outlined in this Remote Work Policy Manual." },
  ];

  return (
    <div>
      <h2>Remote Work Policy</h2>
      {content.map((item, index) => (
        <p key={index}>
          <strong>{index + 1}. {item.title}:</strong> 
          <p>{item.text}</p>
        </p>
      ))}
      <p>Employee Name: _________ &nbsp;&nbsp;&nbsp;&nbsp; Employee Signature: _________ &nbsp;&nbsp;&nbsp;&nbsp; Date: _____</p>
      <p>    </p>
      <h4>Applies To: All employees engaged in remote work arrangements, whether full-time or part-time.</h4>
    </div>
  );
}

export default RemoteWork;
