export function twiceAsHold(ageFather, ageSon) {
    const dobleAgeSon = ageSon * 2

    if (ageFather > dobleAgeSon)
        return ageFather - dobleAgeSon
    else
        return dobleAgeSon - ageFather
}

console.log(twiceAsHold(42, 21));
