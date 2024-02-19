// import React, { useState, useEffect } from "react";
// import "./myJob.css";
// import { Grid, IconButton } from "@mui/material";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { useLocation } from "react-router-dom";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";

// function MyJob() {
//   const [jobView, setJobView] = useState([]);
//   const [employee_id, setEmployeeId] = useState("");
//   console.log(employee_id, "ididididid");


//   // Edit and Delete
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

// // Fetching Job Details
//   useEffect(() => {
//     async function fetchJobs() {
//       try {
//         const response = await fetch(
//           "http://192.168.1.38:8000/employer_post_jobs_view/"
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch jobs");
//         }
//         const data = await response.json();
//         console.log(data, "====================");
//         if (data && Array.isArray(data.data) && Array.isArray(data.data[0])) {
//           setJobView(data.data[0]);
//         } else {
//           console.error("Invalid data format received from API");
//         }
//       } catch (error) {
//         console.error("Error fetching jobs:", error);
//       }
//     }
//     fetchJobs();
//   }, []);

//   console.log(jobView, "jobView");

//   // Location  Coordinates 
//   const location = useLocation();

//   // POST data 
//   useEffect(() => {
//     if (location.state && location.state.id) {
//       const id = location.state.id;
//       setEmployeeId(id);

//       async function postID() {
//         try {
//           const response = await fetch(
//             "http://192.168.1.38:8000/employer_post_jobs/",
//             {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({ employee_id: id }),
//             }
//           );
//           if (!response.ok) {
//             throw new Error("Failed to post id data to API");
//           }
//           console.log("ID data posted successfully:", id);
//         } catch (error) {
//           console.error("Error posting id data to API:", error);
//         }
//       }
//       postID();
//     }
//   }, [location.state]);


//   const handleDelete = (indexToDelete) => {
//     setAnchorEl(null);
//     if (indexToDelete !== undefined) {
//       setJobView((prevJobView) => {
//         return prevJobView.filter((_, index) => index !== indexToDelete);
//       });
//     }
//   };

//   return (
//     <div>
//       {location.state.id}
//       <h1>My Job</h1>

//       <Grid
//         container
//         alignItems="center"
//         justifyContent="space-between"
//         className="job-container"
//       >
//         <Grid item xs={3}>
//           <div>
//             <h1 className="title">Title</h1>
//           </div>
//         </Grid>
//         <Grid item xs={3}>
//           <div>
//             <h3 className="location">Location</h3>
//           </div>
//         </Grid>
//         <Grid item xs={3}>
//           <div>
//             <h3 className="date">Date</h3>
//           </div>
//         </Grid>
//         <Grid item xs={3}>
//         </Grid>
//       </Grid>

//       {jobView.map((job, index) => (
//         <Grid
//           key={index}
//           container
//           alignItems="center"
//           justifyContent="space-between"
//           className="job-container"
//         >
//           <Grid item xs={3}>
//             <div>
//               <h1 className="title">{job.job_title}</h1>
//             </div>
//           </Grid>
//           <Grid item xs={3}>
//             <div>
//               <h3 className="location">{job.location}</h3>
//             </div>
//           </Grid>
//           <Grid item xs={3}>
//             <div>
//               <h3 className="date">{job.created_at}</h3>
//             </div>
//           </Grid>
//           <Grid item xs={3}>
//           <IconButton
//         id="icon-button"
//         aria-controls={open ? 'icon-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         onClick={handleClick}
//       >
//         <MoreVertIcon />
//       </IconButton>
      
//       <Menu
//       id="icon-menu"
//       anchorEl={anchorEl}
//       open={open}
//       onClose={handleClose}
//       MenuListProps={{
//         'aria-labelledby': 'icon-button',
//       }}
//     >
//       <MenuItem  >Edit</MenuItem>
//       <MenuItem  onClick={() => handleDelete(index)}>Delete</MenuItem>
//     </Menu>

//           </Grid>
//         </Grid>
//       ))}
//     </div>
//   );
// }

// export default MyJob;



import React, { useState, useEffect } from "react";
import "./myJob.css";
import { Grid, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useLocation } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";



function MyJob() {
  const [jobView, setJobView] = useState([]);
  const [employee_id, setEmployeeId] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [pageLoaded, setPageLoaded] = useState(false); // State to track page load


  console.log(employee_id,"employee_id");

  

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch(
          "http://192.168.1.38:8000/employer_post_jobs_view/"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        console.log(data, "====================");
        if (data && Array.isArray(data.data) && Array.isArray(data.data[0])) {
          setJobView(data.data[0]);
        } else {
          console.error("Invalid data format received from API");
        }

        
       
  
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    }
    fetchJobs();
  }, []);

  const location = useLocation();

  useEffect(() => {

      // Auto reload one time when the page is first loaded
      

     

    if (location.state && location.state.id) {
      const id = location.state.id;
      setEmployeeId(id);
      async function postID() {
        try {
          const response = await fetch(
            "http://192.168.1.38:8000/employer_post_jobs/",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ employee_id: id }),
            }
          );
          if (!response.ok) {
            throw new Error("Failed to post id data to API");
            
          }
          console.log("ID data posted successfully:", id);
          
        } catch (error) {
          console.error("Error posting id data to API:", error);
          window.location.reload();
        }
      }
      postID();
    }
  }, [location.state]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (indexToDelete) => {
    setAnchorEl(null);
    if (indexToDelete !== undefined) {
      setJobView((prevJobView) => {
        return prevJobView.filter((_, index) => index !== indexToDelete);
      });
    }
  };

  const navigate = useNavigate();

  const changeDirect =(job)=>{
    navigate("/EditMyJob", { state: { job } })
  }

  return (
    <div>
      {location.state.id}
      <h1>My Job</h1>

      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        className="job-container"
      >
        <Grid item xs={3}>
          <div>
            <h1 className="title">Title</h1>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div>
            <h3 className="location">Location</h3>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div>
            <h3 className="date">Date</h3>
          </div>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>

      {jobView.map((job, index) => (
        <Grid
          key={index}
          container
          alignItems="center"
          justifyContent="space-between"
          className="job-container"
        >
          <Grid item xs={3}>
            <div>
              <h1 className="title">{job.job_title}</h1>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <h3 className="location">{job.location}</h3>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <h3 className="date">{job.created_at}</h3>
            </div>
          </Grid>
          <Grid item xs={3}>
            <IconButton
              id="icon-button"
              aria-controls={anchorEl ? "icon-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={anchorEl ? "true" : undefined}
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>

            <Menu
              id="icon-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => handleClose(index)}
              MenuListProps={{
                "aria-labelledby": "icon-button",
              }}
            >
              <MenuItem  onClick={() => changeDirect(job)}>Edit</MenuItem>
              <MenuItem onClick={() => handleClose(index)}>Delete</MenuItem>
            </Menu>
          </Grid>
        </Grid>
      ))}
    </div>
  );
}

export default MyJob;


