const utils = { 
    deviceIsWeb: window.innerWidth >= 680,
   
    checkAPIfailure: res => {
         res = res.hasOwnProperty('data') ? res.data : res;
        if (!!res && res.hasOwnProperty('status') && res.status !== 200) {
            return res.data;
        } else {
            return res.data;
        }
    },

    sortBy: (arr, sortByKey) => {
        return arr.sort((a, b) => {
            return a[sortByKey] < b[sortByKey] ? -1 : a[sortByKey] > b[sortByKey] ? 1 : 0;
        });
    },

    uniqueData: (arr) => {
        return Array.isArray(arr) &&
            arr.reduce((unique, o) => {
                if (!unique.some(obj => obj._id === o._id)) {
                    unique.push(o);
                }
                return unique;
            }, []);
    },
};
export default utils;
