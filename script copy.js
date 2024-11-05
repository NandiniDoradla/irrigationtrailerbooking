// Sample data representing existing orders
const orders = {
    '12345': { status: 'In Transit', estimatedDelivery: 'In 15min' },
    '67890': { status: 'In Transit', estimatedDelivery: 'In 20min' },
    '54321': { status: 'Delivered', estimatedDelivery: 'In 30min' },
};

document.getElementById('trackOrder').addEventListener('click', function() {
    const trackingNumber = document.getElementById('trackingNumber').value;
    const orderStatusDiv = document.getElementById('orderStatus');

    if (orders[trackingNumber]) {
        const order = orders[trackingNumber];
        orderStatusDiv.innerHTML = `
            <p>Status: ${order.status}</p>
            <p>Estimated Delivery: ${order.estimatedDelivery}</p>
        `;
    } else {
        orderStatusDiv.innerHTML = '<p style="color:red;">Order not found. Please check the tracking number.</p>';
    }
});
