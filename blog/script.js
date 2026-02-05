//TABLE OF CONTENTS
// 1. Basic Info
// 2. Posts Array
// 3. Creating HTML Sections to Be Inserted (Header, Footer, etc)
// 4. Inserting the Sections Into our Actual HTML Pages

// BASIC INFO 

let blogName = "Lu Blog";
let authorName = "Envenus";
let authorLink = "";


// POSTS ARRAY

let postsArray = [
  ["posts/2026-02-05-I-need-to-get-experimental-mannnnn.html", null, ["ramble",]],
  ["posts/2026-02-05-Forgot-to-share-this-here.html", null, ["art", "eddsworld", "ambulance", "ambu", "lance",]],
  ["posts/2026-02-05-Easy-Toast-Spread.html", null, ["ramble"]],
  ["posts/2026-01-24-OC-Icons.html", null, ["art", "oc-stuff", "nemo", "encool", "uncool"]],
  ["posts/2026-01-23-Nemi.html", null, ["art"]],
  ["posts/2026-01-23-I-love-neko.html", null, ["ramble"]],
  ["posts/2025-10-15-Question2.html", null, ["question",]],
  ["posts/2025-09-18-Question1.html", null, ["question",]],
  ["posts/2025-09-16-Website-To-Do-List.html", null, ["ramble",]],
  ["posts/2025-09-16-The-Envenus-Multiverse-and-Story's.html", null, ["long-ramble", "ramble", "oc-stuff",]],
  ["posts/2025-09-15-Website-Relaunch!.html", null, ["long-ramble", "ramble",]],
  ["posts/2024-11-01-u.html", null, ["art", "oc-stuff", "hayate"]],
  ["posts/2024-11-01-Doodles.html", null, ["art", "methone", "therapy", "paper", "paper-gijinka", "scissors", "scissors-gijinka"]],
  ["posts/2024-10-26-THAT-FUCKING-BIRD-I-HATE.html", null, ["art","scissors", "scissors-gijinka", "rock-paper-scissors",]],
  ["posts/2024-10-26-PEAK-x-PEAK‼️🔥.html", null, ["art", "pencil", "paper", "rock-paper-scissors",]],
  ["posts/2024-10-23-Tooi-sai.html", null, ["art", "yume-nikki", "madotsuki"]],
  ["posts/2024-10-23-hairstylist-scissors.html", null, ["art", "hairstylist-scissors", "oc-stuff", "rock-paper-scissors"]],
  ["posts/2024-10-21-3D-Paper.html", null, ["art", "paper", "3d"]],
  ["posts/2024-10-20-Submerged.html", null, ["art", "game"]],
  ["posts/2024-10-19-Slatlety.html", null, ["art", "starlet", "oc-stuff"]],
  ["posts/2024-10-19-Rps-Baby’s.html", null, ["art", "rock-paper-scissors", "rock", "paper", "scissors",]],
  ["posts/2024-10-17-Windows-11-Propaganda.html", null, ["art",]],
  ["posts/2024-10-08-Vanta-Design-Thing.html", null, ["art", "vanta", "oc-stuff"]],
  ["posts/2024-10-06-Paper.html", null, ["art", "paper", "paper-gijinka", "autism"]],
  ["posts/2024-10-06-Naptime.html", null, ["art", "naptime", "oc-stuff",]],
  ["posts/2024-10-05-Whiteboard-Doodles.html", null, ["art", "rock-paper-scissors", "paper", "paper-gijinka", "scissors",]],
  ["posts/2024-10-05-Cheese-Stick.html", null, ["art",]],
  ["posts/2024-10-05-Bow-Gijinka.html", null, ["art", "bow", "bow-gijinka", "rock-paper-scissors", "oc-stuff",]],
  ["posts/2024-10-04-Xyolotu-Son.html", null, ["art",]],
  ["posts/2024-10-03-Scissors-Gijinka-Concept-2.html", null, ["art","scissors", "scissors-gijinka", "rock-paper-scissors",]],
  ["posts/2024-10-03-Raspberry-Cake-Gijinka-silly.html", null, ["art", "raspberry-cake", "raspberry-cake-gijinka", "rock-paper-scissors",]],
  ["posts/2024-10-03-Scissors-Gijinka-Concept.html", null, ["art","scissors", "scissors-gijinka", "rock-paper-scissors",]],
  ["posts/2024-10-02-Kassy’s-Xyolotu.html", null, ["art", "kassy-mable",]],
  ["posts/2024-10-03-Nemo-On-A-Shikish.html", null, ["art", "nemo", "oc-stuff",]], 
  ["posts/2024-10-01-Stuff-I-Finished-On-October-1.html", null, ["art", "rock-paper-scissors", "rock", "paper", "scissors", "hatsune-miku", "lolly", "oc-stuff",]],
  ["posts/2024-04-19-Head-koolz.html", null, ["art",]],
  ["posts/2024-04-14-Human-Pencil.html", null, ["art", "pencil-gijinka", "pencil", "rock-paper-scissors",]],
  ["posts/2024-04-13-Miku-Earth.html", null, ["art", "earth", "hatsune-miku", "oc-stuff",]],
];

