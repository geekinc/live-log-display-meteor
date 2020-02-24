import '../imports/startup/accounts-config.js';
import '../imports/ui/body.js';

Template.registerHelper('formatDate', function(date) {
    return moment(date).format('MM/DD/YYYY HH:MM:SS');
});

Template.registerHelper('today', function() {
    return moment().format('MM/DD/YYYY');
});

Template.registerHelper('fetchClass', function(text) {
    let classes = '';

    if (text.includes('COGNITO:'))
        classes += 'cognito ';

    if (text.includes('FABRIC:'))
        classes += 'blockchain ';

    if (text.includes('SNS:'))
        classes += 'sns ';

    if (text.includes('API:'))
        classes += 'api ';

    if (text.includes('SES:'))
        classes += 'ses ';

    return classes;
});
