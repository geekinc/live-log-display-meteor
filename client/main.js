import '../imports/startup/accounts-config.js';
import '../imports/ui/body.js';

Template.registerHelper('formatDate', function(date) {
    // return moment(date).format('MM/DD/YYYY HH:MM:SS');
    return moment(date).valueOf();
});

Template.registerHelper('today', function() {
    return moment().format('MM/DD/YYYY');
});

Template.registerHelper('fetchClass', function(text) {
    let classes = '';

    if (text.includes('COGNITO:'))
        classes += 'cognito ';

    if (text.includes('FABRIC:'))
        classes += 'private ';

    if (text.includes('QLDB:'))
        classes += 'blockchain ';

    if (text.includes('BLOCKCHAIN:'))
        classes += 'blockchain ';

    if (text.includes('SNS:'))
        classes += 'sns ';

    if (text.includes('API:'))
        classes += 'api ';

    if (text.includes('SES:'))
        classes += 'ses ';

    if (text.includes('RDS:'))
        classes += 'ses ';

    return classes;
});
