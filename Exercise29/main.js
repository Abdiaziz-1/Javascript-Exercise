

async function fetchingData() {
    console.log("lets fetch data from the local file")
    const response = await fetch("./data.json");

    const data = await response.json()

    console.log(" The Response is ",data)
}

fetchingData()