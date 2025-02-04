
const employees = [
  {
    "id": 101,
    "firstName": "Amit Sharma",
    "email": "amitsharma@company.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 0,
      "completed": 2,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Code Review",
        "taskDescription": "Review code for the new feature implementation",
        "taskDate": "2024-11-01",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Bug Fixing",
        "taskDescription": "Resolve bugs reported in the last sprint",
        "taskDate": "2024-10-30",
        "category": "Development"
      }
    ]
  },
  {
    "id": 102,
    "firstName": "Priya Verma",
    "email": "priyaverma@company.com",
    "password": "123",
    "taskCounts": {
      "active": 0,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "UI Design Update",
        "taskDescription": "Create a new UI layout for the dashboard",
        "taskDate": "2024-11-05",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Mockup Preparation",
        "taskDescription": "Prepare mockups for the client presentation",
        "taskDate": "2024-10-28",
        "category": "Design"
      }
    ]
  },
  {
    "id": 103,
    "firstName": "Vikram Singh",
    "email": "vikramsingh@company.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Test Case Design",
        "taskDescription": "Write test cases for the new module",
        "taskDate": "2024-11-02",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Regression Testing",
        "taskDescription": "Perform regression testing on the production environment",
        "taskDate": "2024-10-29",
        "category": "Testing"
      }
    ]
  },
  {
    "id": 104,
    "firstName": "Neha Mehta",
    "email": "nehamehta@company.com",
    "password": "123",
    "taskCounts": {
      "active": 0,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Project Planning",
        "taskDescription": "Create the initial project plan for the upcoming sprint",
        "taskDate": "2024-11-04",
        "category": "Management"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Team Meeting",
        "taskDescription": "Discuss project progress with the team",
        "taskDate": "2024-10-27",
        "category": "Management"
      }
    ]
  },
  {
    "id": 105,
    "firstName": "Arjun Das",
    "email": "arjundas@company.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 0,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "System Maintenance",
        "taskDescription": "Perform maintenance checks on the server",
        "taskDate": "2024-11-03",
        "category": "Support"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Troubleshooting",
        "taskDescription": "Investigate and resolve system downtime issues",
        "taskDate": "2024-10-31",
        "category": "Support"
      }
    ]
  }
];


    const admin = [{
      "id": 1,
      "name": "Rajesh Kumar",
      "email": "rajeshkumar@company.com",
      "role": "Admin",
      "department": "Management",
      "phone": "+91-9876543210",
      "password": "123"
    },]


  
export const setstorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
    }

export const getstorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {admin, employees}
    }    
   


  