// GENERATING THE HTML SECTIONS

let url = window.location.pathname;
const postDateFormat = /\d{4}\-\d{2}\-\d{2}\-/;

let relativePath = ".";
if (url.includes("posts/")) {
  relativePath = "..";
}

const urlParams = new URLSearchParams(window.location.search);
const tagFilter = urlParams.get("tag");

// Helper: formatTags
function formatTags(i) {
  let tagHTML = '<div class="post-tags" style="margin-bottom:10px;">';
  if (postsArray[i][2] && postsArray[i][2].length > 0) {
    postsArray[i][2].forEach((tag) => {
      tagHTML += `<a href="${relativePath}/archive.html?tag=${tag}" class="tag-link" style="margin-right:5px; font-size:0.8em; text-decoration:none; background:#eee; padding:2px 5px; color:#555; display:  inline-block;">#${tag}</a> `;
    });
  }
  tagHTML += "</div>";
  return tagHTML;
}

// Header and Footer
let headerHTML =
  '<ul> <li><a href="' +
  relativePath +
  '/index.html">Home</a></li>' +
  '<li><a href="' +
  relativePath +
  '/archive.html">Archive</a></li> </ul>';

let footerHTML =
  "<p>" +
  blogName +
  " is written by " +
  authorLink +
  authorName +
  "</a>, built with <a href='https://zonelets.net/'>Zonelets</a>, and hosted by <a href='https://github.com.net/'>GitHub Pages!</a></p>";

// Current Post Index Logic
let currentIndex = -1;
let currentFilename = url.substring(url.lastIndexOf("posts/"));
if (!currentFilename.endsWith(".html")) {
  currentFilename += ".html";
}

for (let i = 0; i < postsArray.length; i++) {
  if (postsArray[i][0] === currentFilename) {
    currentIndex = i;
  }
}

// Formatting Titles
function formatPostTitle(i) {
  if (postsArray[i][1] !== null && postsArray[i][1] !== undefined && postsArray[i].length > 1) {
    return decodeURI(postsArray[i][1]);
  } else {
    if (postDateFormat.test(postsArray[i][0].slice(6, 17))) {
      return postsArray[i][0].slice(17, -5).replace(/-/g, " ");
    } else {
      return postsArray[i][0].slice(6, -5).replace(/-/g, " ");
    }
  }
}

// Current Post Date and Title
let currentPostTitle = "";
let niceDate = "";
if (currentIndex > -1) {
  currentPostTitle = formatPostTitle(currentIndex);
  if (postDateFormat.test(postsArray[currentIndex][0].slice(6, 17))) {
    let monthSlices = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let monthIndex = parseInt(postsArray[currentIndex][0].slice(11, 13)) - 1;
    niceDate =
      postsArray[currentIndex][0].slice(14, 16) +
      " " +
      monthSlices[monthIndex] +
      ", " +
      postsArray[currentIndex][0].slice(6, 10);
  }
}

