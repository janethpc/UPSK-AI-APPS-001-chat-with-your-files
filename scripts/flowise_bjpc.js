async function query(data) {
    const response = await fetch(
        "http://localhost:3000/api/v1/prediction/7a8cfd3a-f8e6-42a7-bed6-3a7bd85fa1ce",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );
    const result = await response.json();
    return result;
}

query({"question": "Hey, how are you?"}).then((response) => {
    console.log(response);
});
