-- CreateTable
CREATE TABLE `cidades` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `estados_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `demandas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `estado` ENUM('AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'PY') NULL,
    `municipio` VARCHAR(191) NULL,
    `comunidade` VARCHAR(191) NULL,
    `autor_pedido` ENUM('Aplicativo', 'Portal', 'Solicitação') NULL,
    `demandante` VARCHAR(191) NULL,
    `dt_solicitacao` DATETIME(3) NULL,
    `dt_resposta` DATETIME(3) NULL,
    `dt_previsao` DATETIME(3) NULL,
    `dt_conclusao` DATETIME(3) NULL,
    `status` ENUM('Em Andamento', 'Concluído') NULL,
    `descricao` VARCHAR(191) NULL,
    `subclasse` VARCHAR(191) NULL,
    `tratativa` VARCHAR(191) NULL,
    `categoria` ENUM('Relacionamento', 'G. da Propriedade', 'Demanda Ambiental', 'PAEBM', 'Danos Materiais', 'Outros', 'Empregos') NULL,
    `incidentePotencial` BOOLEAN NULL,
    `contato` VARCHAR(191) NULL,
    `foto` VARCHAR(191) NULL,
    `GT` BOOLEAN NULL,
    `responsavel` VARCHAR(191) NULL,
    `dt_prazo` DATETIME(3) NULL,
    `complexidade` ENUM('ALTO', 'BAIXO', 'MEDIO') NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
