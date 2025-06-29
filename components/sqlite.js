import * as SQLite from 'expo-sqlite';

export async function openDatabase() {
  db = await SQLite.openDatabaseAsync('EtecJobs.db', {
    useNewConnection: true,
  });

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS tb_vagas_salvas (
       cdvaga INT NOT NULL PRIMARY KEY,
       id_tipo_vaga NOT NULL,
       nm_vaga VARCHAR(80) NOT NULL,
       ds_vaga TEXT NOT NULL,
       ds_keywords VARCHAR(100) NOT NULL,
       st_vaga CHAR(1) NOT NULL,
       dt_registro_vaga DATETIME NOT NULL,
       url_imagem_vaga VARCHAR(200) NOT NULL,
       nm_tipo_vaga VARCHAR(100) NOT NULL
    );
  `);
}

export async function VagasSalvas() {
  const rep = await db.getAllAsync('SELECT * FROM tb_vagas_salvas');
  console.log('vagas favoritadas buscadas')
  return rep;
}

export async function SalvarFavorito(item) {
  await db.runAsync(
    `
    INSERT INTO tb_vagas_salvas VALUES
      (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `,
    [
      item.cdvaga,
      item.id_tipo_vaga,
      item.nm_vaga,
      item.ds_vaga,
      item.ds_keywords,
      item.st_vaga,
      item.dt_registro_vaga,
      item.url_imagem_vaga,
      item.nm_tipo_vaga,
    ]
  );
  console.log('vaga favoritada', item)
  return true;
}

export async function ExcluirFavorito(item) {
  await db.runAsync(
    `
    DELETE FROM tb_vagas_salvas WHERE cdvaga = ?
  `,
    item
  );
  console.log('vaga retirada', item)
  return true;
}
