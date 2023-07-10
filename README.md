Instructions
1.  Install PHP8.1, composer and Node.js.
2.	Download the project (or clone using GIT)
3.	Create .env file and configure database credentials
4.	Navigate to the project's root directory using terminal
5.	Run composer install
6.	Set the encryption key by executing php artisan key:generate --ansi
7.	Run migrations php artisan migrate
8.	Start local server by executing php artisan serve
9.	Open new terminal and navigate to the react folder
10.	Copy react/.env and adjust the VITE_API_BASE_URL parameter
11.	Run npm install
12.	Run npm run dev to start vite server for React
