const rowColumnsGenarator = (n = 5) => {
    for (let i = 0; i < n; i++) {
        let row = document.createElement('tr')
        // let tableHead = document.createElement('th')
        let columns = document.createElement('td')

        row.textContent = 'Table row'
        columns.textContent = 'Table column'
        // tableHead.textContent = 'Table Head'

        row.style.border = '1px solid #000'
        columns.style.border = '1px solid #000'
        // tableHead.style.border = '2px solid #000'
        // tableHead.style.fontWeight = '900'
        genarateTable.appendChild(row)
        row.appendChild(columns)
        // row.appendChild(tableHead)
    }
}
console.log(genarateTable)
btnGenerate.addEventListener('click', function () {
    let userInputRows = inputRows.value
    let userinputColumns = inputColumns.value
    rowColumnsGenarator(userInputRows)
})