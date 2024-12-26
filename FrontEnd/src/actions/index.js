export async function refreshToken() {
    try {
        const response = await fetch('/api/login/refreshToken', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const text = await response.text();
        let result;
        try {
            result = JSON.parse(text);
        } catch (e) {
            console.error('Failed to parse JSON:', text);
            throw new Error('Invalid JSON response');
        }

        return result.isLoggedIn;
    } catch (error) {
        console.error('Error refreshing token:', error);
        return false;
    }
}

export async function getUserInfo() {
    try {
        const response = await fetch('/api/profile/getInfo', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const text = await response.text();
        let result;
        try {
            result = JSON.parse(text);
        } catch (e) {
            console.error('Failed to parse JSON:', text);
            throw new Error('Invalid JSON response');
        }

        return result;
    } catch (error) {
        console.error('Error refreshing token:', error);
        return false;
    }
}