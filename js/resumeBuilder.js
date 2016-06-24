/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*
Quiz - all the resume sections from lesson 1 - data types
*/

/*
work

work contains an array of jobs. Each job object in jobs should contain an
employer, title, location, dates worked and description.
*/

var work = {
  "jobs" : [
    {
      "employer" : "unemployed",
      "title" : "hobo",
      "location" : "yyc",
      "dates" : "present",
      "description" : "sad"
    },
    {
      "employer" : "cve",
      "title" : "it guy",
      "location" : "yyc",
      "dates" : "2016",
      "description" : "meh"
    }
  ]
};

/*
projects

projects contains an array of projects. Each project object in projects should
contain a title, dates worked, description, and an images array with URL
strings for project images.
*/
var proj = {
  "projects" : [
    {
      "title" : "projtitle",
      "dates" : "projdate",
      "description" : "projdescr",
      "images" : []
    }
  ]
};

/*
bio

bio contains a name, role, welcomeMessage, contacts object and skills array.
The contacts object should contain (but doesn't have to) a mobile number,
email address, github username, twitter handle and location.
*/

var bio = {
  "name" : "ben wong",
  "role" : "geek",
  "welcome" : "welcome to here",
  "contact" : {
    "mobile" : "555-555-5555",
    "email" : "a@b.com",
    "github" : "gh",
    "twitter" : "tw",
    "location" : "yyc"
  },
  "skills" : ["awesomeness", "programming", "teaching" ]
};

/*
education

education contains an array of schools. Each school object in schools contains
a name, location, degree, majors array, dates attended and a url for the
school's website. education also contains an onlineCourses array. Each
onlineCourse object in onlineCourses should contain a title, school, dates
attended and a url for the course.

*/

var edu = {
  "schools" : [
    {
      "name" : "uc",
      "loc" : "yyc",
      "majors" : ["cpsc"],
      "dates" : "1998",
      "web" : "ucalgary.ca"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "js basics",
      "school" : "udacity",
      "dates" : "2016",
      "web" : "udacity.com"
    },
    {
      "title" : "git basics",
      "school" : "udacity",
      "dates" : "2016",
      "web" : "udacity.com"
    }
  ]
};

/* main --------- */
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (var i = 0; i < bio.skills.length; i++) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i])
    $("#skills").append(formattedSkill);
  }
}

function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    //$("#workExperience").append(formattedEmployer + formattedTitle);
    $(".work-entry:last").append(formattedEmployer + formattedTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLoc);
    var formattedDescr = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescr);

  }
}

displayWork();

$(document).click(function(loc) {
  // your code goes here
  logClicks(loc.pageX, loc.pageY);
});

$("#main").append(internationalizeButton);

function inName (name) {
  var intlName = "";
  var names = name.trim().split(" ")
  if (names.length == 2) {
    var flett = names[0].slice(0,1).toUpperCase();
    var fname = names[0].slice(1).toLowerCase();
    var lname = names[1].toUpperCase();
    intlName = flett + fname + " " + lname;
  }
  return intlName;
}

proj.display = function () {
  $("#projects").append(HTMLprojectStart);
  for (p in proj.projects) {
    var formatpTitle = HTMLprojectTitle.replace("%data%", proj.projects[p].title);
    $(".project-entry:last").append(formatpTitle);
    var formatpDate = HTMLprojectDates.replace("%data%", proj.projects[p].dates);
    $(".project-entry:last").append(formatpDate);
    var formatpDescr = HTMLprojectDescription.replace("%data%", proj.projects[p].description);
    $(".project-entry:last").append(formatpDescr);
    if (proj.projects[p].images.length > 0) {
      for (img in proj.projects[p].images[img]) {
        var formatpImg = HTMLprojectImage.replace("%data%", proj.projects[p].images[img]);
        $(".project-entry:last").append(formatpImg);
      }
    }
  }
}

proj.display();

$("#mapDiv").append(googleMap);
