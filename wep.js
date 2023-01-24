function addlist() {
    if (document.getElementById('inputlist').value == '', document.getElementById('inputprice').value == '', document.getElementById('inputamount').value == '') {
        alert('Please enter the name of the item')
        return
    }
    else {
        var list = document.getElementById('inputlist').value
        var price = document.getElementById('inputprice').value
        var amount = document.getElementById('inputamount').value
        var total = price * amount
        var table = document.getElementById('table')
        var row = table.insertRow(0)
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)
        cell1.innerHTML = list
        cell2.innerHTML = price
        cell3.innerHTML = amount
        document.getElementById('inputlist').value = ''
        document.getElementById('inputprice').value = ''
        document.getElementById('inputamount').value = ''
        return
    }
}

function clearlist() {
    var table = document.getElementById('table')
    var row = table.rows.length
    for (var i = 0; i < row; i++) {
        table.deleteRow(0)
    }
    document.getElementById('total').innerHTML = ''
    return 
}
function calculate() {
    var table = document.getElementById('table')
    var row = table.rows.length
    var total = 0
    for (var i = 0; i < row; i++) {
        var price = table.rows[i].cells[1].innerHTML
        var amount = table.rows[i].cells[2].innerHTML
        total += price * amount
    }
    document.getElementById('total').innerHTML = total.toFixed(2)
    return 
}