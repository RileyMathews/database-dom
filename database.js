//load database from local storage
const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}
const homeInventoryDatabase = loadDatabase("inventory")


//create variable ref for article tag
const article = document.querySelector("#myStuff")

const print = filter => {

    //loop through the top level database object, returning arrays as array
    for (array in homeInventoryDatabase) {
        if (array === filter) {

            //loop through the arrays, returning objects as i
            for (let i = 0; i < homeInventoryDatabase[array].length; i++) {

                //create a section tag to hold information in the current array
                const section = document.createElement("section")

                //loop through the objects, returning values as property
                for (property in homeInventoryDatabase[array][i]) {

                    //creates p element
                    let p = document.createElement("p")

                    //adds text content to the element p 
                    p.textContent = homeInventoryDatabase[array][i][property]
                    
                    //appends p to section
                    section.appendChild(p)
                }
                //appends section to article
                article.appendChild(section)
            }
        }
    }
}

print("instruments")
print("furniture")
print("electronics")
