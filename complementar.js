// Função para sugerir boas práticas com base na pegada de carbono
function sugerirPraticas(pegadaTotal) {
    console.log("\n=== Sugestões de Boas Práticas Sustentáveis ===");
    
    if (pegadaTotal <= 100) {
        console.log("Parabéns! Sua pegada de carbono está abaixo da média. Continue com hábitos sustentáveis, como:");
        console.log("- Manter o consumo consciente de energia.");
        console.log("- Priorizar transportes não poluentes, como bicicleta ou caminhada.");
        console.log("- Reciclar e reduzir resíduos.");
    } else if (pegadaTotal > 100 && pegadaTotal <= 300) {
        console.log("Sua pegada de carbono está dentro de uma faixa moderada. Considere as seguintes melhorias:");
        console.log("- Substituir lâmpadas tradicionais por LED para reduzir o consumo de energia.");
        console.log("- Utilizar transporte público ou compartilhar viagens para diminuir as emissões.");
        console.log("- Compostar resíduos orgânicos para reduzir o impacto ambiental.");
    } else {
        console.log("Sua pegada de carbono está elevada. Aqui estão algumas mudanças importantes para adotar:");
        console.log("- Instalar painéis solares ou utilizar energia renovável, se possível.");
        console.log("- Evitar o uso de carros individuais e priorizar transportes sustentáveis.");
        console.log("- Reduzir o consumo de produtos descartáveis e aumentar a reciclagem.");
    }

    console.log("\nAdotar pequenas mudanças pode ter um grande impacto no planeta!");
}

// Exemplo de uso
const pegadaTotal = 250; // Substitua por uma entrada real da calculadora anterior
sugerirPraticas(pegadaTotal);
