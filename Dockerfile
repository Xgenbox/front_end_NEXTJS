FROM node:18-alpine

WORKDIR /workspace

COPY package.json .

# Install sharp and other dependencies
RUN npm install --legacy-peer-deps && npm install sharp --legacy-peer-deps

COPY . .

RUN npm run build

CMD ["npm", "start"]
