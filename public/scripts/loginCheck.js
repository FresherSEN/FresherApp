import { account } from 'public/appwrite.js';

async function checkIfLoggedIn() {
    try {
        const user = await account.get();
    } catch (error) {
        window.location.href = "public/";
    }
}
checkIfLoggedIn();