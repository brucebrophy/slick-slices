const formatter = Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
});

export default function formatMoney(amountInCents) {
  return formatter.format(amountInCents / 100);
}
