Instructions 
Install PHP8.1, composer and Node.js.
Download the project (or clone using GIT)
Create .env file and configure database credentials
Navigate to the project's root directory using terminal
Run composer install
Set the encryption key by executing php artisan key:generate --ansi
Run migrations php artisan migrate
Start local server by executing php artisan serve
Open new terminal and navigate to the react folder
Copy react/.env and adjust the VITE_API_BASE_URL parameter
Run npm install
Run npm run dev to start vite server for React
