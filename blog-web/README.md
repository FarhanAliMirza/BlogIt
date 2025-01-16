# BlogIt: A Modern Blogging Platform 🚀

**Author:** Farhan Ali Mirza

## Overview 📖
BlogIt is a blogging platform developed with a React frontend and a serverless backend deployed on Cloudflare Workers. It leverages the power of Prisma as an ORM and Neon as a PostgreSQL database provider to ensure efficient and scalable data management.

### Key Features ✨
- **Frontend:** Built with React for a dynamic and interactive user experience.
- **Backend:** Serverless architecture using Cloudflare Workers for fast and scalable operations.
- **Database:** Utilizes Prisma as the ORM for seamless database interactions, powered by Neon for hosting the PostgreSQL database.
- **Deployment:** Fully deployed on a serverless infrastructure for cost efficiency and performance.

## Technologies Used 💻
- **Frontend:**
  - React ⚛️
  - Tailwind CSS for styling 🎨
- **Backend:**
  - Cloudflare Workers ☁️
- **Database:**
  - Prisma ORM 🛠️
  - Neon PostgreSQL database 🗄️
- **Others:**
  - TypeScript for type safety ✅
  - Zod for schema validation 🔍

## How It Works ⚙️
1. **Frontend:**
   - The frontend provides an intuitive and responsive interface for users to create, edit, and read blog posts.
   - React handles state management and routing, ensuring a smooth user experience.

2. **Backend:**
   - The serverless backend is hosted on Cloudflare Workers, enabling rapid response times and reduced latency.
   - Prisma is used to interact with the Neon PostgreSQL database, ensuring efficient querying and data integrity.

3. **Database:**
   - Neon provides a scalable and reliable PostgreSQL database solution.
   - Prisma simplifies database management with its powerful schema and query features.

## Installation and Setup 🛠️

### Prerequisites ✅
- Node.js and npm installed
- Access to a Neon database
- Cloudflare account for deploying workers

### Steps 📋
1. **Clone the Repository**
   ```bash
   git clone https://github.com/farhanalimirza/blogit.git
   cd blogit
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_URL=your_neon_database_url
   CLOUDWORKERS_API_KEY=your_cloudflare_api_key
   ```

4. **Run Database Migrations**
   ```bash
   npx prisma migrate dev
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

6. **Deploy to Cloudflare Workers**
   ```bash
   npm run deploy
   ```

## Future Plans 🌟
- Adding authentication using OAuth or JWT.
- Implementing a rich-text editor for blog posts.
- Enhancing analytics and SEO capabilities.

## Contributing 🤝
Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License 📜
This project is licensed under the MIT License.

---

**GitHub Repository:** [farhanalimirza](https://github.com/FarhanAliMirza/BlogIt)
