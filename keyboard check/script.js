//taking reference of the keys
const insert= document.getElementById('insert');
//insert is having the reference of the div with id insert.
//keydown means pressing the key, and e is the event of pressing the key.
window.addEventListener('keydown', (e)=>{
    insert.innerHTML=`
    <div class='color'>
    <table>
    <tr>
        <th>Key</th>
        <th>Key Code</th>
        <th>Code</th>
    </tr>

    <tr>
        <td>${e.key=== " "? "Space": e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
    </tr>
    </table>
    </div>`;
});