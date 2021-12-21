var obj = {}

export const initObj = () => {
    obj["name"] = "prakash"
    obj["age"] = 21
}

export const delObj = () => {
    obj = {}
}

export const nameCheck = (name1) => {
    if (obj["name"] !== name1) {
        return false
    }
    return true
}

export const ageCheck = (age1) => {
    if (obj["age"] !== age1) {
        return false
    }
    return true
}