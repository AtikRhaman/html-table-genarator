const inputRows = document.querySelector('#input_rows')
const inputColumns = document.querySelector('#input_columns')
const genarateTable = document.querySelector('#genarate_table')
const btnGenerate = document.querySelector('#btn_genarate')

const rowColumnsGenarator = function () {
    const tableHeadGenarator = (userInputRows = 10 + 1) => {
        for (let i = 0; i < userInputRows; i++) {
            const tableHead = document.createElement('th')
            tableHead.textContent = 'th heading'
            tableHead.style.border = '2px solid #000'
            tableHead.style.fontWeight = '900'
            genarateTable.appendChild(tableHead)
        }
    }
    tableHeadGenarator()
    const rowGenarator = (userInputRows) => {
        for (let i = 0; i < userInputRows; i++) {
            const row = document.createElement('tr')
            row.textContent = 'tr row'
            row.style.border = '1px solid #000'
            genarateTable.appendChild(row)

            const columnsGenarator = (userInputColumns) => {
                for (let i = 0; i < userInputColumns; i++) {
                    let columns = document.createElement('td')
                    columns.textContent = 'td column'
                    columns.style.border = '1px solid #000'
                    row.appendChild(columns)
                }
            }
            columnsGenarator()
            btnGenerate.addEventListener('click', function () {
                let userinputColumns = inputColumns.value
                console.log(userinputColumns)
                columnsGenarator(userinputColumns)
            })
        }
        btnGenerate.addEventListener('click', function () {
            let userInputRows = inputRows.value
            console.log(userInputRows)
            rowGenarator(userInputRows)
        })
    }
    rowGenarator()
}
rowColumnsGenarator()