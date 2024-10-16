import axios from "axios";

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
})

export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch({
        type: 'SET_LOADED',
        payload: false,
    });/* ОШИБКА ПИСАТЬ setLoaded(false)) БЕЗ dispatch*/

    /* fetch(`http://localhost:3001/pizzas?category=${category}&_sort=${sortBy}&_order=desc`)
        .then((resp) => resp.json())
        .then((json) => {
            dispatch(setPizzas(json));
        }); */

    //ПРИМЕР С axios. Для начала нужно установить библиотеку axios

    axios
        .get(`/pizzas?${category !== null ? `category=${category}` : ''
            }&_sort=${sortBy.type}&_order=${sortBy.order}`,
        )
        .then(({ data }) => {
            dispatch(setPizzas(data));
        })
};

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});
