import requests

res = requests.get("https://api.chucknorris.io/jokes/random")

print(res.status_code)

data = res.json()

print(data["value"])
