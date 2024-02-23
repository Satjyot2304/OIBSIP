document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
});

function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value.trim();
    input.value = ""; // Clear input field

    if (task === "") return; // If task is empty, do nothing

    var currentDateTime = new Date();
    var date = currentDateTime.toLocaleDateString();
    var time = currentDateTime.toLocaleTimeString(); // Get current time

    var dateTimeString = date + " " + time; // Combine date and time

    var pendingTasks = document.getElementById("pendingTasks");

    var listItem = document.createElement("li");
    var span = document.createElement("span");
    span.textContent = task + " - " + dateTimeString;

    var completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.onclick = function() {
        listItem.remove();
        completeTask(listItem);
    };

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        listItem.remove();
        saveTasks();
    };

    listItem.appendChild(span);
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    pendingTasks.appendChild(listItem);

    saveTasks(); // Save tasks to local storage
}


function completeTask(taskItem) {
    var completedTasks = document.getElementById("completedTasks");
    taskItem.style.textDecoration = "line-through";
    taskItem.querySelector("button").remove(); // Remove "Complete" button
    completedTasks.appendChild(taskItem);
    saveTasks(); // Save tasks to local storage
}

function saveTasks() {
    var pendingTasks = [];
    var completedTasks = [];

    var pendingListItems = document.querySelectorAll("#pendingTasks li");
    pendingListItems.forEach(function(item) {
        pendingTasks.push(item.textContent);
    });

    var completedListItems = document.querySelectorAll("#completedTasks li");
    completedListItems.forEach(function(item) {
        completedTasks.push(item.textContent);
    });

    localStorage.setItem("pendingTasks", JSON.stringify(pendingTasks));
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
}

function loadTasks() {
    var pendingTasks = JSON.parse(localStorage.getItem("pendingTasks"));
    var completedTasks = JSON.parse(localStorage.getItem("completedTasks"));

    if (pendingTasks) {
        var pendingList = document.getElementById("pendingTasks");
        pendingTasks.forEach(function(task) {
            var listItem = createTaskListItem(task);
            pendingList.appendChild(listItem);
        });
    }

    if (completedTasks) {
        var completedList = document.getElementById("completedTasks");
        completedTasks.forEach(function(task) {
            var listItem = createTaskListItem(task);
            listItem.style.textDecoration = "line-through";
            completedList.appendChild(listItem);
        });
    }
}

function createTaskListItem(taskText) {
    var listItem = document.createElement("li");
    var span = document.createElement("span");
    span.textContent = taskText;

    var completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.onclick = function() {
        listItem.remove();
        completeTask(listItem);
    };

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        listItem.remove();
        saveTasks();
    };

    listItem.appendChild(span);
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);

    return listItem;
}

