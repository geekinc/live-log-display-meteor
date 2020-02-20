import '../imports/startup/accounts-config.js';
import '../imports/ui/body.js';

Template.registerHelper('formatDate', function(date) {
    return moment(date).format('MM/DD/YYYY HH:MM:SS');
});