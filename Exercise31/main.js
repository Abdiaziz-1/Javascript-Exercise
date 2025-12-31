
async function fetchRequestUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if(!response.ok) {
            throw new Error(`Http error ! ${response.status}`);
        }
        const users = await response.json()

        console.log("The Users are", users)

    } catch (error) {
        console.log(error)
    }
}
fetchRequestUser();