// Archive Post List Logic
function formatPostLink(i) {
  let postTitle_i = formatPostTitle(i);
  if (postDateFormat.test(postsArray[i][0].slice(6, 17))) {
    return (
      '<li><a href="' +
      relativePath +
      "/" +
      postsArray[i][0] +
      '">' +
      postsArray[i][0].slice(6, 16) +
      " \u00BB " +
      postTitle_i +
      "</a></li>"
    );
  } else {
    return '<li><a href="' + relativePath + "/" + postsArray[i][0] + '">' + postTitle_i + "</a></li>";
  }
}

let postListHTML = "";
if (tagFilter) {
  postListHTML += `<h3>Showing posts tagged: #${tagFilter}</h3>`;
  postListHTML += `<p><a href="${url}">View all posts</a></p>`;
}

postListHTML += "<ul>";
for (let i = 0; i < postsArray.length; i++) {
  let showPost = true;
  if (tagFilter && (!postsArray[i][2] || !postsArray[i][2].includes(tagFilter))) {
    showPost = false;
  }
  if (showPost) {
    postListHTML += formatPostLink(i);
    postListHTML += formatTags(i);
  }
}
postListHTML += "</ul>";

// Recent Posts Logic
let recentPostsCutoff = 3;
let recentPostListHTML = "<h2>Recent Posts:</h2><ul>";
let numberOfRecentPosts = Math.min(recentPostsCutoff, postsArray.length);
for (let i = 0; i < numberOfRecentPosts; i++) {
  recentPostListHTML += formatPostLink(i);
}
if (postsArray.length > recentPostsCutoff) {
  recentPostListHTML +=
    '<li class="moreposts"><a href=' + relativePath + "/archive.html>\u00BB more posts</a></li></ul>";
} else {
  recentPostListHTML += "</ul>";
}

// Next and Previous Links
let nextprevHTML = "";
if (postsArray.length < 2) {
  nextprevHTML = '<a href="' + relativePath + '/index.html">Home</a>';
} else if (currentIndex === 0) {
  nextprevHTML =
    '<a href="' +
    relativePath +
    '/index.html">Home</a> | <a href="' +
    relativePath +
    "/" +
    postsArray[currentIndex + 1][0] +
    '">Previous Post \u00BB</a>';
} else if (currentIndex === postsArray.length - 1) {
  nextprevHTML =
    '<a href="' +
    relativePath +
    "/" +
    postsArray[currentIndex - 1][0] +
    '">\u00AB Next Post</a> | <a href="' +
    relativePath +
    '/index.html">Home</a>';
} else if (currentIndex > 0) {
  nextprevHTML =
    '<a href="' +
    relativePath +
    "/" +
    postsArray[currentIndex - 1][0] +
    '">\u00AB Next Post</a> | <a href="' +
    relativePath +
    '/index.html">Home</a> | <a href="' +
    relativePath +
    "/" +
    postsArray[currentIndex + 1][0] +
    '">Previous Post \u00BB</a>';
}

// INSERTING SECTIONS

const elements = {
  nextprev: nextprevHTML,
  postlistdiv: postListHTML,
  recentpostlistdiv: recentPostListHTML,
  header: headerHTML,
  blogTitleH1: blogName,
  postTitleH1: currentPostTitle,
  postDate: niceDate,
  footer: footerHTML
};

for (let id in elements) {
  if (document.getElementById(id)) {
    document.getElementById(id).innerHTML = elements[id];
  }
}

if (document.title === "Blog Post") {
  document.title = currentPostTitle;
}

// FEED / INFINITE SCROLL LOGIC

const postsPerLoad = 3;
const contentSelector = "#main-post-body";
let loadedCount = 0;
let isLoading = false;
const feedContainer = document.getElementById("feed-container");

let activeFeedPosts = [...postsArray]; 

if (feedContainer && tagFilter) {
  activeFeedPosts = postsArray.filter(post => post[2] && post[2].includes(tagFilter));
}

