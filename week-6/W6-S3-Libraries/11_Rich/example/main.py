from rich.console import Console
from rich.table import Table
from rich.progress import track
from rich.logging import RichHandler
import time
import logging

# Initialize Rich Console
console = Console()

# 1. Display Styled Text
console.print("[bold green]Welcome to the Rich Demo Application![/bold green]")


# 2. Creating and Displaying a Table
def display_table():
    table = Table(title="Programming Languages")

    table.add_column("Language", style="cyan", justify="left")
    table.add_column("Type", style="magenta", justify="left")
    table.add_column("Usage", style="yellow", justify="left")

    table.add_row("Python", "Interpreted", "Web, AI, Data Science")
    table.add_row("C++", "Compiled", "Game Development, Systems")
    table.add_row("JavaScript", "Interpreted", "Web Development")

    console.print(table)


# 3. Progress Bar Simulation
def loading_simulation():
    console.print("[bold cyan]Processing data...[/bold cyan]")
    for _ in track(range(10), description="Processing..."):
        time.sleep(0.2)  # Simulate work


# 4. Rich Logging Example
def setup_logging():
    logging.basicConfig(
        level="INFO", format="%(message)s", datefmt="[%X]", handlers=[RichHandler()]
    )
    logger = logging.getLogger("rich")
    return logger


logger = setup_logging()

# Running the functions
if __name__ == "__main__":
    display_table()  # Show a formatted table
    loading_simulation()  # Show a progress bar
    logger.info("This is an informational log message!")
    logger.warning("This is a warning log message!")
    logger.error("This is an error log message!")
