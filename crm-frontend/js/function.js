import {preloadFn} from "./main/tbody.js";
import {loadAPI} from "./setting/server.js";

function fillterBtn() {
  const table = document.querySelector('.table__content');
  const headers = table.querySelectorAll('.sorted');

  const directions = Array.from(headers).map(function(header) {
    return '';
  });

  const transform = function(index, content) {
    const type = headers[index].getAttribute('data-type');
    switch (type) {
      case 'number':
        return parseFloat(content);
      case 'string':
      default:
        return content;
    }
  };

  const sortColumn = function(index) {
    const tableBody = table.querySelector('tbody');
    const rows = tableBody.querySelectorAll('tr');
    const direction = directions[index] || 'asc';
    const multiplier = (direction === 'asc') ? 1 : -1;
    const newRows = Array.from(rows);

    newRows.sort(function(rowA, rowB) {
      const cellA = rowA.querySelectorAll('td')[index].innerHTML;
      const cellB = rowB.querySelectorAll('td')[index].innerHTML;

      const a = transform(index, cellA);
      const b = transform(index, cellB);

      switch (true) {
        case a > b:
          return 1 * multiplier;
        case a < b:
          return -1 * multiplier;
        case a === b:
          return 0;
      }
    });
    [].forEach.call(rows, function(row) {
      console.log(row)
      tableBody.removeChild(row);
    });
    directions[index] = direction === 'asc' ? 'desc' : 'asc';
    newRows.forEach(function(newRow) {
      tableBody.appendChild(newRow);
    });
  };
  [].forEach.call(headers, function(header, index) {
    header.addEventListener('click', function() {
      let thTitle = header.querySelector('.th-title');
      if(!thTitle.classList.contains('active')) {
        for(let i = 0; i < headers.length; i++) {
          headers[i].querySelector('.th-title').classList.remove('active', 'active-mod');
        }
        thTitle.classList.add('active');
      } else if (thTitle.classList.contains('active')) {
        thTitle.classList.toggle('active-mod');
      }
      sortColumn(index);
    })
  });
}

const searchFn = (e) => {
  const table = document.querySelector('.table__content');
  const toLowerCase = e.toLowerCase();
  let tBody = table.querySelector('tbody');
  let tr = tBody.querySelectorAll("tr");

  for (let i = 0; i < tr.length; i++) {
    const tdId = tr[i].getElementsByTagName("td")[0];
    const tdName = tr[i].getElementsByTagName("td")[1]

    if(tdId || tdName) {
      let txtValueId = tdId.textContent || tdId.innerText;
      let txtValueName = tdName.textContent || tdName.innerText;
      txtValueName = txtValueName.toLowerCase();
      if (e.length === 0) {
        tr[i].classList.remove('show-search-js');
        tr[i].classList.remove('opacity-search-js');
      } else if((txtValueName.indexOf(toLowerCase) > -1) || (txtValueId.indexOf(toLowerCase) > -1)) {
        tr[i].classList.add('show-search-js');
        tr[i].classList.remove('opacity-search-js');
      } else {
        tr[i].classList.remove('show-search-js');
        tr[i].classList.add('opacity-search-js');
      }
    }
  }
}

const closeModal = (section) => {
  section.remove();
}

const rebootTable = (section) => {
  closeModal(section);
  preloadFn();
  loadAPI();
}

export {fillterBtn, closeModal, rebootTable, searchFn}
