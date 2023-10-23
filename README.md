<div align="center">
  <br/>
  <h1><a href="https://kareer.vercel.app/">Kareer :technologist: </a></h1>
  <p>
    <strong>Kareer is a platform for candidates to find and apply for jobs that match their skills.</strong>
  </p>
  
  <br/>
</div>

### Tech Stack
- **Next.Js**: Server side rendering
- **Prisma**: DB agnostic ORM
- **Typescript**: Typesafety
- **Tailwind**: CSS framework
- **shadcn**: UI components library
- **zod**: Form validation
- **Vercel**: Deployment

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Rishabh-Singh-Codes/kareer.git
```

2. Navigate to the project directory:
```bash
cd kareer
```

3. Install the dependencies: 
```bash
npm install
```

4. Run the development server
```bash
npm run dev
```

### Functionalities
- Displaying the list of jobs obtained from database.
- Filtering jobs based on departments.
- Displaying the complete details of a particular role.
- Applying to a job using basic details.
- Displaying success or error message after applying.
- Dark/Light mode.
- Fully responsive.
- Edge cases handled:
  - No duplicate applications for a particular role using the same email.
  - No jobs available at the moment.
  - Error and Not-Found pages.
