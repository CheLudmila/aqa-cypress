FROM cypress/included:13.17.0

WORKDIR /app

COPY . .

ENV CYPRESS_VERIFY_TIMEOUT=100000
ENV MOZ_HEADLESS=1

CMD ["cypress", "run", "--browser", "firefox", "--headless"]