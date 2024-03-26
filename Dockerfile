FROM mcr.microsoft.com/playwright:v1.42.1-jammy

ARG TELEGRAM_TOKEN
ARG CHAT_ID
ARG EMBASSY_EMAIL
ARG EMBASSY_PASSWORD
ARG CRON_EXPRESSION
ENV TELEGRAM_TOKEN=$TELEGRAM_TOKEN
ENV CHAT_ID=$CHAT_ID
ENV EMBASSY_EMAIL=$EMBASSY_EMAIL
ENV EMBASSY_PASSWORD=$EMBASSY_PASSWORD

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

RUN chmod +x run_test.sh

CMD ["./run_test.sh"]