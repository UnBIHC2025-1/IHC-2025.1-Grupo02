document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.chart-container').forEach(container => {
        const checkboxes = container.closest('.md-content').querySelectorAll('input[type="checkbox"]');
        const canvas = container.querySelector('.accessibility-pie-chart');

        if (!canvas) {
            console.warn('Canvas para o gráfico de pizza não encontrado no contêiner:', container);
            return;
        }

        const ctx = canvas.getContext('2d');
        let chartInstance = null;

        function updateChart() {
            let checkedCount = 0;
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    checkedCount++;
                }
            });

            const totalCheckboxes = checkboxes.length;
            const uncheckedCount = totalCheckboxes - checkedCount;

            const data = {
                labels: ['Conforme', 'Não Conforme'],
                datasets: [{
                    data: [checkedCount, uncheckedCount],
                    backgroundColor: [
                        '#0000ff', // Verde para "Conforme"
                        '#FF0000'  // Amarelo/Laranja para "Não Conforme"
                    ],
                    hoverOffset: 4
                }]
            };

            if (chartInstance) {
                chartInstance.data.datasets[0].data = [checkedCount, uncheckedCount];
                chartInstance.update();
            } else {
                chartInstance = new Chart(ctx, {
                    type: 'pie',
                    data: data,
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'bottom',
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        let label = context.label || '';
                                        if (label) {
                                            label += ': ';
                                        }
                                        if (context.parsed !== null) {
                                            label += context.parsed;
                                            if (totalCheckboxes > 0) {
                                                const percentage = Math.round((context.parsed / totalCheckboxes) * 100);
                                                label += ` (${percentage}%)`;
                                            }
                                        }
                                        return label;
                                    }
                                }
                            },
                            // --- INÍCIO DA ALTERAÇÃO: ADIÇÃO DO TÍTULO DO GRÁFICO ---
                            title: {
                                display: true, // Mostra o título
                                text: 'Gráfico de Conformidade', // O texto do seu título
                                font: {
                                    size: 16, // Tamanho da fonte do título
                                    weight: 'bold' // Negrito
                                },
                                color: '#333' // Cor do texto do título (ajuste conforme o tema, se necessário)
                            }
                            // --- FIM DA ALTERAÇÃO ---
                        }
                    }
                });
            }
        }

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', updateChart);
        });

        updateChart();
    });
});