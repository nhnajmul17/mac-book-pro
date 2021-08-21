//memory calculate funtion

function extraMemory(cost) {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = parseInt(cost);
}

// storage calculate function

function extraStorage(cost) {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = parseInt(cost);
}

// delivery calculate function
function deliveryFee(cost) {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = parseInt(cost);
}


// memory calculation
document.getElementById('memory-8gb').addEventListener('click', function () {
    extraMemory(0);
})
document.getElementById('memory-16gb').addEventListener('click', function () {
    extraMemory(180);
})


// storage calculation
document.getElementById('storage-256gb').addEventListener('click', function () {
    extraStorage(0);
})
document.getElementById('storage-512gb').addEventListener('click', function () {
    extraStorage(100);
})
document.getElementById('storage-1tb').addEventListener('click', function () {
    extraStorage(180);
})



// delivery option
document.getElementById('free-delivery').addEventListener('click', function () {
    deliveryFee(0);
})
document.getElementById('paid-delivery').addEventListener('click', function () {
    deliveryFee(20);
})
