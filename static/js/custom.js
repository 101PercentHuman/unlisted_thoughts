document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('table.sortable').forEach(tbl => new Tablesort(tbl));
});

// Fake visitor counter
document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('visitor-counter');
    if (!counter) return;

    // Generate a random number between 5,000 and 25,000
    const target = Math.floor(Math.random() * (25000000 - 5000000 + 1)) + 5000;
    
    let current = 0;
    const duration = 2000; // animation duration in ms
    const stepTime = Math.max(Math.floor(duration / target), 10); // minimum 10ms per increment

    const increment = () => {
        current += Math.ceil(target / (duration / stepTime));
        if (current >= target) {
            current = target;
            counter.textContent = `Visitors: ${current.toLocaleString()}`;
        } else {
            counter.textContent = `Visitors: ${current.toLocaleString()}`;
            setTimeout(increment, stepTime);
        }
    };

    increment();
});
