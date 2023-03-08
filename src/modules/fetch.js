const getLists = async () => {
    const response = await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2gzeEkv7rMvQMPeB1pjG/scores/");
    const data = await response.json();

    return data;
};

export {getLists}