function getListOfFormatOptions(options){
    return options.map((option, i) => <option key={i}>{option}</option>)
}
export default getListOfFormatOptions