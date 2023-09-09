import { Octokit, App } from "https://esm.sh/octokit";

let changelogContainer = document.getElementById("changelog-body");

let preLogin = "<div class=\"card changelogs\"><div class=\"card-body\"><h5 class=\"card-title\">"
let preName = " ("
let preTime = ") | "
let preDesc = "</h5><p class=\"card-text\">"
let preLink = "</p><a href=\""
let endTemplate = "\" class=\"btn btn-primary commit-link\">GitHub Commit Link</a></div></div>"

const octokit = new Octokit();

let rspns = octokit.request('GET /repos/psmit703/personal-website/commits', {
    owner: 'psmit703',
    repo: 'personal-website',
    headers: {
        'X-GitHub-Api-Version': '2022-11-28'
    }
});

$.when(rspns).done(function (data) {
    let commits = data.data;

    for (let i = 0; i < commits.length && i < 10; i++) {
        let username = commits[i].author.login;
        let actualName = commits[i].commit.author.name;
        // let userPicture = commits[i].author.avatar_url;
        let commitMessage = commits[i].commit.message;
        let commitDateTime = commits[i].commit.author.date;
        let commitURL = commits[i].html_url;


        let year = commitDateTime.substring(0, 4);
        let month = commitDateTime.substring(5, 7);
        let day = commitDateTime.substring(8, 10);
        let hour = commitDateTime.substring(11, 13);
        let minute = commitDateTime.substring(14, 16);
        let second = commitDateTime.substring(17, 19);

        commitDateTime = new Date(month + "/" + day + "/" + year + " " + hour + ":" + minute + ":" + second + " UTC");
        let commitDateTimeString = commitDateTime.toLocaleString();

        let template = preLogin + username + preName + actualName + preTime + commitDateTimeString + preDesc + commitMessage + preLink + commitURL + endTemplate;

        changelogContainer.innerHTML += template;
        if (i != commits.length - 1 && i != 9) {
            changelogContainer.innerHTML += "<div class=\"commit-spacing\"></div>"
        }
    }

});
