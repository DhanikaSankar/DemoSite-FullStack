export const monthList =() => {
    const currentDate = new Date();
    const months = Array.from({length  :12 } , (_ , index) => {
        const month = new Date(currentDate.getFullYear() , index).toLocaleString('default' , {month : 'long'});
        return {index : index+1 , name : month};
    })
    return months;
}


