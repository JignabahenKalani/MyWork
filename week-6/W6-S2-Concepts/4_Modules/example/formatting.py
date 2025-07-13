def format_address(address):

    address1 = address["address1"]
    address2 = address["address2"]
    address3 = address["address3"]
    town = address["town"]
    post_code = address["post_code"]
    county = address["county"]

    # Format the address as one long string
    formatted_address = address1
    if address2:
        formatted_address += ", " + address2
    if address3:
        formatted_address += ", " + address3

    formatted_address += ", " + town
    if county:
        formatted_address += ", " + county

    formatted_address += ", " + post_code

    return formatted_address
