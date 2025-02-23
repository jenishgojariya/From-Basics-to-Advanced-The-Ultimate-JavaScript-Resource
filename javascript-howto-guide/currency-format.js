const numberFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});
const formatted = numberFormatter.format(1000000); // ",000,000.00"
