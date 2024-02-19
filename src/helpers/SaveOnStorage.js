export const SaveOnStorage = (key, object) => {
    let element = JSON.parse(localStorage.getItem(key))

    if (Array.isArray(element))
        element.push(object)
    else
        element = [object]

    localStorage.setItem(key, JSON.stringify(element))
    
    return object
}