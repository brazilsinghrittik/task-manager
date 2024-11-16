// Handle form submission
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    const checkinDate = document.getElementById('checkin-date').value;
    const checkoutDate = document.getElementById('checkout-date').value;
    const roomType = document.getElementById('room-type').value;

    alert(`Booking successful!\nCheck-in Date: ${checkinDate}\nCheck-out Date: ${checkoutDate}\nRoom Type: ${roomType}`);
});

// Booking button functionality
const bookButtons = document.querySelectorAll('.room button');
bookButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Room booked!');
    });
});
