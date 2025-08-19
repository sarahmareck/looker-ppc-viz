const platforms = [
  { name: 'Meta Ads', key: 'meta_spend' },
  { name: 'Google Ads', key: 'google_spend' },
  { name: 'LinkedIn Ads', key: 'linkedin_spend' },
  { name: 'StackAdapt', key: 'stack_spend' }
];

function drawTable(data) {
  const container = document.getElementById('table-container');
  container.innerHTML = '';

  const table = document.createElement('table');
  table.style.borderCollapse = 'collapse';
  table.style.width = '100%';

  // Table header
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  ['Platform', 'Spend'].forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    th.style.border = '1px solid #ccc';
    th.style.padding = '8px';
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Table body
  const tbody = document.createElement('tbody');

  // We assume data has only 1 row for the dummy join key blend
  const row = data.tables.DEFAULT[0];

  platforms.forEach(p => {
    const tr = document.createElement('tr');

    // Platform column
    const tdPlatform = document.createElement('td');
    tdPlatform.textContent = p.name;
    tdPlatform.style.border = '1px solid #ccc';
    tdPlatform.style.padding = '8px';
    tr.appendChild(tdPlatform);

    // Spend column
    const tdSpend = document.createElement('td');
    tdSpend.textContent = row[p.key] || 0;
    tdSpend.style.border = '1px solid #ccc';
    tdSpend.style.padding = '8px';
    tdSpend.style.textAlign = 'right';
    tr.appendChild(tdSpend);

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  container.appendChild(table);
}

dscc.subscribeToData(drawTable, { transform: dscc.objectTransform });
