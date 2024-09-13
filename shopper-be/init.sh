if [ -f .env ]; then
    echo ".env file already exists. Skipping copy."
else
    cp .env.example .env
    echo ".env.example copied to .env"
fi

docker compose exec shopper_be composer install
docker compose exec shopper_be php artisan key:generate
docker compose exec shopper_be php artisan migrate:fresh --seed