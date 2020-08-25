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

    limitText: (title, limit) => {
        const newTitle = [];

        if (limit === -1) {
            return title;
        }

        const length = title ? title.length : 0;

        if (length >= limit) {
            title.split('').reduce((acc, cur) => {
                if (acc + cur.length <= limit) {
                    newTitle.push(cur);
                }
                return acc + cur.length;
            }, 0);
            return `${newTitle.join('') + '...'}`;
        }
        return title;
    }
};
export default utils;
