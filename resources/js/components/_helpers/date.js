import moment from 'moment';
export class DateUtils {

    static setLocal(loc = 'fr') {
        moment.locale(loc)
    }

    static formatDateTime(dateTime) {
        DateUtils.setLocal();
        let out = moment(dateTime);
        return out.format('YYYY-MM-DD HH:mm')
    }
}