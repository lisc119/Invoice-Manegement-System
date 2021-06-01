
const getDate = (arg) => {
    var date;
    switch(arg){
        case '12': {
            date = new Date(new Date().getFullYear(), 0, 1);
            return date.toISOString().slice(0, 10);
            // res: 2020.01.01
        }
        case 'last_year': {
            date = new Date(new Date().getFullYear() - 1, 0, 1);
            return date.toISOString().slice(0, 10);
        }
        case '0': {
            date = new Date();
            // res: 2020.11.10(today)
            return date.toISOString().slice(0, 10);
        }
        case '1': {
            date = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
            // res: 2020.11.01
            return date.toISOString().slice(0, 10);
        }
        case '2': {
            date = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1);
            // res: 2020.10.01
            return date.toISOString().slice(0, 10);
        }
        case '3': {
            date = new Date(new Date().getFullYear(), new Date().getMonth() - 2, 1);
            // res: 2020.09.01
            return date.toISOString().slice(0, 10);
        }
        case '6': {
            date = new Date(new Date().getFullYear(), new Date().getMonth() - 5, 1);
            return date.toISOString().slice(0, 10);
            // res: 2020.06.01
        }
        case 'from': {
            let res = new Date(new Date());
            return res.toISOString().slice(0, 10)
        }
        default: {
            return date.toISOString().slice(0, 10);
        }
    }
}

export default getDate;