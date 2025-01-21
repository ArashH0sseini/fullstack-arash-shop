# Fullstack Arash Shop

A fullstack e-commerce application built with **Next.js** (frontend) and **Laravel** (backend). This project serves as a sample for building scalable and modern web applications with a focus on performance, user experience, and robust backend integration.

---

## Features

- **Authentication**: Email and SMS-based registration and login.
- **Product Management**: Dynamic product listing, filtering, and detailed product pages.
- **Shopping Cart**: AJAX-based cart management with real-time updates.
- **Order Management**: Order placement, scheduling, and tracking.
- **Admin Panel**: Full control over products, categories, orders, and user management.
- **Market Place**: Multi-vendor support with seller accounts and commission-based sales.
- **Blog**: A blogging system for articles and news.
- **Ticketing System**: A professional support ticketing system for customer service.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens.

---

## Technologies Used

### Frontend:
- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **State Management**: Context API / Redux (based on future updates)
- **Other Tools**: Axios, React Query, and more.

### Backend:
- **Framework**: [Laravel](https://laravel.com/)
- **Database**: MySQL
- **Authentication**: Laravel Sanctum
- **APIs**: RESTful APIs for seamless communication with the frontend.

---

## Project Structure

```plaintext
root/
├── frontend/       # Next.js frontend code
├── backend/        # Laravel backend code
├── .gitignore      # Git ignore rules
├── README.md       # Project overview
└── package.json    # Dependencies and scripts

Installation
Prerequisites:

    Node.js: v18.18.0 or higher
    PHP: 8.1 or higher
    Composer: Latest version
    MySQL: Running instance

Steps:

    Clone the repository:

git clone https://github.com/ArashH0sseini/fullstack-arash-shop.git
cd fullstack-arash-shop

Set up the frontend:

cd frontend
npm install
npm run dev

Set up the backend:

    cd backend
    composer install
    cp .env.example .env
    php artisan key:generate
    php artisan migrate --seed
    php artisan serve

Usage

    Open the frontend app:

http://localhost:3000

Access the backend API:

    http://localhost:8000/api

    Log in with test credentials (if seeded):
        Admin: admin@example.com / password
        User: user@example.com / password

Contribution

Feel free to fork, submit issues, or create pull requests. Contributions are welcome to make this project even better!
License

This project is licensed under the MIT License. See the LICENSE file for details.
Contact

For queries or feedback, reach out to work.arashhosseini@gmail.com