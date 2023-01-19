@echo on
npx tsc src/index.ts
npx tsc src/types/index.ts
npx tsc src/index.ts --declaration
npx tsc src/types/index.ts --declaration

echo "build success"

