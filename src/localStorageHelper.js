export const saveToLocalStorage = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Greska pri zacuvuvanje na podatoci', error);
    };
};

export const loadFromLocalStorage = (key) => {
    try {
        const storedValue = localStorage.getItem(key);

        if(storedValue && key !== 'token') {
            return JSON.parse(storedValue);
        }
    } catch (error) {
        console.error('Greska pri citanje na podatoci' , error);
        
    };
    return null;
};

export const removeFromLocalStorage = (key) => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error('Greska pri brisenje na podatoci', error);
    }
};