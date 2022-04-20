var count = 0
function addRow(){
	var tbl = document.getElementById('tbl')
  console.log(count)
  var row = tbl.insertRow(count);
  
  for(var i=0; i<=2; i++){

    var cell = row.insertCell(i)
    cell.innerHTML = Math.floor((Math.random() * 10) +1 )
  }
  count++
}

function deleteRow() {
	if(count > -1){
  	count = count-1
		document.getElementById('tbl').deleteRow(0)
  }
	
}
