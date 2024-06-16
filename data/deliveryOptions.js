import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
export const deliveryOptions = [
    {
        id : '1',
        delivertDays : 7,
        priceCents: 0
    },

    {
        id : '2',
        delivertDays: 3,
        priceCents: 499
    },

    {
        id: '3',
        delivertDays: 1,
        priceCents: 999
    }
];

export function getDeliveryOption(deliveryOptionId){
    let deliveryOption;

    deliveryOptions.forEach((option) => {
        if(option.id === deliveryOptionId){
            deliveryOption = option;
        }
    });

    return deliveryOption || deliveryOptions[0];
}

function isWeekend(date) {
    const dayOfWeek = date.format('dddd');
    return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
}

export function calculateDeliveryDate(deliveryOption){

    let remainingDays = deliveryOption.delivertDays;
    let delivertDate = dayjs();

    while (remainingDays > 0) {
        delivertDate = delivertDate.add(1, 'day');
        
        if(!isWeekend(delivertDate)){
            remainingDays--;
        }
    }

    const dateString = delivertDate.format('dddd, MMMM D');

    return dateString;
}