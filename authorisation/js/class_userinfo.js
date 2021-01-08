
// ---------Конструктор строки юзера в таблице---------------------------------------------------------------------
class UserInfo {
    constructor(object, table, rights) {
        this.rights = rights;
        this.table = table;
        this.object = object;
    }
    renderRow() {
        this.createCells();
        this.setValues();
        if (this.rights) {
            this.createRemoveBtn();
        }
    }
    createCells() {
        this.row = document.createElement('tr');
        this.login = document.createElement('td')
        this.data = document.createElement('td');
        this.status = document.createElement('td');
        this.cellBtn = document.createElement('td');
        this.row.append(this.login, this.data, this.status, this.cellBtn);
        this.table.append(this.row);
    }
    createRemoveBtn() {
        this.cellBtn.innerText = ' ';
        this.btnRemove = document.createElement('button');
        this.btnRemove.innerText = 'Remove';
        this.cellBtn.append(this.btnRemove);
        this.row.append(this.cellBtn);

        this.btnRemove.addEventListener('click', () => {
            let users = JSON.parse(localStorage.getItem('users'));
            let i = -1;
            // for (let i = 0;  i < users.length;i++) {
            //     console.log(users);
            for (let { login, status, registration } of users) {
                console.log(users);
                i++;
                console.log(i);

                if (this.object.login === login && this.object.status === status && this.object.registration === registration) {
                    console.log('here');
                    console.log(users);
                    users.splice(i, 1);
                    console.log(users);
                    localStorage.removeItem('users');
                    localStorage.setItem('users', JSON.stringify(users));
                    console.log(users);
                    break;
                }
            }

            this.row.remove();
        })
    }
    setValues() {
        let { login, registration, status } = this.object;
        this.login.innerText = login;
        this.data.innerText = registration;
        this.status.innerText = status;
        this.cellBtn.innerText = 'no rights';
    }

}

