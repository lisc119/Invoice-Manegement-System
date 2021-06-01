

const getDates = (activeSub) => {
    // let yearly = activeSub == "12";

    let isoDate = (date) => date.toISOString().slice(0, 10);

    let date = new Date();
    
    switch(activeSub) {
        case '12': {
            return [
                isoDate(new Date(Date.UTC(date.getFullYear(), 0, 1))),
                isoDate(date),
                isoDate(new Date(Date.UTC(date.getFullYear() - 1, 0, 1))),
                isoDate(new Date(Date.UTC(date.getFullYear() -1, 11, 31))),
            ];
        }
        case '6': {
            return [
                isoDate(new Date(Date.UTC(date.getFullYear(), date.getMonth() - 5, 1))),
                isoDate(date),
                isoDate(new Date(Date.UTC(date.getFullYear() - 1, date.getMonth() - 5, 1))),
                isoDate(new Date(Date.UTC(date.getFullYear() - 1, date.getMonth() + 1, 0))),
            ];
        }
        case '3': {
            return [
                isoDate(new Date(Date.UTC(date.getFullYear(), date.getMonth() - 2, 1))),
                isoDate(date),
                isoDate(new Date(Date.UTC(date.getFullYear() - 1, date.getMonth() - 2, 1))),
                isoDate(new Date(Date.UTC(date.getFullYear() - 1, date.getMonth() + 1, 0))),
            ];
        }
        case '2': {
            return [
                isoDate(new Date(Date.UTC(date.getFullYear(), date.getMonth() - 1, 1))),
                isoDate(new Date(Date.UTC(date.getFullYear(), date.getMonth(), 0))),
                isoDate(new Date(Date.UTC(date.getFullYear() - 1, date.getMonth() - 1, 1))),
                isoDate(new Date(Date.UTC(date.getFullYear() - 1, date.getMonth(), 0))),
            ];
        }

        case '1': {
            return [
                isoDate(new Date(Date.UTC(date.getFullYear(), date.getMonth(), 1))),
                isoDate(date),
                isoDate(new Date(Date.UTC(date.getFullYear() - 1, date.getMonth(), 1))),
                isoDate(new Date(Date.UTC(date.getFullYear() - 1, date.getMonth() + 1, 0))),
            ];
        }
        default: {
            return date
        }
    }
    
    /*
    const getDate = (timeFrame, isLastYear = false) => {
        var date = new Date();
        switch(timeFrame){
            case '12': {
                date = new Date(new Date().getFullYear(), 0, 1);
                // res: 2020.01.01
                break;
            }
            case '0': {
                if (yearly) {
                    date = new Date(new Date().getFullYear() + 1, 0, 1);
                    // date: 2021.1.1
                } else {
                    date = new Date(date.getFullYear(), date.getMonth() + 1, 0);
                    // date: 2020.12.1
                }
                break;
            }
            case '1': {
                date = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
                // res: 2020.11.01
                break;
            }
            case '2': {
                date = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1);
                // res: 2020.10.01
                break;
            }
            case '3': {
                date = new Date(new Date().getFullYear(), new Date().getMonth() - 2, 1);
                // res: 2020.09.01
                break;
            }
            case '6': {
                date = new Date(new Date().getFullYear(), new Date().getMonth() - 5, 1);
                // res: 2020.06.01
                break;
            }
        }

        if (isLastYear) {
            date.setFullYear(date.getFullYear() - 1);
        }

        return date.toISOString().slice(0, 10);
    }

    return [
        getDate(timeFrameStart),
        getDate(timeFrameEnd),
        getDate(timeFrameStart, true),
        getDate(timeFrameEnd, true)
    ]*/
}

export default getDates;