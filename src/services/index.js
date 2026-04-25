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