if [ -f .env ]; then
    echo ".env file already exists. Skipping copy."
else
    cp .env.example .env
    echo ".env.example copied to .env"
fi

# Check if pnpm is installed by verifying its version
if pnpm -v > /dev/null 2>&1; then
    echo "pnpm is installed. Running: pnpm install"
    pnpm install

    if [ $? -eq 0 ]; then
        echo "pnpm install completed successfully."
        echo "You can now run: pnpm run dev"
    else
        echo "pnpm install failed."
        exit 1
    fi
else
    echo "Error: pnpm is not installed. Please install pnpm first."
    exit 1
fi