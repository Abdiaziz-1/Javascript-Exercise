


function fetchDataWithPromise() {
    return new Promise(( resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if(success) {
                resolve("Data fetched successfully");
            }else {
                reject("faild to fetch data")
            }

        },3000)
    })
}

async function fetchDataUsingAsync() {


    try {
          const data = await fetchDataWithPromise()
          console.log(data)
    } catch(error) {
        console.log(error)
    }
  
}
fetchDataUsingAsync();
 