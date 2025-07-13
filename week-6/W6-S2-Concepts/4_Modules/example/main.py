# import the format_address function from the formatting module
import formatting

address = {
    "address1": "Google London",
    "address2": "6 King's Boulevard",
    "address3": "Kings Cross",
    "town": "London",
    "county": "",
    "post_code": "N1C 4BU",
}

display_address = formatting.format_address(address)

print(display_address)
