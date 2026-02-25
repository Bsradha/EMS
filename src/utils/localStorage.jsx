const employees = [
  {
    id: 1,
    email: "employee1@company.com",
    password: "1234",
    tasks: [
      {
        title: "Prepare report",
        description: "Prepare monthly sales report",
        date: "2026-02-01",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Team meeting",
        description: "Attend weekly team meeting",
        date: "2026-02-03",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Client follow-up",
        description: "Follow up with client",
        date: "2026-02-05",
        category: "Communication",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    email: "employee2@company.com",
    password: "1234",
    tasks: [
      {
        title: "Bug fixing",
        description: "Fix login bugs",
        date: "2026-02-02",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Code review",
        description: "Review pull requests",
        date: "2026-02-04",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Deploy build",
        description: "Deploy to staging",
        date: "2026-02-06",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    email: "employee3@company.com",
    password: "1234",
    tasks: [
      {
        title: "Design banner",
        description: "Create promo banner",
        date: "2026-02-01",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "UI review",
        description: "Review UI changes",
        date: "2026-02-03",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix layout",
        description: "Fix mobile layout issue",
        date: "2026-02-05",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    email: "employee4@company.com",
    password: "1234",
    tasks: [
      {
        title: "Content writing",
        description: "Write blog article",
        date: "2026-02-01",
        category: "Content",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Proofread",
        description: "Proofread blog",
        date: "2026-02-02",
        category: "Content",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Publish blog",
        description: "Publish article",
        date: "2026-02-04",
        category: "Content",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    email: "employee5@company.com",
    password: "1234",
    tasks: [
      {
        title: "Customer support",
        description: "Handle support tickets",
        date: "2026-02-01",
        category: "Support",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Call customer",
        description: "Resolve complaint",
        date: "2026-02-03",
        category: "Support",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update CRM",
        description: "Update customer info",
        date: "2026-02-05",
        category: "Support",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 6,
    email: "employee6@company.com",
    password: "1234",
    tasks: [
      {
        title: "Data entry",
        description: "Enter sales data",
        date: "2026-02-01",
        category: "Data",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Data cleanup",
        description: "Remove duplicates",
        date: "2026-02-02",
        category: "Data",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Backup data",
        description: "Backup database",
        date: "2026-02-04",
        category: "Data",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 7,
    email: "employee7@company.com",
    password: "1234",
    tasks: [
      {
        title: "Market research",
        description: "Research competitors",
        date: "2026-02-01",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Survey analysis",
        description: "Analyze survey data",
        date: "2026-02-03",
        category: "Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Presentation",
        description: "Prepare slides",
        date: "2026-02-05",
        category: "Research",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 8,
    email: "employee8@company.com",
    password: "1234",
    tasks: [
      {
        title: "SEO audit",
        description: "Audit website SEO",
        date: "2026-02-01",
        category: "SEO",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Keyword update",
        description: "Update keywords",
        date: "2026-02-03",
        category: "SEO",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix broken links",
        description: "Resolve 404 errors",
        date: "2026-02-05",
        category: "SEO",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 9,
    email: "employee9@company.com",
    password: "1234",
    tasks: [
      {
        title: "Training",
        description: "Complete onboarding training",
        date: "2026-02-01",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Policy review",
        description: "Read HR policies",
        date: "2026-02-02",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Feedback form",
        description: "Submit feedback",
        date: "2026-02-04",
        category: "HR",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 10,
    email: "employee10@company.com",
    password: "1234",
    tasks: [
      {
        title: "Inventory check",
        description: "Check stock levels",
        date: "2026-02-01",
        category: "Operations",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Vendor call",
        description: "Call suppliers",
        date: "2026-02-03",
        category: "Operations",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Process review",
        description: "Review operations process",
        date: "2026-02-05",
        category: "Operations",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
]

const admin = [
  {
    id: 1,
    email: "admin@company.com",
    password: "1234"
  }
]

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    console.log(employees,admin)
}
