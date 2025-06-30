const fullName = "  john doe  ";
     const formattedName = fullName
       .trim()
       .split(" ")
       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
       .join(" ");
     console.log(formattedName); // Outputs: "John Doe"

     fullName.trim();


     const systex=" this is my first try ";
     const result=systex.trim();
     const result1=systex.split( "  ");
     console.log(result);
     console.log(result1);
