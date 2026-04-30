export const basurl = "https://ecommercev01.pythonanywhere.com/";

export const getCategoriy = () => {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    return fetch(`${basurl}/product/categories/`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            return result;
        })
        .catch((error) => console.error(error));
};

export const getList = () => {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    return fetch(`${basurl}/product/list/`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            return result;
        })
        .catch((error) => console.error(error));
}


export const getProduct = (id) => {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    return fetch(`${basurl}/product/detail/?product_id=${id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            return result;
            console.log(result)
        })
        .catch((error) => console.error(error));
}



export const register = (name, email, password) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        first_name: name,
        email_or_phone: email,
        password: password
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
    };

    return fetch(`${basurl}/user/register/`, requestOptions)
        .then(async (response) => {
            const data = await response.json()

            if (!response.ok) {
                throw data
            }

            return data
        })
        .catch((error) => {
            console.error(error)
            return error
        });
};

export const login = (password, email) => {
    console.log(password, email);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "email_or_phone": email,
        "password": password
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("https://ecommercev01.pythonanywhere.com/user/token/", requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));


}