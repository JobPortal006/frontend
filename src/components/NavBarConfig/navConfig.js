// data for navbar
const navbarConfig = {
    // home will visible after login
    home: 'Home ',
    // employer and candidatejobs will visible before and after login
    employer: {
        label: 'Employer ',
        items: ['Employer details', 'Add job posting','check1']
    },
    candidateJobs: {
        label: 'Candidate Jobs',
        items: ['Browse job', 'Job categorie s']
    },
    //logut and Create an account is visible after login 
    Logout: ' Logout',
    Create_an_account: 'Create an account',
    Login: ' Login',
    RecruitersLogin: 'Recruiters Login',
};
module.exports = navbarConfig;