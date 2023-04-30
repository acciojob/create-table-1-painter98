
function insert_Row() {
    //Write your code here
  /*let myTable = document.getElementById('sampleTable');
	
  let tr = document.createElement('tr');
	for(let col=0;col<2;col++){
	  let td = document.createElement('td');
	  td.innerText = `New Cell${col+1}`;
	  tr.appendChild(td);
	}
	myTable.prepend(tr);*/

	var table = document.getElementById('sampleTable');
	var newRow = table.insertRow(0);

	var leftcell = newRow.insertCell(0);
	var rightcell = newRow.insertCell(1);

	leftcell.innerHTML = 'New Cell1';
	rightcell.innerHTML = 'New Cell2';
}

