# HTTP Requests with Python

## Challenge

Just like in other programming languages, making HTTP requests is an important part of modern internet-connected applications.

Your challenge is to use the **REST Countries API** to retrieve information about countries, such as population, languages, and currencies.

📌 **API Documentation:** [https://restcountries.com/](https://restcountries.com/)

Your script should:

1. Prompt the user to enter the **name of a country**.
2. Validate the input to ensure a **non-empty country name** is entered.
3. Use the **REST Countries API** to fetch data about the country.
4. Display the **common name** and **population** of the country.

## Key Learnings

- How to **send HTTP requests** in Python using `requests`.
- How to **work with JSON responses** and extract relevant data.
- How to **handle errors and invalid inputs** gracefully.

## User Story

As a developer,  
I want to fetch country data using an API,  
So that I can display relevant information dynamically.

## Acceptance Criteria

- The script must prompt the user to enter a country name.
- If the input is empty, the script should **ask again** until a valid name is provided.
- The script should **send an HTTP request** to the REST Countries API.
- If the country is found, display:
  - The **common name** of the country.
  - The **population** of the country.
- If the country is not found, display a friendly **error message**.

## Expected Output

```yaml
Enter a country name: Canada
Country: Canada
Population: 38,246,000
```

- Or if the country is invalid:

```yaml
Enter a country name: XYZ
Country not found. Please check the spelling and try again.
```

## Useful Online Resources

- [Python `requests` Library](https://docs.python-requests.org/en/latest/)
- [REST Countries API Documentation](https://restcountries.com/)
- [Working with JSON in Python](https://realpython.com/python-json/)
