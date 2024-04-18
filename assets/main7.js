document.addEventListener('DOMContentLoaded', function() {
    var magnifierContainers = document.querySelectorAll('.magnifier-container');

    magnifierContainers.forEach(function(container) {
        var magnifierIcon = container.querySelector('.magnifier-icon');
        var tooltip = container.querySelector('.tooltip');

        magnifierIcon.addEventListener('mouseenter', function() {
            tooltip.style.display = 'block';
        });

        container.addEventListener('mouseleave', function() {
            tooltip.style.display = 'none';
        });
    });
});
