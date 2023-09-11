// This script makes use of GitHub's REST API to display the 10 most recent commits to the website's repository.
// This can be expanded to include more commits in the future, barring any rate limiting by the API.

import { Octokit, App } from "https://esm.sh/octokit";

let changelogContainer = document.getElementById("changelog-body");

// various templates for each changelog div
let preUserURL = "<div class=\"card changelogs\"><div class=\"card-body\"><a class=\"user-link\" href=\""
let preImg = "\">"
let preLogin = "<h5 class=\"card-title\" style=\"vertical-align: middle; display: inline\">"
let preName = " ("
let preTime = ")</a> | "
let preDesc = "</h5><p class=\"card-text\">"
let preLink = "</p><a href=\""
let endTemplate = "\" class=\"btn btn-primary commit-link\">GitHub Commit Link</a></div></div>"

const octokit = new Octokit();

// fetches 10 most recent commits to the listed repository
let rspns = octokit.request('GET /repos/psmit703/personal-website/commits', {
    owner: 'psmit703',
    repo: 'personal-website',
    headers: {
        'X-GitHub-Api-Version': '2022-11-28'
    },
    per_page: 10
});

// wait for server response
$.when(rspns).done(function (data) {
    let commits = data.data;

    // iterate through each commit and add it to the DOM as a changelog div
    // commits are returned by the server in the order of most recent to least recent
    for (let i = 0; i < commits.length; i++) {
        let username = commits[i].author.login;
        let actualName = commits[i].commit.author.name;
        let userPicture = commits[i].author.avatar_url;
        let commitMessage = commits[i].commit.message;
        let commitDateTime = commits[i].commit.author.date;
        let commitURL = commits[i].html_url;
        let userURL = commits[i].author.html_url;

        userPicture = "<img src=\"" + userPicture + "\" height=\"24px\" width=\"24px\" style=\"vertical-align: middle; border-radius: 4px; margin-right: 8px;\">"

        let year = commitDateTime.substring(0, 4);
        let month = commitDateTime.substring(5, 7);
        let day = commitDateTime.substring(8, 10);
        let hour = commitDateTime.substring(11, 13);
        let minute = commitDateTime.substring(14, 16);
        let second = commitDateTime.substring(17, 19);

        // converts the date string into a Date object and then into a string in the format "MM/DD/YYYY HH:MM:SS AM/PM"
        // converts to the browser's local time zone
        commitDateTime = new Date(month + "/" + day + "/" + year + " " + hour + ":" + minute + ":" + second + " UTC");
        let commitDateTimeString = commitDateTime.toLocaleString();

        let template = preUserURL + userURL + preImg + userPicture + preLogin + username + preName + actualName + preTime + commitDateTimeString + preDesc + commitMessage + preLink + commitURL + endTemplate;

        changelogContainer.innerHTML += template;
        if (i != commits.length - 1 && i != 9) {
            changelogContainer.innerHTML += "<div class=\"commit-spacing\"></div>"
        }
    }

});
