const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE
fs.readFile("./firstname.txt", "utf8")
  .then((firstname) => {
    return fs.readFile("./lastname.txt", "utf8").then((lastname) => {
      return { firstname: firstname.trim(), lastname: lastname.trim() };
    });
  })
  .then((names) => {
    return fs.readFile("./age.txt", "utf8").then((age) => {
      return { ...names, age: age.trim() };
    });
  })
  .then((data) => {
    return fs.readFile("./hobbies.txt", "utf8").then((hobbies) => {
      return { ...data, hobbies: hobbies.trim() };
    });
  })
  .then((allData) => {
    const hobbiesArray = JSON.parse(allData.hobbies);
    console.log(
      `${allData.firstname} ${allData.lastname} is ${allData.age} years old and his hobbies are ${hobbiesArray[0]} and ${hobbiesArray[1]}`,
    );
  })
  .catch((error) => {
    console.error("Error reading files:", error);
  });

// ASYNC/AWAIT SOLUTION BELOW THIS LINE

async function readFiles() {
  try {
    const firstname = await fs.readFile("firstname.txt", "utf8");
    const lastname = await fs.readFile("lastname.txt", "utf8");
    const age = await fs.readFile("age.txt", "utf8");
    const hobbies = await fs.readFile("hobbies.txt", "utf8");

    const hobbiesArray = JSON.parse(hobbies);

    console.log(
      `${firstname.trim()} ${lastname.trim()} is ${age.trim()} years old and his hobbies are ${hobbiesArray[0]} and ${hobbiesArray[1]}`,
    );
  } catch (error) {
    console.error("Error reading files:", error);
  }
}

readFiles();
