const jobList =

    [
    {
    "url": "https://api.stevebrownlee.com/jobs/1/",
    "organization": "Nashville Software School",
    "role": "Lead Instructor",
    "start_year": "2015-06-01",
    "end_year": null,
    "city": "Nashville",
    "state": "TN",
    "synopsis": "TBD"
    },
    {
    "url": "https://api.stevebrownlee.com/jobs/2/",
    "organization": "Lonely Planet",
    "role": "Manager of Software Development",
    "start_year": "2014-01-01",
    "end_year": "2015-01-01",
    "city": "Nashville",
    "state": "TN",
    "synopsis": "TBD"
    },
    {
    "url": "https://api.stevebrownlee.com/jobs/3/",
    "organization": "Digital Reasoning",
    "role": "Senior Software Engineer",
    "start_year": "2012-01-01",
    "end_year": "2014-01-01",
    "city": "Nashville",
    "state": "TN",
    "synopsis": "TBD"
    },
    {
    "url": "https://api.stevebrownlee.com/jobs/4/",
    "organization": "Smith Micro",
    "role": "Senior Software Engineer",
    "start_year": "2011-01-01",
    "end_year": "2012-01-01",
    "city": "Nashville",
    "state": "TN",
    "synopsis": "TBD"
    },
    {
    "url": "https://api.stevebrownlee.com/jobs/5/",
    "organization": "Davita",
    "role": "Senior Application Developer",
    "start_year": "2007-01-01",
    "end_year": "2011-01-01",
    "city": "Nashville",
    "state": "TN",
    "synopsis": "TBD"
    },
    {
    "url": "https://api.stevebrownlee.com/jobs/6/",
    "organization": "Printellect",
    "role": "Lead Application Developer",
    "start_year": "2005-02-01",
    "end_year": "2007-01-01",
    "city": "Pittsburgh",
    "state": "PA",
    "synopsis": "TBD"
    },
    {
    "url": "https://api.stevebrownlee.com/jobs/7/",
    "organization": "Orbwave",
    "role": "Founder & CTO",
    "start_year": "2002-02-01",
    "end_year": "2006-01-01",
    "city": "Pittsburgh",
    "state": "PA",
    "synopsis": "TBD"
    },
    {
    "url": "https://api.stevebrownlee.com/jobs/8/",
    "organization": "Mind Over Media",
    "role": "Development Manager",
    "start_year": "2001-01-01",
    "end_year": "2002-01-01",
    "city": "Pittsburgh",
    "state": "PA",
    "synopsis": "TBD"
    },
    {
    "url": "https://api.stevebrownlee.com/jobs/9/",
    "organization": "marchFIRST",
    "role": "Consultant",
    "start_year": "2000-01-01",
    "end_year": "2001-01-01",
    "city": "Pittsburgh",
    "state": "PA",
    "synopsis": "TBD"
    },
    {
    "url": "https://api.stevebrownlee.com/jobs/10/",
    "organization": "Pannier Corporation",
    "role": "Software Developer",
    "start_year": "1994-01-01",
    "end_year": "2000-01-01",
    "city": "Pittsburgh",
    "state": "PA",
    "synopsis": "TBD"
    }
    ]


const listIt = document.querySelector("#list")
listIt.innerHTML = `<h1 id="mainHeader">Steve's Job List</h1>`

jobList.sort(function(a, b) {
    a = jobList.start_year;
    b = jobList.start_year;
    return a>b ? -1 : a<b ? 1 : 0;

});
jobList.forEach(job => {
    let eachJob =  `
    <section id="listNow"></section>
    <h2>${job.organization}</h2>
    <p>${job.role}</p>
    <p>Start Date:${job.start_year} - End Date: ${job.end_year}</p>
    </section>
    `

    listIt.innerHTML += eachJob
    console.log(eachJob)
});
