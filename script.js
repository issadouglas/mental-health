// Subhead Rotation Script
const roles = ["student", "teacher", "child", "parent", "high schooler", "college student", "professor", "survivor", "resilient mind"];
let index = 0;

function rotateRoles() {
    const journeyElement = document.getElementById('journey');
    const roleSpan = document.createElement('span');
    roleSpan.textContent = roles[index];
    
    if (roles[index] === "resilient mind") {
        roleSpan.classList.add('blue'); // Add blue class for resilient mind
        journeyElement.innerHTML = "The mental health journey of a " + roleSpan.outerHTML;
        journeyElement.classList.add('resilient');
        clearInterval(interval);
    } else {
        roleSpan.classList.add('blue'); // Add blue class for other roles
        journeyElement.innerHTML = "The mental health journey of a " + roleSpan.outerHTML;
        journeyElement.classList.remove('resilient');
    }

    index = (index + 1) % roles.length;
}

const interval = setInterval(rotateRoles, 900); // Reminder: 900 = (0.9 seconds)

// Note from editor Rotation Script

const mentalHealthChallenges = ["depression", "anxiety", "eating disorders", /* add more mental health challenges here */ "mental health issues"];
let indexMentalHealth = 0;

function rotateMentalHealthChallenges() {
    const mentalHealthTextElement = document.getElementById('mentalHealthText');
    
    if (indexMentalHealth === mentalHealthChallenges.length - 1) {
        mentalHealthTextElement.innerHTML = `This special edition project is dedicated to individuals who have faced, conquered or navigated through <span class="blue">${mentalHealthChallenges[indexMentalHealth]}</span>.`;
        clearInterval(intervalMentalHealth);
    } else {
        mentalHealthTextElement.innerHTML = `This special edition project is dedicated to individuals who have faced, conquered or navigated through <span class="blue">${mentalHealthChallenges[indexMentalHealth]}</span>`;
    }

    indexMentalHealth = (indexMentalHealth + 1) % mentalHealthChallenges.length;
}

const intervalMentalHealth = setInterval(rotateMentalHealthChallenges, 12000); // Adjust the delay as needed (12000 milliseconds = 12 seconds)










// VOICES UNVEILED LINE BREAK
// Pulls out article
function openContent(contentId) {
    // Hide all content areas
    var contents = document.querySelectorAll('.columnist-column');
    contents.forEach(function (content) {
        content.style.display = 'none';
    });

    // Show the selected content
    var selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}

function closePullOutContainer() {
    document.getElementById('miaOrris').style.right = '-300px'; // Adjust the ID accordingly
}

    // Button to leave








