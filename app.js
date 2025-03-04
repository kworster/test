// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXIYCqDH1bTZ_mqhUMb7XTht5Uuqn6zQ8",
  authDomain: "test-10716.firebaseapp.com",
  projectId: "test-10716",
  storageBucket: "test-10716.firebasestorage.app",
  messagingSenderId: "628302111178",
  appId: "1:628302111178:web:51974bc78fcfd88e136f33",
  measurementId: "G-CE57LFBWRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add Task
// addTaskBtn.addEventListener('click', () => {
//     const task = taskInput.value.trim();
//     if (task) {
//         const li = document.createElement('li');
//         li.textContent = task;
//         taskList.appendChild(li);
//         taskInput.value = '';
//     }
// });

addTaskBtn.addEventListener('click', async () => {
    const task = taskInput.value.trim();
    if (task) {
        const taskInput = document.getElementById("taskInput");
        const taskText = sanitizeInput(taskInput.value.trim());

        if (taskText) {
            await addTaskToFirestore(taskText);
            renderTasks();
            taskInput.value = "";
        }
        renderTasks();
    }
});

async function addTaskToFirestore(taskText) {
    await addDoc(collection(db, "test"), {
      text: taskText, 
      completed: false
    });  
  }

  async function renderTasks() {
    var tasks = await getTasksFromFirestore();
    taskList.innerHTML = "";
  
    tasks.forEach((task, index) => {
      if(!task.data().completed){
        const taskItem = document.createElement("li");
        taskItem.id = task.id;
        taskItem.textContent = task.data().text;
        taskList.appendChild(taskItem);
      }
    });
  }

async function getTasksFromFirestore() {
    var data = await getDocs(collection(db, "test"));
    let userData = [];
    data.forEach((doc) => {
      userData.push(doc);
  });
  return userData;
}


// Sanitize
function sanitizeInput(input) {
    const div = document.createElement("div");
    div.textContent = input;
    return div.innerHTML;
  }

// Remove Task on Click
taskList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});

//Error Logging
window.addEventListener('error', function (event) {
    console.error('Error occurred: ', event.message);
});