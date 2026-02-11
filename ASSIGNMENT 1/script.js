var eventForm = document.getElementById('eventForm');
var eventsContainer = document.getElementById('eventsContainer');
var clearBtn = document.getElementById('clearBtn');
var sampleBtn = document.getElementById('sampleBtn');
var keyDisplay = document.getElementById('keyDisplay');

var eventList = [];

function displayEvents() {
    eventsContainer.innerHTML = ""; 

    if (eventList.length === 0) {
        eventsContainer.innerHTML = '<p style="text-align:center;color:#777;">No events yet. Add your first event!</p>';
        return;
    }

    for (var i = 0; i < eventList.length; i++) {
        var item = eventList[i];
        eventsContainer.innerHTML += `
            <div class="event-card">
                <button class="del-btn" onclick="removeEvent(${i})">X</button>
                <h3>${item.title}</h3>
                <p>Date: ${item.date}</p>
                <p><b>${item.category}</b></p>
                <p>${item.desc}</p>
            </div>
        `;
    }
}

eventForm.onsubmit = function(e) {
    e.preventDefault();

    var newEvent = {
        title: document.getElementById('title').value,
        date: document.getElementById('eventdate').value,
        category: document.getElementById('category').value,
        desc: document.getElementById('description').value
    };

    eventList.push(newEvent);
    displayEvents();
    eventForm.reset();
};

function removeEvent(index) {
    eventList.splice(index, 1);
    displayEvents();
}

clearBtn.onclick = function() {
    eventList = [];
    displayEvents();
};

sampleBtn.onclick = function() {
    var samples = [
        {title: "data structure", date: "2026-02-15", category: "Class", desc: "data structure"},
        {title: "JS WORKSHOP", date: "2026-02-20", category: "Workshop", desc: "MERN KNOWLEDGE"}
    ];
    eventList = eventList.concat(samples);
    displayEvents();
};

window.onkeydown = function(e) {
    keyDisplay.innerHTML = "You Pressed: <b>" + e.key + "</b>";
};