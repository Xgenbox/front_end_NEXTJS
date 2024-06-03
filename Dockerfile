FROM node:18-alpine

WORKDIR /workspace

COPY package.json .

# Use --legacy-peer-deps to resolve dependency issues
RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

CMD ["npm", "start"]
