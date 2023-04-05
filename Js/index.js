// Buttons (-)(+)
function onReady() {
    const qtyGroups = document.querySelectorAll('.qty-group');
    if (qtyGroups) {
        qtyGroups.forEach((qtyGroup) => {

            const qtyDecrease = qtyGroup.querySelector('[data-quantity-decrease]');
            const qtyIncrease = qtyGroup.querySelector('[data-quantity-increase]');
            const qtyInput = qtyGroup.querySelector('[data-quantity-input]');

            const disableEnableDecrease = () => {
                if (qtyInput.value == 1) {
                    qtyDecrease.disabled = true;
                } else {
                    qtyDecrease.disabled = false;
                }
            };
            qtyDecrease.addEventListener('click', (event) => {
                event.preventDefault();
                if (qtyInput.value > 1) {
                    qtyInput.value--;
                }
                disableEnableDecrease();
            });
            qtyIncrease.addEventListener('click', (event) => {
                event.preventDefault();
                qtyInput.value++;
                disableEnableDecrease();
            });
            qtyInput.addEventListener('keyup', () => {
                disableEnableDecrease();
            });
        });
    }
}

onReady();

// Select All checkbox 
document.getElementById('check-all').addEventListener('click', function () {
    var checkboxes = document.querySelectorAll('.check-item');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = this.checked;
        updateRowStyle(checkboxes[i]);
    }
});

// Individual Select Checkbox
var checkboxes = document.querySelectorAll('#myTable .check-item');
for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', function () {
        updateRowStyle(this);
    });
}

// Update row style function
function updateRowStyle(checkbox) {
    var row = checkbox.parentNode.parentNode;
    if (checkbox.checked) {
        row.classList.add('selected');
    } else {
        row.classList.remove('selected');
    }
}

// Search Item
function myFunction() {
    var input, filter, table, tr, td, i, j;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                break;
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

// Add Item 
function add_row() {
    const f = document.getElementById("myForm");
    if (f.checkValidity()) {
        var no = document.getElementById("no").value;
        var date = "11 March 2023";
        var code_row = "#12";
        var name = "Cheese Sandwich";
        var category = "Sandwich";
        var quantity = document.getElementById("qua_row").value;
        var ex_date = document.getElementById("ex_date").value;
        var mfg = document.getElementById("mfg").value;
        var price = document.getElementById("price").value;

        var table = document.getElementById("myTable");
        var table_len = (table.rows.length);

        var add = table.insertRow(table_len).outerHTML = "<tr><td><input type='checkbox' class='check-item' " + table_len + " ></td><td id='no" + table_len + "'>" + no +
            "</td><td id='date" + table_len + "'>" + date +
            "</td><td id='code_row" + table_len + "'>" + code_row +
            "</td><td id='name_row" + table_len + "'>" + name +
            "</td><td id='category" + table_len + "'>" + category +
            "</td><td id='qua_row" + table_len + "'>" + quantity +
            "</td><td id='ex_date" + table_len + "'>" + ex_date +
            "</td><td id='mfg" + table_len + "'>" + mfg +
            "</td><td id='price" + table_len + "'>" + price +
            "</td><td><button type='button' class='border-0 bg-transparent mx-auto' id='edit_button"
            + table_len + "' onclick='edit_row("
            + table_len + ")'><i class='fa-solid fa-pen-to-square'></i> </button><button type='button' class='border-0 bg-transparent mx-auto'  style='display: none;' ' id='save_button"
            + table_len + "' onclick='save_row(" + table_len + ")'><i class='fa-solid fa-floppy-disk'></i></button> </td></tr>";

        document.getElementById("new_name").value = "";
        document.getElementById("new_country").value = "";
        document.getElementById("new_age").value = "";
    }
}

// Edit Row
function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";

    var c = document.getElementById("code_row" + no);
    var n = document.getElementById("name_row" + no);
    var q = document.getElementById("qua_row" + no);

    var c_data = c.innerHTML;
    var n_data = n.innerHTML;
    var q_data = q.innerHTML;

    c.innerHTML = "<input class='d_input' type='text' id='name_text" + no + "' value='" + c_data + "'>";
    n.innerHTML = "<input type='text' id='country_text" + no + "' value='" + n_data + "'>";
    q.innerHTML = "<input class='d_input' type='text' id='age_text" + no + "' value='" + q_data + "'>";
}

// Save Row
function save_row(no) {
    var country_val = document.getElementById("country_text" + no).value;
    var name_val = document.getElementById("name_text" + no).value;
    var age_val = document.getElementById("age_text" + no).value;

    document.getElementById("code_row" + no).innerHTML = name_val;
    document.getElementById("name_row" + no).innerHTML = country_val;
    document.getElementById("qua_row" + no).innerHTML = age_val;

    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
}

// Delete Row
function deleteRow() {
    document.querySelectorAll('#myTable .check-item:checked').forEach(e => {
        e.parentNode.parentNode.remove()
    });
}

// Download as PDF
var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};

$('#download_btn').click(function () {
    doc.fromHTML($('#myTable').html(), 15, 15, {
        'width': 700,
        'elementHandlers': specialElementHandlers
    });
    doc.save('sample_file.pdf');
});
