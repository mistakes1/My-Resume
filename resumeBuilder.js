var bio = {
    "name": "Aubrey Zaragoza",
    "role": "Web Developer and Film-maker",
    "contacts": {
        "mobile": "972-000-5555",
        "email": "aubrey.zaragoza@example.com",
        "github": "mistakes1",
        "location": "Dallas, Texas"
    },
    "welcomeMessage" : "Welcome to my resume page! Everything that you need to know about me is here.",
    "skills" : [
        "programming, diligence, film, photography, babysitting, awesomeness, communication, responsibility"
    ],
    "bioPic" : ["images/pro.jpg"]
};

var education = {
    "schools": [{
        "name": "Richland College",
        "location": "Richardson, TX",
        "degree": "Associates",
        "majors": ["Film", " Photography"],
        "dates": "2015-2017",
        "url": "https://richlandcollege.edu/"
    }],
    "onlineCourses": [{
        "title": "Intro to programming Nanodegree",
        "school": "Udacity",
        "date": "June 2016 - current",
        "url": "https://www.udacity.com/"
    }]
};

var work = {
    "jobs": [{
        "employer": "The Women's Chorus of Dallas",
        "title": "Helper",
        "location": "Dallas, TX",
        "dates": "September-December 2015",
        "description": "I worked there as desk help and a concert photographer."
    }, {
        "employer": "RCHS Media",
        "title": "Film-maker",
        "location": "Richardson, TX",
        "dates": "January 2016-May 2017",
        "description": "For marketing purposes representing RCHS and the actvities hosted and presented by the students."
    }]
};

var projects = {
    "projects": [{
        "title": "Zara Anatalia",
        "dates": "Started 2014",
        "description": "I don't have a specific genre, but I love to try anything if I choose to. I love film!!",
        "images": ["images/mo.jpg"]
    }]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    var contactsMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var contactsEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var contactsGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(contactsMobile);
    $("#header").append(contactsEmail);
    $("#header").append(contactsGithub);
    $("#header").append(formattedBioPic);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#header").append(HTMLskillsStart);
        $("#skills").append(formattedSkill);
    }
};
bio.display();

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", school.name);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedName);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedDegree);
        $(".education-entry:last").append(formattedMajor);
     });
     education.onlineCourses.forEach(function(online) {
         $('.education-entry:last').append(HTMLonlineClasses);
         var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", online.title);
         var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", online.school);
         var formattedOnlineDates = HTMLonlineDates.replace("%data%", online.date);
         var formattedOnlineURL = HTMLonlineURL.replace("%data%", online.url);
         $('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL);
     });
};
education.display();


work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
    });
};
work.display();

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        if (project.images.length > 0) {
            projects.projects.forEach(function(project) {
                var formattedImage = HTMLprojectImage.replace("%data%", project.images);
                $(".projects-entry:last").append(formattedImage);
            });
         }
     });
};
projects.display();

$("#mapDiv").append(googleMap);

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] +" "+ name[1];
}
$("#main").append(internationalizeButton);
