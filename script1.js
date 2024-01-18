function recordDonation() {
    var donorName = document.getElementById('donorName').value;
    var amount = document.getElementById('amount').value;

    if (donorName && amount) {
        var donationList = document.getElementById('donationItems');
        var newDonationItem = document.createElement('li');
        newDonationItem.textContent = donorName + ' donated $' + amount;
        donationList.appendChild(newDonationItem);

        // Clear the form fields
        document.getElementById('donorName').value = '';
        document.getElementById('amount').value = '';
    } else {
        alert('Please enter both donor name and amount.');
    }
}
