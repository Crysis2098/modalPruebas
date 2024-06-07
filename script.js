document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('myModal');
    const btn = document.getElementById('openModalBtn');
    const span = document.getElementsByClassName('close')[0];

    btn.onclick = function() {
        modal.style.display = 'block';
        fetchTableData();
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    function fetchTableData() {
        fetch('fetch_data.php')
            .then(response => response.json())
            .then(data => populateTable(data))
            .catch(error => console.error('Error:', error));
    }

    function populateTable(data) {
        const table = document.getElementById('data-table');
        table.innerHTML = '';

        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key in data[0]) {
            let th = document.createElement('th');
            th.innerText = key;
            row.appendChild(th);
        }

        let tbody = table.createTBody();
        data.forEach(item => {
            let row = tbody.insertRow();
            for (let key in item) {
                let cell = row.insertCell();
                cell.innerText = item[key];
            }
        });
    }

    document.getElementById('downloadBtn').onclick = function() {
        fetch('download_xlsx.php')
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = 'fallas_motivos.xlsx';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch(error => console.error('Error:', error));
    }
});
