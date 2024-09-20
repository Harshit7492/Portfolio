export async function addData(currentTab, formData) {
    try {
        const response = await fetch(`/api/${currentTab}/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        return result;
    } catch (e) {
        return { success: false, message: e.message };
    }
}

export async function getData(currentTab) {
    try {
        const response = await fetch(`/api/${currentTab}/get`, {
            method: 'GET'
        });
        const result = await response.json();
        return result;
    } catch (e) {
        console.error(`Error in getData: ${e.message}`);
        return { success: false, message: e.message };
    }
}

export async function updateData(currentTab, formData) {
    try {
        const response = await fetch(`/api/${currentTab}/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        return result;
    } catch (e) {
        console.error(`Error in updateData: ${e.message}`);
        return { success: false, message: e.message };
    }
}

export async function login(formData) {
    try {
        const response = await fetch(`/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        return result;
    } catch (e) {
        console.error(`Error in login: ${e.message}`);
        return { success: false, message: e.message };
    }
}