if (feedContainer) {
  if (tagFilter) updateFeedHeader(tagFilter);
  
  loadMorePosts();

  window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
      loadMorePosts();
    }
  });

  feedContainer.addEventListener("click", function(e) {
    const link = e.target.closest(".tag-link");
    if (link) {
      e.preventDefault(); 
      const urlParams = new URLSearchParams(link.search);
      const clickedTag = urlParams.get("tag");
      filterFeed(clickedTag);
    }
  });
}

function filterFeed(tag) {
  activeFeedPosts = postsArray.filter(post => post[2] && post[2].includes(tag));
  loadedCount = 0;
  feedContainer.innerHTML = ""; 
  const newUrl = window.location.pathname + "?tag=" + tag;
  window.history.pushState({path: newUrl}, '', newUrl);
  updateFeedHeader(tag);
  loadMorePosts();
}

function updateFeedHeader(tag) {
    const infoDiv = document.createElement("div");
    infoDiv.style.textAlign = "center";
    infoDiv.style.padding = "20px";
    infoDiv.innerHTML = `
        <h3>Viewing posts tagged: #${tag}</h3>
        <p><a href="#" onclick="resetFeed(); return false;">View all posts</a></p>
    `;
    feedContainer.appendChild(infoDiv);
}

window.resetFeed = function() {
    activeFeedPosts = [...postsArray];
    loadedCount = 0;
    feedContainer.innerHTML = "";
    window.history.pushState({path: window.location.pathname}, '', window.location.pathname);
    loadMorePosts();
}

async function loadMorePosts() {
  if (isLoading || loadedCount >= activeFeedPosts.length) return;
  
  isLoading = true;
  const loadingMsg = document.getElementById("loading-message");
  if (loadingMsg) loadingMsg.style.display = "block";

  const nextPosts = activeFeedPosts.slice(loadedCount, loadedCount + postsPerLoad);

  for (let i = 0; i < nextPosts.length; i++) {
    const originalIndex = postsArray.indexOf(nextPosts[i]);
    const postUrl = nextPosts[i][0];
    const postTitle = formatPostTitle(originalIndex);
    const postDate = nextPosts[i][0].slice(6, 16);
    const postTagsHTML = formatTags(originalIndex);

    try {
      const response = await fetch(postUrl);
      const text = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, "text/html");
      let content = doc.querySelector(contentSelector) || doc.body;

      const postWrapper = document.createElement("div");
      postWrapper.className = "zonelets-feed-item";
      postWrapper.innerHTML = `
        <div class="feed-header">
            <h2><a href="${postUrl}">${postTitle}</a></h2>
            <small>${postDate}</small>
            ${postTagsHTML}
        </div>
        <div class="feed-content">${content.innerHTML}</div>
        <a href="${postUrl}" class="feed-comment-btn"><i class="fa-solid fa-comment"></i> Leave a Comment!</a>
      `;
      feedContainer.appendChild(postWrapper);
    } catch (error) {
      console.error("Error loading post:", postUrl, error);
    }
  }

  loadedCount += nextPosts.length;
  isLoading = false;
  if (loadingMsg) loadingMsg.style.display = "none";

  if (loadedCount >= activeFeedPosts.length) {
    const endMsg = document.createElement("div");
    endMsg.innerHTML = "<p style='text-align:center; color: var(--text-muted);'>You Have Reach the End</p>";
    feedContainer.appendChild(endMsg);
  }
}

// Sidebar and Loader Utils
function moveSidebar() {
  const sidebar = document.getElementById("blogsideplaceholder");
  const desktopBase = document.getElementById("desktop-sidebar-container");
  const mobileBase = document.getElementById("mobile-sidebar-container");
  if (window.innerWidth < 768) {
    if (sidebar && mobileBase) mobileBase.appendChild(sidebar);
  } else {
    if (sidebar && desktopBase) desktopBase.appendChild(sidebar);
  }
}

window.addEventListener("resize", moveSidebar);
window.addEventListener("DOMContentLoaded", moveSidebar);
window.addEventListener("load", function () {
  const loader = document.getElementById("flash");
  if (loader) {
    loader.style.opacity = "0";
    document.body.classList.remove("loading");
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }
});

const backToTopBtn = document.getElementById("backToTop");
window.onscroll = function() {
    if (window.scrollY > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

backToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};