import requests


def main():
    while True:
        country_name = input("Enter a country name: ").strip()
        if country_name:
            url = f"https://restcountries.com/v3.1/name/{country_name}"

            print(requests.get(url).status_code)

            data = requests.get(url).json()

            print(data["name"])


            # Fetch country details from the REST Countries API

            # Check if the response status code is 200

            # If the response status code is 200, get the first matching country result

            # Get the common name and population of the country

            # Print the country name and population

            # If the response status code is not 200, print an error message

            break
        else:
            print("Invalid input. Please enter a valid country name.")


if __name__ == "__main__":
    main()

