import { useEffect } from "react";
import specialImg from "../../assets/img/specialities/specialities-01.png";
import DataTable from "datatables.net-dt";
import PageHeader from "../../components/PageHeader/PageHeader";

const Dashboard = () => {
  useEffect(() => {
    new DataTable(".datatable");
  });
  return (
    <>
      <PageHeader title="Dashboard" />

 <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <h2>TaskMaster</h2>
              <p>
              *Project Creation and Planning:*
  Users can create projects, defining objectives, deadlines, and milestones.Project planning tools for task breakdown, resource allocation, and timeline visualization.
     
    Assign tasks to specific employees or teams with clear responsibilities. Real-time task tracking, allowing employees to update progress and mark completion.

    Automated notifications for approaching deadlines or overdue tasks.
   Progress tracking with visual indicators, Gantt charts, or other intuitive representations.
</p>
<p>*Collaboration and Communication:*
   Integrated communication tools within tasks and projects (comments, file sharing).
   Real-time collaboration on shared documents or project-related discussions.

   Priority levels for tasks to help employees focus on critical assignments.
   Urgency flags or notifications for tasks requiring immediate attention.
   Synchronization with the Employee Information Management module for task assignment based on skills and expertise.
   Integration with the Attendance and Time Tracking module for accurate workload estimation.
              </p>
            </div>
          </div>
        </div>
      </div>
           
        <div className="col-md-6">
          <div className="row">
          <div className="col-12 col-sm-6 col-md-12">
            <div className="small-box bg-light shadow-sm border">
              <div className="inner">
                <h3>2 Projects</h3>

                <p>Total Projects</p>
              </div>
              
            </div>
          </div>
           <div className="col-12 col-sm-6 col-md-12">
            <div className="small-box bg-light shadow-sm border">
              <div className="inner">
                <h3>4 Tasks</h3>
                <p>Total Tasks</p>
              </div>
              
            </div>
          </div>
      </div>
              
    </div> 
    </>
  );
};

export default Dashboard;
