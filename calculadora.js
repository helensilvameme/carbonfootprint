// Calculadora de Pegada de Carbono

// Função para calcular a pegada de carbono do consumo de energia elétrica (em kg de CO2)
function calcularEnergia(energiaConsumida) {
    const fatorEmissao = 0.084; // kg CO2 por kWh (média global, pode variar por região)
    return energiaConsumida * fatorEmissao;
}

// Função para calcular a pegada de carbono do transporte (em kg de CO2)
function calcularTransporte(distancia, tipoTransporte) {
    const fatoresEmissao = {
        carro: 0.21, // kg CO2 por km
        onibus: 0.11, // kg CO2 por km
        bicicleta: 0, // sem emissão
        aPe: 0 // sem emissão
    };

    return distancia * (fatoresEmissao[tipoTransporte] || 0);
}

// Função para calcular a pegada de carbono de resíduos (em kg de CO2)
function calcularResiduos(quantidadeResiduos) {
    const fatorEmissao = 0.45; // kg CO2 por kg de resíduos
    return quantidadeResiduos * fatorEmissao;
}

// Função principal para calcular a pegada total
function calcularPegadaTotal(energiaConsumida, distancia, tipoTransporte, quantidadeResiduos) {
    const pegadaEnergia = calcularEnergia(energiaConsumida);
    const pegadaTransporte = calcularTransporte(distancia, tipoTransporte);
    const pegadaResiduos = calcularResiduos(quantidadeResiduos);

    return pegadaEnergia + pegadaTransporte + pegadaResiduos;
}

// Exemplo de uso
const energiaConsumida = 150; // Consumo em kWh/mês
const distancia = 200; // Distância percorrida em km/mês
const tipoTransporte = "carro"; // Tipo de transporte usado
const quantidadeResiduos = 30; // Resíduos gerados em kg/mês

const pegadaTotal = calcularPegadaTotal(energiaConsumida, distancia, tipoTransporte, quantidadeResiduos);

console.log("Sua pegada de carbono total é de aproximadamente " + pegadaTotal.toFixed(2) + " kg de CO2 por mês.");
