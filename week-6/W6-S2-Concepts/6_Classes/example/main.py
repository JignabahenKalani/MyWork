class Database:
    """Base class for a simple in-memory database."""

    def __init__(self):
        self.records = []

    def add_new(self, record):
        """Adds a new record to the database."""
        self.records.append(record)
        print(f"New record added: {record}")

    def get_records(self):
        """Returns all records in the database."""
        return self.records


class Customers(Database):
    """Represents a customer database."""

    def add_new(self, name, email):
        """Adds a new customer record."""
        customer = {"Type": "Customer", "Name": name, "Email": email}
        super().add_new(customer)

class RetailCustomers(Customers):
    """Represents a customer database."""

    def add_new(self, name, email):
        """Adds a new customer record."""
        customer = {"Type": "Customer", "Name": name, "Email": email}
        super().add_new(customer)


class Suppliers(Database):
    """Represents a supplier database."""

    def add_new(self, name, product):
        """Adds a new supplier record."""
        supplier = {"Type": "Supplier", "Name": name, "Product": product}
        super().add_new(supplier)


class Orders(Database):
    """Represents an orders database."""

    def add_new(self, order_id, customer_name, product):
        """Adds a new order record."""
        order = {
            "Type": "Order",
            "Order ID": order_id,
            "Customer": customer_name,
            "Product": product,
        }
        super().add_new(order)


# Example Usage
if __name__ == "__main__":
    
    # Create database instances
    customer_db = Customers()
    supplier_db = Suppliers()
    order_db = Orders()

    # Add records
    customer_db.add_new("Alice Smith", "alice@example.com")
    supplier_db.add_new("Tech Supplies Inc.", "Laptops")
    order_db.add_new(101, "Alice Smith", "Laptop")

    # Retrieve and print records
    print("\nCustomers:", customer_db.get_records())
    print("Suppliers:", supplier_db.get_records())
    print("Orders:", order_db.get_records())
    
