
function insert_Row() {
    //Write your code here
  let myTable = document.getElementById('sampleTable');
	
  let tr = document.createElement('tr');
	for(let col=0;col<2;col++){
	  let td = document.createElement('td');
	  td.innerText = `New Cell${col+1}`;
	  tr.appendChild(td);
	}
	myTable.appendChild(tr);
}

