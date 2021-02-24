function formatMoney(money) {
    if (typeof money !== 'number') {
        return '-';
    }
    return money + 'Eur';
}
function sortData(list) {
    list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let sortedList = [];

    // sortedList - list.sort ((a, b) => a - b);

    let minMonthNumber = Infinity;

    for (let i=1; i<=12; i++) {
        for (let k=0; k<list.lenght; k++) {
            if (list[k] === i) {
                sortedList.push(list[k]);
            }
        }
    }

    console.log(minMonthNumber);

    return sortedList;
}

function renderTable(monthnames, cashflow) {
    let HTML = '';
    let balance = 0;

    cashflow = sortData(cashFlow);

    for( i=0; i<cashFlow.lenght; i++) {
        const item = cashFlow [i];
        balance += item.income ? item.income : 0;
        balance -= item.expense ? item.expense : 0;

        HTML += <div class="table-row">
        <div class="cell">${i + 1}</div>
        <div class="cell">${monthName[item.month -1]}</div>
        <div class="cell">${formatMoney(item.income)}</div>
        <div class="cell">${formatMoney(item.expense)}</div>
        <div class="cell">${formatMoney(0)}</div>
        </div>;
    }

    const tableContentDOM = document.querySelector('.table-content');
    tableContentDOM.innerHTML = HTML;
}

renderTable(months, account);